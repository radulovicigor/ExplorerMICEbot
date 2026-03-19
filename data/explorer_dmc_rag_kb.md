# Explorer DMC RAG Knowledge Base
Version: 1.0
Language: English
Purpose: Canonical knowledge base optimized for chunking, embeddings, vector search, and retrieval-augmented generation.

---

# GLOBAL INGESTION NOTES

Use this document as the primary source of truth for the Explorer DMC chatbot knowledge base.

Chunking recommendations:
- Preferred chunk size: 350-650 tokens
- Overlap: 80-120 tokens
- Chunk by section boundaries, not by fixed character count alone
- Never merge two different service families into one chunk
- Keep each program, activity, itinerary, and FAQ block as a separate chunk
- Preserve YAML metadata before each section
- Treat every `chunk_id` block as retrieval-ready content
- Index headings, metadata, and body text
- Keep markdown formatting

Recommended metadata fields:
- chunk_id
- document_type
- section_type
- title
- service_category
- subcategory
- geography
- audience
- season
- luxury_level
- activity_level
- group_size
- indoor_outdoor
- canonical_priority
- language

---

```yaml
chunk_id: company_001
document_type: master_kb
section_type: company_overview
title: Explorer DMC Overview
service_category: company
subcategory: identity
geography: Montenegro; Adriatic
audience: corporate; incentive; VIP; leisure
season: all_year
luxury_level: mixed
activity_level: mixed
group_size: 10-1000
indoor_outdoor: both
canonical_priority: high
language: en
```

## Explorer DMC Overview

Explorer DMC is a destination management and event concept company focused primarily on Montenegro, with broader Adriatic program capability. The company specializes in MICE services, incentive travel, team building programs, VIP experiences, outdoor adventures, sports events, product launches, weddings, and tailor-made travel and event concepts.

Explorer DMC was founded in 2005 in Kolašin, Montenegro. It presents itself as a leading specialized agency for MICE and active tourism in Montenegro, with deep local knowledge, operational experience, and the ability to organize programs throughout the year.

The company positions itself as an all-in-one service provider. This means it can support clients from initial concept design to full execution on the ground, including planning, logistics, supplier coordination, activities, guides, equipment, transport, and optional photo and video production.

Explorer DMC operates through offices in Budva, Podgorica, and Kolašin, which gives it geographic reach across the coast, the central region, and the mountains of northern Montenegro.

---

```yaml
chunk_id: company_002
document_type: master_kb
section_type: company_strengths
title: Core Strengths of Explorer DMC
service_category: company
subcategory: strengths
geography: Montenegro
audience: corporate; agency partners; VIP clients
season: all_year
luxury_level: mixed
activity_level: mixed
group_size: 10-1000
indoor_outdoor: both
canonical_priority: high
language: en
```

## Core Strengths of Explorer DMC

Explorer DMC’s core strengths are built around logistics, destination knowledge, flexibility, and end-to-end execution.

The company emphasizes an all-in-one model supported by its own infrastructure and a professional team of more than 150 employees across the wider company. It provides program planning, customization based on client needs, logistics, organization, field execution, experienced guides and moderators, inventory, materials, props, and optional visual documentation.

Explorer DMC highlights deep knowledge of Montenegro’s terrain, seasonality, hospitality assets, cultural heritage, natural attractions, and premium venues. This allows the company to design experiences that combine authenticity, comfort, creativity, and strong operational control.

Explorer DMC also presents itself as a flexible, tailor-made operator capable of adapting programs by season, geography, group size, physical intensity, luxury level, and client objectives.

---

```yaml
chunk_id: company_003
document_type: master_kb
section_type: company_awards
title: Awards and Recognition
service_category: company
subcategory: awards
geography: Montenegro
audience: corporate; partners
season: all_year
luxury_level: mixed
activity_level: low
group_size: any
indoor_outdoor: both
canonical_priority: medium
language: en
```

## Awards and Recognition

Explorer DMC states that its quality and market reputation are supported by international and regional recognition, including:
- Gold Medal for Service Quality at the Novi Sad Tourism Fair
- Montenegro Wild Beauty Award for the promotion of mountain and continental tourism
- Wild Beauty Award for the best tourism product of Northern Montenegro, specifically the sleigh tour from Kolašin to Žabljak

These awards should be used as supporting credibility indicators rather than as the main explanation of the company’s value.

---

```yaml
chunk_id: company_004
document_type: master_kb
section_type: company_assets
title: Explorer Group Infrastructure and Assets
service_category: company
subcategory: infrastructure
geography: Montenegro
audience: corporate; agency partners; operations
season: all_year
luxury_level: mixed
activity_level: mixed
group_size: any
indoor_outdoor: both
canonical_priority: high
language: en
```

## Explorer Group Infrastructure and Assets

Explorer DMC states that it is part of a wider Explorer Group connected to hospitality and tourism assets in Montenegro. These assets support operational flexibility, stronger logistics, better quality control, and more integrated program design.

Mentioned assets include:
- Restaurant Crno Jezero in Durmitor National Park near Žabljak
- Restaurant Biogradsko Jezero in Biogradska Gora National Park near Mojkovac and Kolašin
- Hotel Porto Tara in the Tara River Canyon area near Žabljak
- Prana Brunch & More on Gorica Hill in Podgorica
- Adventure parks in Lovćen, Kolašin, and Podgorica
- Valdanos beach and restaurant, described as a project under construction with planned opening in June 2026

These assets allow Explorer DMC to combine accommodation, gastronomy, activities, and venue usage into unified programs.

---

```yaml
chunk_id: services_001
document_type: master_kb
section_type: service_family
title: MICE Services
service_category: MICE
subcategory: meetings_incentives_conferences_exhibitions
geography: Montenegro
audience: corporate; business groups
season: all_year
luxury_level: mixed
activity_level: low_to_medium
group_size: 10-1000
indoor_outdoor: both
canonical_priority: high
language: en
```

## MICE Services

