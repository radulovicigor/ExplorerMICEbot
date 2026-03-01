(function () {
  const API_URL = window.CHATBOT_API_URL || "";

  const STYLES = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

    #rag-chat-toggle {
      position: fixed;
      bottom: 28px;
      right: 28px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #0E3B2E;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 16px rgba(14, 59, 46, 0.35);
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }
    #rag-chat-toggle:hover {
      transform: scale(1.08);
      box-shadow: 0 6px 24px rgba(14, 59, 46, 0.5);
    }
    #rag-chat-toggle svg {
      width: 26px;
      height: 26px;
      fill: #C6A75E;
    }
    #rag-chat-toggle.open svg.icon-chat { display: none; }
    #rag-chat-toggle:not(.open) svg.icon-close { display: none; }

    #rag-chat-window {
      position: fixed;
      bottom: 96px;
      right: 28px;
      width: 380px;
      height: 520px;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 12px 48px rgba(0, 0, 0, 0.12);
      z-index: 99998;
      display: none;
      flex-direction: column;
      overflow: hidden;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      animation: rag-slide-up 0.3s ease;
    }
    #rag-chat-window.visible { display: flex; }

    @keyframes rag-slide-up {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
    }

    #rag-chat-header {
      background: #0E3B2E;
      padding: 18px 22px;
      display: flex;
      align-items: center;
      gap: 12px;
      flex-shrink: 0;
    }
    #rag-chat-header .avatar {
      width: 36px;
      height: 36px;
      background: rgba(198, 167, 94, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #rag-chat-header .avatar svg {
      width: 18px;
      height: 18px;
      fill: #C6A75E;
    }
    #rag-chat-header .info h3 {
      margin: 0;
      color: #C6A75E;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.3px;
    }
    #rag-chat-header .info p {
      margin: 2px 0 0;
      color: rgba(198, 167, 94, 0.6);
      font-size: 11px;
      font-weight: 400;
    }

    #rag-chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 20px 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      background: #fafaf8;
    }
    #rag-chat-messages::-webkit-scrollbar { width: 4px; }
    #rag-chat-messages::-webkit-scrollbar-track { background: transparent; }
    #rag-chat-messages::-webkit-scrollbar-thumb { background: #d4d0c8; border-radius: 10px; }

    .rag-msg {
      max-width: 80%;
      padding: 10px 14px;
      border-radius: 14px;
      font-size: 13.5px;
      line-height: 1.5;
      word-wrap: break-word;
      animation: rag-fade-in 0.2s ease;
    }
    @keyframes rag-fade-in {
      from { opacity: 0; transform: translateY(4px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .rag-msg.user {
      align-self: flex-end;
      background: #0E3B2E;
      color: #fff;
      border-bottom-right-radius: 4px;
    }
    .rag-msg.bot {
      align-self: flex-start;
      background: #fff;
      color: #2c2c2c;
      border: 1px solid #e8e4dc;
      border-bottom-left-radius: 4px;
    }
    .rag-msg.bot strong { color: #0E3B2E; }

    .rag-typing {
      align-self: flex-start;
      display: flex;
      gap: 4px;
      padding: 12px 16px;
      background: #fff;
      border: 1px solid #e8e4dc;
      border-radius: 14px;
      border-bottom-left-radius: 4px;
    }
    .rag-typing span {
      width: 6px;
      height: 6px;
      background: #C6A75E;
      border-radius: 50%;
      animation: rag-bounce 1.4s ease-in-out infinite;
    }
    .rag-typing span:nth-child(2) { animation-delay: 0.15s; }
    .rag-typing span:nth-child(3) { animation-delay: 0.3s; }
    @keyframes rag-bounce {
      0%, 60%, 100% { transform: translateY(0); }
      30% { transform: translateY(-6px); }
    }

    .rag-welcome {
      text-align: center;
      padding: 40px 24px;
    }
    .rag-welcome h4 {
      margin: 0 0 6px;
      color: #0E3B2E;
      font-size: 15px;
      font-weight: 600;
    }
    .rag-welcome p {
      margin: 0;
      font-size: 13px;
      color: #888;
      line-height: 1.5;
    }

    #rag-chat-input-area {
      padding: 12px 14px;
      border-top: 1px solid #eee;
      display: flex;
      gap: 8px;
      align-items: center;
      flex-shrink: 0;
      background: #fff;
    }
    #rag-chat-input {
      flex: 1;
      padding: 10px 14px;
      border: 1.5px solid #ddd;
      border-radius: 12px;
      font-size: 13.5px;
      font-family: inherit;
      outline: none;
      transition: border-color 0.2s;
      background: #fafaf8;
    }
    #rag-chat-input:focus { border-color: #0E3B2E; }
    #rag-chat-input::placeholder { color: #aaa; }

    #rag-chat-send {
      width: 38px;
      height: 38px;
      border-radius: 12px;
      background: #0E3B2E;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.2s;
      flex-shrink: 0;
    }
    #rag-chat-send:hover { opacity: 0.85; }
    #rag-chat-send:disabled { opacity: 0.35; cursor: not-allowed; }
    #rag-chat-send svg { width: 18px; height: 18px; fill: #C6A75E; }

    #rag-greeting {
      position: fixed;
      bottom: 96px;
      right: 28px;
      background: #0E3B2E;
      color: #fff;
      padding: 12px 18px;
      border-radius: 14px 14px 4px 14px;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 13.5px;
      line-height: 1.45;
      max-width: 260px;
      box-shadow: 0 6px 24px rgba(14, 59, 46, 0.3);
      z-index: 99997;
      cursor: pointer;
      animation: rag-greeting-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    #rag-greeting span {
      color: #C6A75E;
      font-weight: 600;
    }
    #rag-greeting-close {
      position: absolute;
      top: -8px;
      right: -8px;
      width: 22px;
      height: 22px;
      background: #fff;
      border: 1.5px solid #ddd;
      border-radius: 50%;
      font-size: 12px;
      line-height: 18px;
      text-align: center;
      color: #888;
      cursor: pointer;
    }
    #rag-greeting-close:hover { background: #f0f0f0; }
    @keyframes rag-greeting-in {
      from { opacity: 0; transform: translateY(10px) scale(0.9); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes rag-pulse {
      0%, 100% { box-shadow: 0 4px 16px rgba(14, 59, 46, 0.35); }
      50% { box-shadow: 0 4px 24px rgba(198, 167, 94, 0.5); }
    }
    #rag-chat-toggle.pulse {
      animation: rag-pulse 2s ease-in-out infinite;
    }

    @media (max-width: 768px) {
      #rag-greeting { display: none !important; }
    }
    @media (max-width: 480px) {
      #rag-chat-window {
        width: calc(100vw - 16px);
        height: calc(100vh - 110px);
        right: 8px;
        bottom: 88px;
        border-radius: 14px;
      }
    }
  `;

  function injectStyles() {
    const s = document.createElement("style");
    s.textContent = STYLES;
    document.head.appendChild(s);
  }

  function createWidget() {
    const btn = document.createElement("button");
    btn.id = "rag-chat-toggle";
    btn.innerHTML = `
      <svg class="icon-chat" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/></svg>
      <svg class="icon-close" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
    `;

    const win = document.createElement("div");
    win.id = "rag-chat-window";
    win.innerHTML = `
      <div id="rag-chat-header">
        <div class="avatar">
          <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/></svg>
        </div>
        <div class="info">
          <h3>Explorer MICE</h3>
          <p>Ask us anything</p>
        </div>
      </div>
      <div id="rag-chat-messages">
        <div class="rag-welcome">
          <h4>Welcome!</h4>
          <p>Ask anything about our MICE services in Montenegro.</p>
        </div>
      </div>
      <div id="rag-chat-input-area">
        <input type="text" id="rag-chat-input" placeholder="Type your question..." autocomplete="off">
        <button id="rag-chat-send">
          <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </button>
      </div>
    `;

    document.body.appendChild(btn);
    document.body.appendChild(win);
    bindEvents(btn, win);
    showGreeting(btn, win);
  }

  function showGreeting(btn, win) {
    if (window.innerWidth < 768) return;

    setTimeout(() => {
      if (win.classList.contains("visible")) return;

      btn.classList.add("pulse");

      const bubble = document.createElement("div");
      bubble.id = "rag-greeting";
      bubble.innerHTML = `
        Hi! <span>Explorer MICE</span> here. Ask me anything about our event services in Montenegro.
        <div id="rag-greeting-close">&times;</div>
      `;
      document.body.appendChild(bubble);

      bubble.addEventListener("click", (e) => {
        if (e.target.id === "rag-greeting-close") {
          bubble.remove();
          btn.classList.remove("pulse");
          return;
        }
        bubble.remove();
        btn.classList.remove("pulse");
        win.classList.add("visible");
        btn.classList.add("open");
        document.getElementById("rag-chat-input").focus();
      });

      setTimeout(() => {
        if (bubble.parentNode && !win.classList.contains("visible")) {
          bubble.remove();
          btn.classList.remove("pulse");
        }
      }, 15000);
    }, 3000);
  }

  function bindEvents(btn, win) {
    const input = document.getElementById("rag-chat-input");
    const send = document.getElementById("rag-chat-send");
    const msgs = document.getElementById("rag-chat-messages");
    const history = [];

    btn.addEventListener("click", () => {
      const open = win.classList.toggle("visible");
      btn.classList.toggle("open", open);
      btn.classList.remove("pulse");
      const g = document.getElementById("rag-greeting");
      if (g) g.remove();
      if (open) input.focus();
    });

    send.addEventListener("click", sendMessage);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    });

    async function sendMessage() {
      const text = input.value.trim();
      if (!text || text.length > 500) return;
      input.value = "";
      addMsg("user", text);
      history.push({ role: "user", content: text });
      send.disabled = true;
      const typing = showTyping();

      try {
        const res = await fetch(API_URL + "/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text, history: history.slice(-20) }),
        });
        const data = await res.json();
        removeTyping(typing);
        const reply = data.reply || "Sorry, something went wrong.";
        addMsg("bot", reply);
        history.push({ role: "assistant", content: reply });
      } catch {
        removeTyping(typing);
        addMsg("bot", "Unable to reach the server. Please try again later.");
      }

      send.disabled = false;
      input.focus();
    }

    function addMsg(role, text) {
      const w = msgs.querySelector(".rag-welcome");
      if (w) w.remove();
      const d = document.createElement("div");
      d.className = `rag-msg ${role}`;
      d.innerHTML = fmt(text);
      msgs.appendChild(d);
      msgs.scrollTop = msgs.scrollHeight;
    }

    function fmt(t) {
      return t
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\n/g, "<br>");
    }

    function showTyping() {
      const d = document.createElement("div");
      d.className = "rag-typing";
      d.innerHTML = "<span></span><span></span><span></span>";
      msgs.appendChild(d);
      msgs.scrollTop = msgs.scrollHeight;
      return d;
    }

    function removeTyping(el) { if (el && el.parentNode) el.remove(); }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }

  function init() { injectStyles(); createWidget(); }
})();
