"""
Explorer DMC Knowledge Base Ingestion Pipeline

Parses the canonical markdown knowledge base (explorer_dmc_rag_kb.md),
extracts YAML metadata blocks, chunks by section boundaries, and outputs
structured JSONL ready for embedding and vector retrieval.
"""

import re
import json
import os
import math

SOURCE_FILE = os.path.join(os.path.dirname(__file__), "data", "explorer_dmc_rag_kb.md")
OUTPUT_FILE = os.path.join(os.path.dirname(__file__), "data", "chunks.jsonl")

TARGET_CHUNK_TOKENS = 500
MAX_CHUNK_TOKENS = 650
MIN_CHUNK_TOKENS = 80
OVERLAP_TOKENS = 100

METADATA_FIELDS = [
    "chunk_id", "document_type", "section_type", "title",
    "service_category", "subcategory", "geography", "audience",
    "season", "luxury_level", "activity_level", "group_size",
    "indoor_outdoor", "canonical_priority", "language",
]


def estimate_tokens(text):
    return int(len(text.split()) * 1.35)


def parse_yaml_block(yaml_text):
    metadata = {}
    for line in yaml_text.strip().split("\n"):
        if ":" in line:
            key, _, value = line.partition(":")
            key = key.strip()
            value = value.strip()
            if key in METADATA_FIELDS:
                metadata[key] = value
    return metadata


def split_into_subchunks(text, metadata, overlap_tokens=OVERLAP_TOKENS):
    words = text.split()
    total_tokens = estimate_tokens(text)

    if total_tokens <= MAX_CHUNK_TOKENS:
        return [text]

    num_chunks = math.ceil(total_tokens / TARGET_CHUNK_TOKENS)
    words_per_chunk = len(words) // num_chunks
    overlap_words = int(overlap_tokens / 1.35)

    subchunks = []
    start = 0

    while start < len(words):
        end = min(start + words_per_chunk + overlap_words, len(words))
        chunk_text = " ".join(words[start:end])
        if chunk_text.strip():
            subchunks.append(chunk_text)
        start += words_per_chunk

    return subchunks


def parse_knowledge_base(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    yaml_pattern = re.compile(r"```yaml\n(.*?)```", re.DOTALL)
    yaml_blocks = list(yaml_pattern.finditer(content))

    sections = []

    for i, match in enumerate(yaml_blocks):
        metadata = parse_yaml_block(match.group(1))

        body_start = match.end()
        if i + 1 < len(yaml_blocks):
            body_end = yaml_blocks[i + 1].start()
        else:
            body_end = len(content)

        body = content[body_start:body_end]
        body = re.sub(r"\n---\s*$", "", body.strip())
        body = body.strip()

        if not body or not metadata.get("chunk_id"):
            continue

        sections.append({"metadata": metadata, "body": body})

    return sections


def build_chunks(sections):
    chunks = []
    global_index = 0

    for section in sections:
        meta = section["metadata"]
        body = section["body"]

        subchunks = split_into_subchunks(body, meta)

        for sub_i, sub_text in enumerate(subchunks):
            chunk = {}

            for field in METADATA_FIELDS:
                chunk[field] = meta.get(field, "")

            if len(subchunks) > 1:
                chunk["chunk_id"] = f"{meta.get('chunk_id', '')}_{sub_i}"
            else:
                chunk["chunk_id"] = meta.get("chunk_id", "")

            chunk["source_file"] = "explorer_dmc_rag_kb.md"
            chunk["chunk_index"] = global_index
            chunk["chunk_text"] = sub_text
            chunk["token_estimate"] = estimate_tokens(sub_text)
            chunk["embedding_ready"] = True

            chunks.append(chunk)
            global_index += 1

    return chunks


def write_jsonl(chunks, output_path):
    with open(output_path, "w", encoding="utf-8") as f:
        for chunk in chunks:
            f.write(json.dumps(chunk, ensure_ascii=False) + "\n")


def main():
    print(f"Reading: {SOURCE_FILE}")
    sections = parse_knowledge_base(SOURCE_FILE)
    print(f"Parsed {len(sections)} sections from knowledge base")

    chunks = build_chunks(sections)
    print(f"Generated {len(chunks)} chunks")

    token_counts = [c["token_estimate"] for c in chunks]
    print(f"Token range: {min(token_counts)}-{max(token_counts)}, avg: {sum(token_counts)//len(token_counts)}")

    categories = {}
    for c in chunks:
        cat = c.get("service_category", "unknown")
        categories[cat] = categories.get(cat, 0) + 1
    print(f"Categories: {json.dumps(categories, indent=2)}")

    write_jsonl(chunks, OUTPUT_FILE)
    print(f"Written to: {OUTPUT_FILE}")

    print(f"\nSample chunk:")
    sample = chunks[0].copy()
    sample["chunk_text"] = sample["chunk_text"][:200] + "..."
    print(json.dumps(sample, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