Explorer DMC specializes in MICE services, meaning meetings, incentives, conferences, and exhibitions. In practice, this includes planning, organization, logistics, and execution of business events, conferences, corporate gatherings, symposia, celebrations, and incentive travel programs across Montenegro.

The company’s MICE approach is based on combining venue selection, guest logistics, destination storytelling, accommodation, transfers, hospitality, and supporting activities into one complete business event experience.

Explorer DMC can work across coastal, central, and mountain locations depending on the client’s goals, program format, and preferred atmosphere.

---

```yaml
chunk_id: services_002
document_type: master_kb
section_type: service_family
title: Incentive Travel
service_category: incentive
subcategory: multi_day_programs
geography: Montenegro; Adriatic
audience: corporate; international groups
season: all_year
luxury_level: standard_to_luxury
activity_level: low_to_high
group_size: 10-400+
indoor_outdoor: both
canonical_priority: high
language: en
```

## Incentive Travel

Explorer DMC designs one-day and multi-day incentive programs throughout Montenegro and, where relevant, across the wider Adriatic context. These programs are intended to reward, motivate, or connect teams and partners through memorable travel experiences.

An incentive program may combine premium accommodation, local gastronomy, active experiences, cultural visits, scenic transport, VIP services, and team-based moments. Explorer DMC emphasizes storytelling, experiential design, and destination-specific value rather than generic travel products.

Incentive programs may be coastal, mountain-based, lake-based, winter-oriented, adventure-focused, luxury-focused, or mixed.

---

```yaml
chunk_id: services_003
document_type: master_kb
section_type: service_family
title: Team Building Programs
service_category: team_building
subcategory: corporate_programs
geography: Montenegro; Croatia; Slovenia
audience: corporate
season: all_year
luxury_level: mixed
activity_level: low_to_high
group_size: 10-500+
indoor_outdoor: both
canonical_priority: high
language: en
```

## Team Building Programs

Explorer DMC offers a wide portfolio of team building programs for corporate groups. These include strategic indoor formats, creative workshops, culinary activities, outdoor challenges, music-based formats, themed experiences, water-based builds, adventure park usage, sports concepts, and narrative or gamified programs.

The company presents itself as capable of organizing more than sixty team building formats. These programs can be adapted by group size, energy level, location, season, and corporate objective.

Possible objectives include communication improvement, trust building, problem solving, creativity, energy raising, stress reduction, shared achievement, and stronger team identity.

---

```yaml
chunk_id: services_004
document_type: master_kb
section_type: service_family
title: VIP and Luxury Experiences
service_category: VIP
subcategory: luxury_bespoke
geography: Montenegro; Bay of Kotor; Adriatic
audience: VIP; executive; luxury clients
season: all_year
luxury_level: luxury
activity_level: low_to_medium
group_size: small_to_medium
indoor_outdoor: both
canonical_priority: high
language: en
```

## VIP and Luxury Experiences

Explorer DMC offers VIP and luxury experiences for clients seeking privacy, exclusivity, premium comfort, and bespoke service. These experiences may include private jet services, helicopters, luxury ground transfers, yachts, catamarans, boutique hotels, villas, exclusive restaurants, private venue privatization, concierge-style support, and curated cultural or natural access.

VIP concepts can include private tours, heli-picnics, secret dinners, premium wine experiences, heritage venues, luxury accommodation, and full-service logistics designed around discretion and personalization.

The company positions this service line as highly tailored rather than standardized.

---

```yaml
chunk_id: services_005
document_type: master_kb
section_type: service_family
title: Sports Events
service_category: sports_events
subcategory: event_execution
geography: Montenegro
audience: corporate; international participants
season: all_year
luxury_level: mixed
activity_level: medium_to_high
group_size: small_to_large
indoor_outdoor: outdoor
canonical_priority: medium
language: en
```

## Sports Events

Explorer DMC organizes sports events ranging from smaller corporate tournaments to larger international competitions. The company’s sports-event scope includes route planning, equipment supply, safety protocols, medical support, field logistics, and execution support in attractive Montenegrin locations.

Relevant environments include mountain trails, adventure parks, water-based settings, and winter centers.

---

```yaml
chunk_id: services_006
document_type: master_kb
section_type: service_family
title: Product Launches and Brand Events
service_category: product_launch
subcategory: branded_events
geography: Montenegro
audience: corporate; brands; agencies
season: all_year
luxury_level: premium
activity_level: low_to_medium
group_size: small_to_large
indoor_outdoor: both
canonical_priority: medium
language: en
```

## Product Launches and Brand Events

Explorer DMC also supports product launches and brand activations. These can include automotive, technology, fashion, food and beverage, tourism, cosmetics, and related brand experiences.

Services may include concept design, scenography, logistics, interactive installations, pop-up events, media support, destination integration, technical production, and on-site delivery.

The key idea is to connect brand identity with an authentic and memorable environment.

---

```yaml
chunk_id: services_007
document_type: master_kb
section_type: service_family
title: Weddings
service_category: weddings
subcategory: destination_weddings
geography: Montenegro
audience: private clients
season: all_year
luxury_level: premium_to_luxury
activity_level: low
group_size: small_to_large
indoor_outdoor: both
canonical_priority: low
language: en
```

## Weddings

Explorer DMC also organizes weddings in Montenegro. This includes full logistics, venue coordination, guest support, and event delivery across natural, coastal, heritage, and restaurant settings.

Wedding support is positioned as complete organization rather than a venue-only service.

---

```yaml
chunk_id: destination_001
document_type: master_kb
section_type: destination_logic
title: How Explorer DMC Uses Montenegro as a Program Destination
service_category: destination
subcategory: geographic_positioning
geography: Montenegro
audience: all
season: all_year
luxury_level: mixed
activity_level: mixed
group_size: any
indoor_outdoor: both
canonical_priority: high
language: en
```

## How Explorer DMC Uses Montenegro as a Program Destination

Explorer DMC uses Montenegro’s geographic diversity as a core design advantage. Montenegro is not treated simply as a backdrop, but as a modular destination made of distinct environments that can be combined within one itinerary.

The coast supports luxury accommodation, yacht programs, panoramic drives, fine dining, old towns, premium events, and Mediterranean atmosphere.

The mountains support jeep safaris, buggy programs, snowmobile tours, hiking, rafting access, rural hospitality, national park experiences, and winter adventures.

Lakes and rivers support cruising, soft-active nature experiences, scenic lunches, kayaking, SUP, bird watching, and rafting.

Rural and cultural areas support authentic local host experiences, katuns, gastronomy, monasteries, traditional villages, and destination storytelling.

---

```yaml
chunk_id: outdoor_001
document_type: master_kb
section_type: outdoor_portfolio
title: Outdoor Activity Portfolio Overview
service_category: outdoor
subcategory: overview
geography: Montenegro
audience: incentive; corporate; active leisure
season: all_year
luxury_level: standard_to_premium
activity_level: medium_to_high
group_size: small_to_large
indoor_outdoor: outdoor
canonical_priority: high
language: en
```

## Outdoor Activity Portfolio Overview

Explorer DMC offers a broad outdoor portfolio across Montenegro. Activities include rafting, kayaking, canyoning, stand-up paddleboarding, sailing, speedboat tours, scuba diving, snorkeling, paragliding, zip line, via ferrata, hiking, trail running, mountain biking, e-bike tours, ATV tours, buggy tours, jeep safari tours, horseback riding, rock climbing, speleology, camping, glamping, fishing, hunting tourism, windsurfing, kitesurfing, outdoor team-building programs, and organization of sports races and outdoor events.

These activities can be sold as standalone experiences or integrated into larger incentive, team building, or VIP programs.

---

```yaml
chunk_id: outdoor_002
document_type: master_kb
section_type: outdoor_activity
title: ATV and Buggy Tours
service_category: outdoor
subcategory: motorized_land_adventure
geography: Montenegro north; Montenegro south; mountains
audience: incentive; team_building; active groups
season: multi_season
luxury_level: standard_to_premium
activity_level: high
group_size: small_to_medium
indoor_outdoor: outdoor
canonical_priority: high
language: en
```

## ATV and Buggy Tours

ATV and buggy tours connect different regions of Montenegro through adventure-oriented off-road experiences. Programs can range from short one- or two-hour rides to half-day, full-day, or multi-day expeditions.

These tours may pass through mountain roads, panoramic viewpoints, rural areas, and natural landscapes. They can be combined with local gastronomy, household visits, team building elements, or other outdoor activities.

ATV and buggy tours are well suited for incentive groups, active corporate teams, and clients seeking adrenaline and scenic exploration.

---

```yaml
chunk_id: outdoor_003
document_type: master_kb
section_type: outdoor_activity
title: Jeep Safari
service_category: outdoor
subcategory: offroad_scenic
geography: Lovcen; Durmitor; Bjelasica; Moraca; Sinjajevina; Orjen
audience: incentive; active groups; team_building
season: multi_season
luxury_level: standard_to_premium
activity_level: medium
group_size: small_to_medium
indoor_outdoor: outdoor
canonical_priority: high
language: en
```

## Jeep Safari

Jeep safari programs lead guests through mountain landscapes, gravel roads, panoramic viewpoints, and authentic villages that are often accessible only by off-road vehicles.

Mentioned route families include Lovćen Safari, the Durmitor ring, and Bjelasica-based routes, as well as mountain areas such as Morača, Sinjajevina, and Orjen.

These programs may be scenic, cultural, adventurous, or mixed, and can be organized as short, half-day, full-day, or multi-day experiences.

---

```yaml
chunk_id: outdoor_004
document_type: master_kb
section_type: outdoor_activity
title: Horseback Riding
service_category: outdoor
subcategory: nature_experience
geography: Bjelasica; mountain areas; rural villages
audience: incentive; leisure; team_building
season: multi_season
luxury_level: standard_to_premium
activity_level: medium
group_size: small_to_medium
indoor_outdoor: outdoor
canonical_priority: medium
language: en
```

## Horseback Riding

Horseback riding programs offer an authentic way to experience Montenegro’s nature, including mountains, meadows, and traditional villages. These activities can be adapted for both beginners and experienced riders.

They are often appropriate for clients who want a slower, immersive, and scenic activity rather than a high-speed adrenaline format.

Horseback riding can also be paired with rural hospitality, traditional meals, and multi-day incentive concepts.

---

```yaml
chunk_id: outdoor_005
document_type: master_kb
section_type: outdoor_activity
title: Hiking and Trekking
service_category: outdoor
subcategory: mountain_nature
geography: Montenegro mountains; national parks
audience: active groups; incentive; leisure
season: multi_season
luxury_level: standard
activity_level: medium_to_high
group_size: small_to_medium
indoor_outdoor: outdoor
canonical_priority: medium
language: en
```

## Hiking and Trekking

Hiking and trekking programs across Montenegro can range from easy panoramic walks to full-day or multi-day mountain experiences. The landscapes may include Mediterranean terrain, karst areas, forests, high peaks, and national park environments.

These programs are suitable for active groups, nature-oriented incentive travel, and clients who want scenic movement with lower technical complexity than canyoning or off-road programs.

---

```yaml
chunk_id: outdoor_006
document_type: master_kb
section_type: outdoor_activity
title: Canyoning
service_category: outdoor
subcategory: water_adventure
geography: Nevidio; Mrtvica; Medjurecki Potok; Grlja
audience: adventure_groups; incentive; active teams
season: warm_season
luxury_level: standard
activity_level: high
group_size: small_to_medium
indoor_outdoor: outdoor
canonical_priority: medium
language: en
```

## Canyoning

Canyoning in Montenegro takes participants through narrow canyons, water passages, and rugged natural terrain. Mentioned locations include Nevidio Canyon, Mrtvica, Međurečki Potok in Durmitor, and Grlja in Prokletije.

These programs are suited to guests seeking strong adventure content and can be organized as half-day or full-day activities depending on location and difficulty.

---

```yaml
chunk_id: outdoor_007
document_type: master_kb
section_type: outdoor_activity
title: Tara River Rafting
service_category: outdoor
subcategory: river_adventure
geography: Tara River Canyon
audience: incentive; team_building; adventure_groups
season: all_year_or_multi_season
luxury_level: standard_to_premium
activity_level: high
group_size: small_to_medium
indoor_outdoor: outdoor
canonical_priority: high
language: en
```

## Tara River Rafting

Rafting on the Tara River is one of Explorer DMC’s signature adventure products. It takes place in Europe’s deepest canyon and combines rapids, emerald river sections, dramatic cliffs, and strong scenic value.

Programs may be shorter one-day adventures or expanded formats with overnight stay at Hotel Porto Tara. Rafting is especially suitable for groups seeking shared adrenaline, trust building, and strong nature immersion.

---

```yaml
chunk_id: outdoor_008
document_type: master_kb
section_type: outdoor_activity
title: Sea Cruising and Yacht Experiences
service_category: outdoor
subcategory: sea_luxury_and_soft_adventure
geography: Bay of Kotor; Montenegrin coast; Adriatic
audience: VIP; incentive; leisure
season: warm_season
luxury_level: premium_to_luxury
activity_level: low_to_medium
group_size: small_to_large
indoor_outdoor: outdoor
canonical_priority: high
language: en
```

## Sea Cruising and Yacht Experiences

Explorer DMC offers sea-based experiences ranging from small boat cruising and catamaran sailing to private yacht programs and larger boat concepts.

Cruises may include panoramic routes along the Montenegrin coast and Bay of Kotor, visits to islands or iconic points such as Our Lady of the Rocks, Mamula, Blue Cave, and related scenic landmarks.

These experiences are ideal for VIP clients, coastal incentives, fine-dining extensions, and soft-active premium programs.

---

```yaml
chunk_id: outdoor_009
document_type: master_kb
section_type: outdoor_activity
title: Lake Cruising
service_category: outdoor
subcategory: lakes_and_soft_nature
geography: Skadar Lake; Piva Lake; Biogradsko Lake; Black Lake
audience: incentive; eco_oriented_groups; leisure
season: warm_season
luxury_level: standard_to_premium
activity_level: low
group_size: small_to_medium
indoor_outdoor: outdoor
canonical_priority: medium
language: en
```

## Lake Cruising

Lake-based programs are suitable for guests who prefer scenic and peaceful nature experiences. Explorer DMC references activities on Skadar Lake, Piva Lake, Biogradsko Lake, Black Lake, and other lake environments.

Possible formats include boat cruises, electric boat rides, kayaking, stand-up paddleboarding, rowing, and bird watching.

These programs are useful for soft-active incentives, slower-paced premium travel, and eco-oriented itineraries.

---

```yaml
chunk_id: outdoor_010
document_type: master_kb
section_type: outdoor_activity
title: Speleology
service_category: outdoor
subcategory: cave_exploration
geography: Lipa Cave; Djalovica Cave; Ice Cave; Obod Cave; Maganik systems
audience: adventure_groups
season: multi_season
luxury_level: standard
activity_level: medium_to_high
group_size: small
indoor_outdoor: outdoor
canonical_priority: low
language: en
```

## Speleology

Speleology programs allow guests to explore caves and underground spaces in Montenegro. These may range from easier tourist cave visits to more demanding cave-exploration experiences for experienced participants.

This category is suitable for clients who want unusual, exploration-based adventure rather than standard scenic touring.

---

```yaml
chunk_id: winter_001
document_type: master_kb
section_type: winter_portfolio
title: Winter Activity Portfolio
service_category: winter
subcategory: overview
geography: Bjelasica; Durmitor; Sinjajevina; Komovi; Lovcen
audience: incentive; team_building; winter_leisure
season: winter
luxury_level: standard_to_premium
activity_level: low_to_high
group_size: small_to_medium
indoor_outdoor: outdoor
canonical_priority: high
language: en
```

## Winter Activity Portfolio

Explorer DMC positions itself as a strong winter operator as well as a summer operator. Winter activities include snowmobile tours, snowshoe tours, snowcat rides, snow bikes, igloo construction, and ice bar concepts.

These activities are typically based in mountain environments such as Bjelasica, Durmitor, Sinjajevina, Komovi, and Lovćen.

Winter programs may be adventure-driven, scenic, social, or creative depending on group profile.

---

```yaml
chunk_id: winter_002
document_type: master_kb
section_type: winter_activity
title: Snowmobile Tours
service_category: winter
subcategory: motorized_snow_adventure
geography: Bjelasica; Durmitor; Sinjajevina
audience: incentive; active_groups
season: winter
luxury_level: standard_to_premium
activity_level: high
group_size: small_to_medium
indoor_outdoor: outdoor
canonical_priority: high
language: en
```

## Snowmobile Tours

Snowmobile tours run through snowy mountain landscapes and can be organized as short one-, two-, or four-hour adventures or as multi-day expeditions.

These programs are well suited for winter incentives, active leisure groups, and premium winter concepts that require a strong wow factor.

---

```yaml
chunk_id: winter_003
document_type: master_kb
section_type: winter_activity
title: Snowshoe Tours
service_category: winter
subcategory: slow_snow_nature
geography: Durmitor; Bjelasica; Sinjajevina; Prokletije; Komovi; Lovcen
audience: incentive; nature_groups; leisure
season: winter
luxury_level: standard
activity_level: medium
group_size: small_to_medium
indoor_outdoor: outdoor
canonical_priority: medium
language: en
```

## Snowshoe Tours

Snowshoe tours offer a quieter and more scenic winter format. They are appropriate for guests who want mountain immersion, light physical activity, and panoramic snowy landscapes without the intensity of motorized adventure.

They are suitable for soft-active winter incentives and slower-paced group programs.

---

```yaml
chunk_id: winter_004
document_type: master_kb
section_type: winter_activity
title: Snowcat Rides and Snow Bikes
service_category: winter
subcategory: mixed_snow_adventure
geography: Bjelasica
audience: incentive; leisure; small_groups
season: winter
luxury_level: standard_to_premium
activity_level: medium_to_high
group_size: small_to_medium
indoor_outdoor: outdoor
canonical_priority: medium
language: en
```

## Snowcat Rides and Snow Bikes

This concept combines snowcat transport through mountain snow terrain with snow bike or sled descents. It is useful for clients who want a winter adventure with both scenic value and playful adrenaline.

This program can function as a stand-alone activity or as part of a larger winter itinerary.

---

```yaml
chunk_id: winter_005
document_type: master_kb
section_type: winter_activity
title: Igloo Construction and Ice Bar
service_category: winter
subcategory: creative_team_building
geography: Durmitor; Bjelasica; Sinjajevina; Komovi
audience: team_building; incentive
season: winter
luxury_level: standard_to_premium
activity_level: medium
group_size: small_to_medium
indoor_outdoor: outdoor
canonical_priority: high
language: en
```

## Igloo Construction and Ice Bar

Igloo construction is a winter team-building concept where participants learn basic snow-structure techniques and work together to build an igloo. The activity can be extended with an ice bar concept and beverage tasting.

This format is especially useful for winter corporate groups because it combines collaboration, creativity, novelty, and strong visual identity.

---

```yaml
chunk_id: tb_001
document_type: team_building_catalog
section_type: team_building_program
title: New York Stock Exchange
service_category: team_building
subcategory: strategy_simulation
geography: any_indoor_location
audience: corporate; sales; finance; management
season: all_year
luxury_level: standard_to_premium
activity_level: low
group_size: up_to_450
indoor_outdoor: indoor
canonical_priority: high
language: en
```

## Team Building Program: New York Stock Exchange

New York Stock Exchange is a strategic simulation program in which teams trade securities, gold, and currencies while responding to changing news and market conditions. Teams analyze information, build strategies, and try to achieve the strongest portfolio performance.

The program develops fast reaction, coordination, communication under pressure, and team decision making. It is especially suitable for sales teams, finance departments, project teams, and management groups.

Typical duration is about 120 to 150 minutes and the format can support up to approximately 450 participants.

---

```yaml
chunk_id: tb_002
document_type: team_building_catalog
section_type: team_building_program
title: Da Vinci Escape Box
service_category: team_building
subcategory: logic_escape_AR
geography: hotel; conference_space; indoor_event_space
audience: corporate; IT; engineering; innovation_teams
season: all_year
luxury_level: standard_to_premium
activity_level: low
group_size: up_to_100
indoor_outdoor: indoor
canonical_priority: high
language: en
```

## Team Building Program: Da Vinci Escape Box

Da Vinci Escape Box is a logic-driven and technology-enhanced team-building program in which teams solve puzzles, open mystery boxes, and use augmented reality tools to unlock clues and move toward a final solution.

The format combines tactile, analytical, and digital challenges. It is useful for teams that enjoy problem solving, innovation, structured thinking, and communication under time pressure.

Typical duration is around 120 minutes and the program supports up to about 100 participants.

---

```yaml
chunk_id: tb_003
document_type: team_building_catalog
section_type: team_building_program
title: Lego Photo Story
service_category: team_building
subcategory: creative_storytelling
geography: indoor_or_outdoor_event_space
audience: corporate; culture_programs; mixed_teams
season: all_year
luxury_level: standard
activity_level: low
group_size: up_to_150
indoor_outdoor: both
canonical_priority: medium
language: en
```

## Team Building Program: Lego Photo Story

Lego Photo Story turns workplace situations, challenges, funny moments, or company values into visual storytelling. Teams build scenes using LEGO bricks, photograph them, and present them as a short visual narrative.

The format supports creativity, perspective sharing, light discussion of real company life, and better understanding of different viewpoints inside the organization.

Typical duration is around 120 to 150 minutes and the program supports up to about 150 participants.

---

```yaml
chunk_id: tb_004
document_type: team_building_catalog
section_type: team_building_program
title: Murder Mystery
service_category: team_building
subcategory: story_driven_detective
geography: hotel; resort; city; adaptable_indoor
audience: corporate; mixed_teams
season: all_year
luxury_level: standard_to_premium
activity_level: medium
group_size: up_to_250
indoor_outdoor: both
canonical_priority: high
language: en
```

## Team Building Program: Murder Mystery

Murder Mystery is a detective-style program in which teams investigate a fictional crime through clues, tasks, suspect interactions, and scenario analysis. Teams gather information, form theories, and present their conclusions before the final reveal.

This format works well for groups who enjoy narrative, interaction, humor, and problem solving.

Typical duration is around 120 to 150 minutes and the program supports up to about 250 participants.

---

```yaml
chunk_id: tb_005
document_type: team_building_catalog
section_type: team_building_program
title: Casino Royal
service_category: team_building
subcategory: social_strategy_evening
geography: indoor_event_space
audience: corporate; networking; conference_evenings
season: all_year
luxury_level: premium
activity_level: low
group_size: up_to_450
indoor_outdoor: indoor
canonical_priority: medium
language: en
```

## Team Building Program: Casino Royal

Casino Royal creates the atmosphere of a casino evening without real financial risk. Participants receive play money, rotate among gaming tables, learn rules, make strategic choices, and compete in a social and elegant environment.

This format is suitable for networking, conference closing evenings, relaxed competition, and entertainment-driven corporate events.

Typical duration is around 120 to 150 minutes and the format can support up to about 450 participants.

---

```yaml
chunk_id: tb_006
document_type: team_building_catalog
section_type: team_building_program
title: Pub Quiz
service_category: team_building
subcategory: quiz_and_interaction
geography: indoor_event_space
audience: corporate; mixed_teams
season: all_year
luxury_level: standard
activity_level: low
group_size: up_to_200
indoor_outdoor: indoor
canonical_priority: medium
language: en
```

## Team Building Program: Pub Quiz

Pub Quiz is a team-based quiz format with knowledge questions, music rounds, visual tasks, themed rounds, and creative mini-challenges. It is lively, accessible, and useful for evening programs, conference extensions, and mixed-profile teams.

The format supports team decision making, quick thinking, communication, and healthy competition.

Typical duration is around 120 to 150 minutes and the format supports up to about 200 participants.

---

```yaml
chunk_id: tb_007
document_type: team_building_catalog
section_type: team_building_program
title: Grand Prix
service_category: team_building
subcategory: build_and_compete
geography: indoor_or_outdoor_space
audience: corporate; project_teams; sales_teams
season: all_year
luxury_level: standard
activity_level: medium
group_size: up_to_500
indoor_outdoor: both
canonical_priority: high
language: en
```

## Team Building Program: Grand Prix

Grand Prix turns teams into a creative pit-lane environment where they design and build vehicles from available materials, negotiate for additional resources, and test the results in a final challenge.

The format supports planning, use of limited resources, teamwork, negotiation, presentation, and hands-on problem solving.

Typical duration ranges from about 90 to 150 minutes and the format supports up to approximately 500 participants.

---

```yaml
chunk_id: tb_008
document_type: team_building_catalog
section_type: team_building_program
title: Sink or Swim
service_category: team_building
subcategory: build_on_water
geography: sea; lake; river
audience: corporate; summer_groups; incentive
season: warm_season
luxury_level: standard
activity_level: high
group_size: up_to_350
indoor_outdoor: outdoor
canonical_priority: high
language: en
```

## Team Building Program: Sink or Swim

Sink or Swim is a dynamic water-based challenge in which teams design, build, and test their own boats using given materials and limited resources. The program ends with a water test or race adapted to the location.

This concept is ideal for summer events, coastal or lake incentives, and groups that want a visible, energetic, and playful team challenge.

Typical duration is around 120 to 150 minutes and the program supports up to about 350 participants.

---

```yaml
chunk_id: tb_009
document_type: team_building_catalog
section_type: team_building_program
title: Pizza Chef
service_category: team_building
subcategory: culinary
geography: hotel; restaurant; winery; event_space
audience: corporate; gastronomy_focused_groups
season: all_year
luxury_level: standard_to_premium
activity_level: low
group_size: up_to_110
indoor_outdoor: both
canonical_priority: medium
language: en
```

## Team Building Program: Pizza Chef

Pizza Chef is a culinary team-building format in which teams prepare dough, choose toppings, create a pizza concept, and present the final product for judging and tasting.

This format is social, accessible, and useful for clients who want food, creativity, and team connection without high physical effort.

Typical duration is around 120 to 140 minutes and the format supports up to about 110 participants.

---

```yaml
chunk_id: tb_010
document_type: team_building_catalog
section_type: team_building_program
title: Ice Sculptures
service_category: team_building
subcategory: creative_visual
geography: outdoor_event_space
audience: corporate; branded_events
season: all_year
luxury_level: premium
activity_level: medium
group_size: up_to_300
indoor_outdoor: outdoor
canonical_priority: medium
language: en
```

## Team Building Program: Ice Sculptures

Ice Sculptures is a visually striking creative format in which teams carve sculptures from large ice blocks under guidance from an experienced sculptor. It is well suited for branded events, conference breaks, and programs that need a strong visual impression.

The activity develops planning, division of roles, creativity, patience, and visible shared achievement.

---

```yaml
chunk_id: tb_011
document_type: team_building_catalog
section_type: team_building_program
title: Picasso Painting Workshop
service_category: team_building
subcategory: collective_art
geography: indoor_event_space
audience: corporate; culture_values_programs
season: all_year
luxury_level: standard
activity_level: low
group_size: up_to_450
indoor_outdoor: indoor
canonical_priority: medium
language: en
```

## Team Building Program: Picasso Painting Workshop

In this format, teams create separate sections of a larger collective artwork. Because each team’s canvas must connect visually with the others, the activity reinforces communication, alignment, and shared vision.

The final artwork can also remain as a symbolic company object after the event.

Typical duration is about 100 to 140 minutes and the program supports up to around 450 participants.

---

```yaml
chunk_id: tb_012
document_type: team_building_catalog
section_type: team_building_program
title: Catch the Rhythm
service_category: team_building
subcategory: music_and_sync
geography: indoor_or_outdoor_event_space
audience: corporate; conference_groups
season: all_year
luxury_level: standard
activity_level: low_to_medium
group_size: up_to_120
indoor_outdoor: both
canonical_priority: medium
language: en
```

## Team Building Program: Catch the Rhythm

Catch the Rhythm turns the group into a drum and percussion ensemble. Participants create shared rhythms through guided exercises and gradually build a collective performance.

The program is suitable for teams that need energy, synchronization, group connection, and non-verbal communication.

Typical duration is around 100 to 120 minutes and the program supports up to about 120 participants.

---

```yaml
chunk_id: tb_013
document_type: team_building_catalog
section_type: team_building_program
title: Epic Treasure Hunt
service_category: team_building
subcategory: outdoor_gamified
geography: city; resort; mountain; island; outdoor_locations
audience: corporate; incentive; international_groups
season: multi_season
luxury_level: standard_to_premium
activity_level: medium
group_size: up_to_300
indoor_outdoor: outdoor
canonical_priority: high
language: en
```

## Team Building Program: Epic Treasure Hunt

Epic Treasure Hunt is an outdoor gamified challenge in which teams navigate between checkpoints using a device or app, solve tasks, collect points, and unlock new clues.

Tasks may include logic puzzles, company-themed mini-challenges, photo or video challenges, and location-specific interactions.

The format is particularly useful for city discovery, resort engagement, incentive travel, and team activation in a destination context.

---

```yaml
chunk_id: tb_014
document_type: team_building_catalog
section_type: team_building_program
title: Sports Team Building
service_category: team_building
subcategory: physical_competition
geography: outdoor_locations
audience: corporate; large_groups
season: spring_summer
luxury_level: standard
activity_level: high
group_size: 150_plus
indoor_outdoor: outdoor
canonical_priority: medium
language: en
```

## Team Building Program: Sports Team Building

Sports Team Building is a multi-station outdoor format combining physical, logistical, and creative challenges. It is appropriate for company days, larger groups, and clients who want to create high energy and shared team spirit.

This program is especially suitable for spring and summer conditions.

---

```yaml
chunk_id: tb_015
document_type: team_building_catalog
section_type: team_building_program
title: Battle for the Throne
service_category: team_building
subcategory: themed_competition
geography: outdoor_event_space
audience: corporate; larger_groups
season: spring_summer
luxury_level: standard_to_premium
activity_level: medium_to_high
group_size: up_to_200
indoor_outdoor: outdoor
canonical_priority: medium
language: en
```

## Team Building Program: Battle for the Throne

Battle for the Throne is a medieval-themed outdoor format in which teams represent houses and compete through a mix of physical, strategic, and creative challenges. Thematic props, story elements, and role atmosphere are important parts of the experience.

This format is good for groups that enjoy narrative immersion and a strong shared atmosphere.

---

```yaml
chunk_id: tb_016
document_type: team_building_catalog
section_type: team_building_program
title: Corporate Olympics
service_category: team_building
subcategory: sports_and_fun
geography: outdoor_event_space
audience: corporate; active_groups
season: warm_season
luxury_level: standard
activity_level: high
group_size: up_to_300
indoor_outdoor: outdoor
canonical_priority: medium
language: en
```

## Team Building Program: Corporate Olympics

Corporate Olympics is a playful competitive format where participants compete in teams or individually across a series of sports and inflatable entertainment activities. The goal is to create energy, laughter, and shared momentum rather than serious athletic performance.

This format works well for relaxed but dynamic corporate days.

---

```yaml
chunk_id: tb_017
document_type: team_building_catalog
section_type: team_building_program
title: Adventure Park
service_category: team_building
subcategory: ropes_and_obstacles
geography: Lovcen; Gorica; Kolašin
audience: corporate; active_groups
season: multi_season
luxury_level: standard
activity_level: high
group_size: up_to_200
indoor_outdoor: outdoor
canonical_priority: medium
language: en
```

## Team Building Program: Adventure Park

Adventure Park formats use rope obstacles, suspended bridges, zip-line elements, and movement challenges in natural settings. They are particularly effective for trust building, courage, cooperation, and encouragement among teammates.

This format is well suited for clients who want active engagement in nature.

---

```yaml
chunk_id: sample_001
document_type: sample_program
section_type: itinerary_example
title: Boka Bay VIP Luxury Celebration Program
service_category: VIP
subcategory: premium_multiday
geography: Bay of Kotor; Perast; Tivat; Prcanj
audience: VIP; executive; private_group
season: warm_season_preferred
luxury_level: luxury
activity_level: low_to_medium
group_size: approx_14
indoor_outdoor: both
canonical_priority: high
language: en
```

## Sample Program: Boka Bay VIP Luxury Celebration Program

This sample premium program demonstrates Explorer DMC’s ability to organize a high-end VIP experience in the Bay of Kotor.

The concept includes private jet travel on the Krakow to Tivat route and return, luxury accommodation through full privatization of Hotel Santa Boka Perast for three nights, a private yacht experience in the Bay of Kotor, an exclusive gala lunch at Ćatovića Mlini, a private gala dinner in a historic Franciscan Monastery venue, and premium transfers by Mercedes-Benz Sprinter.

The program combines aviation, accommodation, private cruising, fine dining, cultural heritage, premium service, and seamless logistics. It is an example of a curated luxury experience rather than a standard tourism package.

---

```yaml
chunk_id: sample_002
document_type: sample_program
section_type: itinerary_example
title: Porsche Montenegro Driving Program
service_category: incentive
subcategory: automotive_premium
geography: Dubrovnik; Bay of Kotor; Lovcen; Cetinje; Skadar Lake; Sipcanik
audience: premium_groups; automotive; executive
season: shoulder_or_warm_season
luxury_level: luxury
activity_level: medium
group_size: medium
indoor_outdoor: both
canonical_priority: high
language: en
```

## Sample Program: Porsche Montenegro Driving Program

This sample program demonstrates Explorer DMC’s ability to organize premium automotive incentives and executive driving experiences.

The program combines luxury accommodation, secure garages for premium vehicles, scenic Adriatic and mountain drives, curated gastronomy, winery experiences, panoramic viewpoints, and heritage stops across Dubrovnik, Montenegro’s coast, Lovćen, Cetinje, Skadar Lake, and the Šipčanik wine cellar.

It also highlights advanced logistics capabilities such as bespoke roadbook design, traffic coordination, security and protocol support, border support, technical production, aerial support, and full on-site operational management.

---

```yaml
chunk_id: sample_003
document_type: sample_program
section_type: itinerary_example
title: Telekom Northern Montenegro Adventure Program
service_category: incentive
subcategory: active_team_program
geography: Kolasin; Bjelasica; Tara Canyon; Durmitor; Zabljak
audience: corporate; team_building
season: multi_season
luxury_level: standard_to_premium
activity_level: high
group_size: medium
indoor_outdoor: both
canonical_priority: high
language: en
```

## Sample Program: Telekom Northern Montenegro Adventure Program

This sample program demonstrates a three-day active team experience in northern Montenegro.

Day one includes transfer to Kolašin, accommodation at Hotel Wulfenia, jeep transfer to Kolašin 1600, horseback riding on Bjelasica, and a traditional mountain dinner at Katun Vranjak.

Day two includes a Side-by-Side buggy tour, scenic off-road segments, refreshments in nature, Tara River rafting, optional zip line over Tara Canyon, and a gala dinner at Hotel Porto Tara.

Day three includes buggy and quad movement toward Žabljak through Durmitor National Park, a walk around Black Lake, lunch at Restaurant Crno Jezero, and return to Podgorica.

This program is a strong example of Explorer DMC’s ability to combine mountain hospitality, off-road adventure, rafting, national park content, local food, and team-based energy.

---

```yaml
chunk_id: logistics_001
document_type: master_kb
section_type: logistics_capability
title: Logistics and Operational Capabilities
service_category: logistics
subcategory: execution
geography: Montenegro; Adriatic
audience: all
season: all_year
luxury_level: mixed
activity_level: mixed
group_size: any
indoor_outdoor: both
canonical_priority: high
language: en
```

## Logistics and Operational Capabilities

Explorer DMC emphasizes that it is not only an activity seller but an organizer of complete experiences. Relevant capabilities include:
- concept development
- itinerary planning
- supplier coordination
- guest logistics
- transport organization
- field execution
- guides and moderators
- equipment and props
- safety and technical support for outdoor programs
- on-site team support
- optional photo, drone, and video production
- branding and technical production for events
- VIP and protocol-sensitive organization for premium clients

This operational layer is a key part of the company’s value proposition.

---

```yaml
chunk_id: logistics_002
document_type: master_kb
section_type: logistics_capability
title: Safety, Guides, and Field Support
service_category: logistics
subcategory: safety_and_support
geography: Montenegro
audience: active_groups; corporate; adventure_clients
season: all_year
luxury_level: mixed
activity_level: medium_to_high
group_size: any
indoor_outdoor: outdoor
canonical_priority: high
language: en
```

## Safety, Guides, and Field Support

For outdoor and adventure-based programs, Explorer DMC highlights:
- professional and licensed guides and instructors
- experienced skippers and outdoor experts
- full safety equipment
- technical support
- participant insurance
- flexible tailor-made program design
- VIP and private options when needed

This makes Explorer DMC suitable for both mainstream active groups and more demanding premium programs with higher operational requirements.

---

```yaml
chunk_id: faq_001
document_type: faq
section_type: faq_answer
title: FAQ - What is Explorer DMC
service_category: faq
subcategory: general
geography: Montenegro
audience: all
season: all_year
luxury_level: mixed
activity_level: mixed
group_size: any
indoor_outdoor: both
canonical_priority: high
language: en
```

## FAQ: What is Explorer DMC

Explorer DMC is a destination management and event concept company focused on Montenegro and the wider Adriatic context. It specializes in MICE services, incentive travel, team building, VIP experiences, outdoor adventures, and tailor-made corporate or premium programs.

---

```yaml
chunk_id: faq_002
document_type: faq
section_type: faq_answer
title: FAQ - What does Explorer DMC organize
service_category: faq
subcategory: general_services
geography: Montenegro
audience: all
season: all_year
luxury_level: mixed
activity_level: mixed
group_size: any
indoor_outdoor: both
canonical_priority: high
language: en
```

## FAQ: What does Explorer DMC organize

Explorer DMC organizes meetings, incentives, conferences, exhibitions, team building programs, outdoor activities, VIP experiences, sports events, corporate offsites, product launches, weddings, scenic tours, and bespoke multi-day programs across Montenegro.

---

```yaml
chunk_id: faq_003
document_type: faq
section_type: faq_answer
title: FAQ - Does Explorer DMC offer luxury programs
service_category: faq
subcategory: VIP
geography: Montenegro
audience: all
season: all_year
luxury_level: luxury
activity_level: low_to_medium
group_size: small_to_medium
indoor_outdoor: both
canonical_priority: medium
language: en
```

## FAQ: Does Explorer DMC offer luxury programs

Yes. Explorer DMC offers luxury and VIP experiences that may include private transport, private jet services, yachts, boutique accommodation, fine dining, exclusive venues, and concierge-style organization.

---

```yaml
chunk_id: faq_004
document_type: faq
section_type: faq_answer
title: FAQ - Does Explorer DMC offer outdoor activities
service_category: faq
subcategory: outdoor
geography: Montenegro
audience: all
season: all_year
luxury_level: standard_to_premium
activity_level: medium_to_high
group_size: any
indoor_outdoor: outdoor
canonical_priority: medium
language: en
```

## FAQ: Does Explorer DMC offer outdoor activities

Yes. Explorer DMC offers rafting, buggy tours, jeep safaris, hiking, horseback riding, canyoning, sea cruises, lake cruises, snowmobile tours, snowshoe tours, speleology, adventure park activities, and other outdoor formats.

---

```yaml
chunk_id: faq_005
document_type: faq
section_type: faq_answer
title: FAQ - Can Explorer DMC customize programs
service_category: faq
subcategory: customization
geography: Montenegro; Adriatic
audience: all
season: all_year
luxury_level: mixed
activity_level: mixed
group_size: any
indoor_outdoor: both
canonical_priority: high
language: en
```

## FAQ: Can Explorer DMC customize programs

Yes. Explorer DMC positions itself as a tailor-made operator. Programs can be adapted based on group size, dates, season, geography, energy level, luxury expectations, event objective, and preferred activity mix.

---

```yaml
chunk_id: bot_rules_001
document_type: bot_policy
section_type: response_rules
title: Chatbot Response Rules
service_category: bot_rules
subcategory: grounding
geography: n/a
audience: internal
season: n/a
luxury_level: n/a
activity_level: n/a
group_size: n/a
indoor_outdoor: n/a
canonical_priority: high
language: en
```

## Chatbot Response Rules

The chatbot must answer based on this knowledge base and any approved future canonical updates.

The chatbot must not invent:
- exact availability unless provided in source data
- exact pricing unless provided in the relevant chunk
- exact room inventory unless explicitly stated
- exact transfer times unless explicitly stated
- exact operational conditions unless explicitly stated
- promises of access, permits, or logistics that are not confirmed in the data

When details are missing, the chatbot should say that final details depend on dates, season, route, group size, and client requirements, and that Explorer DMC can prepare a tailored proposal.

The chatbot should prefer concise, confident, sales-supportive language, but it must remain fact-grounded.

---

# END OF CANONICAL KNOWLEDGE BASE
