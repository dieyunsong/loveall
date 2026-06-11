/* ============================================================
   LOVE ALL — game engine
   ============================================================ */

(function () {
  "use strict";

  const SAVE_KEY = "loveall-save-v1";

  const freshState = () => ({
    screen: "title",          // title | prologue | room | ending | epilogue | finale
    prologuePage: 0,
    room: "trophy",
    flags: {},                // solved puzzles, misc flags
    evidence: [],             // evidence ids, in discovery order
    letters: [],              // letter ids
    visited: {},              // hotspot ids examined
    seq: [],                  // current ball-machine input
    endingId: null,
  });

  let state = freshState();

  /* ---------- persistence ---------- */

  function save() {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); } catch (e) { /* private mode */ }
  }
  function load() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return false;
      const s = JSON.parse(raw);
      if (s && s.screen) { state = Object.assign(freshState(), s); return true; }
    } catch (e) { /* corrupt save */ }
    return false;
  }
  function hasSave() {
    try { return !!localStorage.getItem(SAVE_KEY); } catch (e) { return false; }
  }
  function wipe() {
    try { localStorage.removeItem(SAVE_KEY); } catch (e) {}
  }

  /* ---------- tiny DOM helpers ---------- */

  const app = document.getElementById("app");

  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  }
  function btn(label, cls, onClick) {
    const b = el("button", cls || "btn", label);
    b.addEventListener("click", onClick);
    return b;
  }

  /* ---------- modal ---------- */

  function closeModal() {
    const m = document.querySelector(".modal-backdrop");
    if (m) m.remove();
  }

  function modal(opts) {
    closeModal();
    const back = el("div", "modal-backdrop");
    const box = el("div", "modal " + (opts.kind || ""));
    if (opts.title) box.appendChild(el("h3", "modal-title", opts.title));
    if (opts.body) {
      const body = el("div", "modal-body");
      if (typeof opts.body === "string") body.innerHTML = opts.body;
      else body.appendChild(opts.body);
      box.appendChild(body);
    }
    const row = el("div", "modal-actions");
    (opts.actions || [{ label: "Close" }]).forEach((a) => {
      row.appendChild(btn(a.label, a.cls || "btn", () => {
        if (a.onClick) a.onClick(); else closeModal();
      }));
    });
    box.appendChild(row);
    back.appendChild(box);
    back.addEventListener("click", (e) => { if (e.target === back && opts.dismissable !== false) closeModal(); });
    document.body.appendChild(back);
    return box;
  }

  /* ---------- collection ---------- */

  function collectEvidence(ids) {
    let added = [];
    (ids || []).forEach((id) => {
      if (!state.evidence.includes(id)) { state.evidence.push(id); added.push(id); }
    });
    return added;
  }
  function collectLetter(id) {
    if (id && !state.letters.includes(id)) state.letters.push(id);
  }

  function evidenceChips(ids) {
    if (!ids || !ids.length) return "";
    const chips = ids.map((id) => {
      const ev = STORY.evidence[id];
      return `<span class="chip">${ev.icon} ${ev.name}</span>`;
    }).join(" ");
    return `<div class="gained"><span class="gained-label">Added to casebook:</span> ${chips}</div>`;
  }

  /* ---------- screens ---------- */

  function render() {
    closeModal();
    app.innerHTML = "";
    document.body.dataset.weather =
      state.screen === "room" ? (STORY.rooms[state.room].weather || "") :
      (state.screen === "finale" || state.screen === "epilogue" || state.screen === "ending") ? "dawn" : "storm";

    if (state.screen === "title") return renderTitle();
    if (state.screen === "prologue") return renderPrologue();
    if (state.screen === "room") return renderRoom();
    if (state.screen === "finale") return renderEnding(state.endingId, true);
    if (state.screen === "ending") return renderEnding(state.endingId, false);
    if (state.screen === "epilogue") return renderEpilogue();
  }

  /* ----- title ----- */

  function renderTitle() {
    const t = el("div", "title-screen");
    t.appendChild(el("div", "title-ball", "🎾"));
    t.appendChild(el("h1", "game-title", "LOVE&nbsp;ALL"));
    t.appendChild(el("p", "game-subtitle", STORY.meta.subtitle));
    t.appendChild(el("p", "game-club", STORY.meta.club));
    t.appendChild(el("p", "title-blurb",
      "An escape room in five rooms. A storm, a corpse, a love triangle,<br>and a scoreboard that says rather more than it should."));
    const row = el("div", "title-actions");
    row.appendChild(btn("New Game", "btn btn-primary", () => {
      if (hasSave()) {
        modal({
          title: "Start over?",
          body: "<p>An evening is already in progress. Beginning again will reset it — the committee frowns on replayed points, but allows them.</p>",
          actions: [
            { label: "Start fresh", cls: "btn btn-primary", onClick: () => { wipe(); state = freshState(); state.screen = "prologue"; save(); render(); } },
            { label: "Cancel" },
          ],
        });
      } else {
        state = freshState(); state.screen = "prologue"; save(); render();
      }
    }));
    if (hasSave() && (() => { try { return JSON.parse(localStorage.getItem(SAVE_KEY)).screen !== "title"; } catch (e) { return false; } })()) {
      row.appendChild(btn("Continue", "btn", () => { load(); render(); }));
    }
    t.appendChild(row);
    app.appendChild(t);
  }

  /* ----- prologue ----- */

  function renderPrologue() {
    const page = STORY.prologue[state.prologuePage];
    const wrap = el("div", "story-screen");
    wrap.appendChild(el("h2", "story-heading", page.heading));
    wrap.appendChild(el("div", "story-body " + (page.kind === "letter" ? "letter-paper" : ""), page.text));
    const row = el("div", "story-actions");
    if (state.prologuePage > 0) {
      row.appendChild(btn("← Back", "btn", () => { state.prologuePage--; save(); render(); }));
    }
    const last = state.prologuePage === STORY.prologue.length - 1;
    row.appendChild(btn(last ? "Begin — 10:13 P.M." : "Continue →", "btn btn-primary", () => {
      if (last) { state.screen = "room"; state.room = "trophy"; }
      else state.prologuePage++;
      save(); render();
    }));
    wrap.appendChild(row);
    app.appendChild(wrap);
  }

  /* ----- room ----- */

  function renderRoom() {
    const room = STORY.rooms[state.room];

    const bar = el("header", "topbar");
    bar.appendChild(el("div", "topbar-title", "LOVE ALL"));
    const mid = el("div", "topbar-room");
    mid.appendChild(el("span", "room-name", room.name));
    mid.appendChild(el("span", "room-time", "🕰 " + room.time));
    bar.appendChild(mid);
    const tools = el("div", "topbar-tools");
    tools.appendChild(btn("📔 Casebook", "btn btn-small", openCasebook));
    tools.appendChild(btn("🎾 Hint", "btn btn-small", openHint));
    tools.appendChild(btn("↺", "btn btn-small btn-restart", confirmRestart));
    bar.appendChild(tools);
    app.appendChild(bar);

    const scene = el("div", "scene");
    scene.appendChild(el("div", "scene-intro", room.intro));

    const grid = el("div", "hotspot-grid");
    room.hotspots.forEach((h) => {
      if (h.accuse) { grid.appendChild(accuseCard(h)); return; }
      if (h.puzzle) { grid.appendChild(doorCard(h)); return; }
      const card = btn(
        `<span class="hs-icon">${h.icon}</span><span class="hs-label">${h.label}</span>` +
        (state.visited[h.id] ? `<span class="hs-done">examined</span>` : ""),
        "hotspot" + (state.visited[h.id] ? " visited" : ""),
        () => examineHotspot(h)
      );
      grid.appendChild(card);
    });
    scene.appendChild(grid);
    app.appendChild(scene);
  }

  function examineHotspot(h) {
    state.visited[h.id] = true;
    const gained = collectEvidence(h.evidence);
    if (h.flag) state.flags[h.flag] = true;
    collectLetter(h.letter);

    let body = h.text + evidenceChips(gained);

    // torn photo bonus: only if the burned corner was found first
    if (h.needsFlagForBonus && state.flags[h.needsFlagForBonus] && h.bonusLetter) {
      body += h.bonusText;
      collectLetter(h.bonusLetter);
      body += `<div class="gained"><span class="gained-label">Added to casebook:</span> <span class="chip">${STORY.letters[h.bonusLetter].icon} ${STORY.letters[h.bonusLetter].name}</span></div>`;
    }

    const actions = [];
    if (h.letter) {
      actions.push({
        label: "Read " + STORY.letters[h.letter].name,
        cls: "btn btn-primary",
        onClick: () => openLetter(h.letter),
      });
    }
    actions.push({ label: "Step back" });

    save();
    render(); // refresh visited styling behind the modal
    modal({ title: h.label, body, actions });
  }

  function openLetter(id) {
    const lt = STORY.letters[id];
    collectLetter(id);
    save();
    modal({ title: lt.icon + " " + lt.name, body: `<div class="letter-paper">${lt.body}</div>`, actions: [{ label: "Fold it away" }], kind: "modal-letter" });
  }

  /* ----- doors & puzzles ----- */

  function doorCard(h) {
    const solved = !!state.flags["solved_" + h.puzzle];
    if (solved) {
      if (h.openText) {
        // an unlocked container (e.g. Margot's locker), not a passage
        return btn(
          `<span class="hs-icon">🔓</span><span class="hs-label">${h.label}</span><span class="hs-done">open</span>`,
          "hotspot visited",
          () => showContainer(h)
        );
      }
      return btn(
        `<span class="hs-icon">🔓</span><span class="hs-label">${h.openLabel}</span>`,
        "hotspot door open",
        () => { state.room = h.goto; state.seq = []; save(); render(); }
      );
    }
    return btn(
      `<span class="hs-icon">${h.icon}</span><span class="hs-label">${h.lockedLabel}</span><span class="hs-done">locked</span>`,
      "hotspot door",
      () => openPuzzle(h)
    );
  }

  function openPuzzle(h) {
    const pz = STORY.puzzles[h.puzzle];
    if (pz.type === "code") return openCodePuzzle(h, pz);
    if (pz.type === "sequence") return openSequencePuzzle(h, pz);
  }

  function solvePuzzle(h, pz) {
    state.flags["solved_" + h.puzzle] = true;
    save();
    modal({
      title: "🔓 " + pz.title,
      body: pz.success,
      dismissable: false,
      actions: [{
        label: h.openText ? "Look inside" : "Go through →",
        cls: "btn btn-primary",
        onClick: () => {
          if (h.openText) showContainer(h);
          else { state.room = h.goto; state.seq = []; save(); render(); }
        },
      }],
    });
  }

  function showContainer(h) {
    const gained = collectEvidence(h.evidence);
    collectLetter(h.letter);
    save();
    render();
    modal({
      title: h.label,
      body: h.openText + evidenceChips(gained),
      actions: [
        h.letter ? { label: "Read " + STORY.letters[h.letter].name, cls: "btn btn-primary", onClick: () => openLetter(h.letter) } : null,
        { label: "Step back" },
      ].filter(Boolean),
    });
  }

  function openCodePuzzle(h, pz) {
    const wrap = el("div");
    wrap.appendChild(el("div", "puzzle-prompt", pz.prompt));
    const input = el("input", "code-input");
    input.type = "text";
    input.maxLength = pz.length;
    input.placeholder = pz.placeholder || "";
    input.autocomplete = "off";
    input.setAttribute("inputmode", pz.alpha ? "text" : "numeric");
    wrap.appendChild(input);
    const msg = el("p", "puzzle-msg", "");
    wrap.appendChild(msg);

    const tryIt = () => {
      const guess = input.value.replace(/[\s\-–—]/g, "").toUpperCase();
      if (!guess) return;
      if (guess === pz.answer.toUpperCase()) {
        solvePuzzle(h, pz);
      } else {
        msg.textContent = pz.failure;
        input.value = "";
        input.classList.add("shake");
        setTimeout(() => input.classList.remove("shake"), 400);
        input.focus();
      }
    };
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") tryIt(); });

    modal({
      title: "🔐 " + pz.title,
      body: wrap,
      actions: [
        { label: "Try it", cls: "btn btn-primary", onClick: tryIt },
        { label: "Hint (🎾)", onClick: () => hintFor(h.puzzle) },
        { label: "Step back" },
      ],
    });
    setTimeout(() => input.focus(), 50);
  }

  function openSequencePuzzle(h, pz) {
    state.seq = [];
    const wrap = el("div");
    wrap.appendChild(el("div", "puzzle-prompt", pz.prompt));
    const display = el("div", "seq-display", seqText(pz));
    wrap.appendChild(display);
    const row = el("div", "seq-buttons");
    pz.buttons.forEach((b) => {
      row.appendChild(btn(b.label, "btn seq-btn", () => {
        state.seq.push(b.key);
        display.innerHTML = seqText(pz);
        if (state.seq.length === pz.answer.length) {
          const ok = state.seq.every((k, i) => k === pz.answer[i]);
          if (ok) { solvePuzzle(h, pz); }
          else {
            const msg = wrap.querySelector(".puzzle-msg");
            msg.textContent = pz.failure;
            state.seq = [];
            setTimeout(() => { display.innerHTML = seqText(pz); }, 500);
          }
        }
      }));
    });
    wrap.appendChild(row);
    wrap.appendChild(el("p", "puzzle-msg", ""));

    modal({
      title: "🔐 " + pz.title,
      body: wrap,
      actions: [
        { label: "Reset", onClick: () => { state.seq = []; display.innerHTML = seqText(pz); } },
        { label: "Hint (🎾)", onClick: () => hintFor(h.puzzle) },
        { label: "Step back", onClick: () => { state.seq = []; closeModal(); } },
      ],
    });

    function seqText(p) {
      const slots = p.answer.map((_, i) => {
        const k = state.seq[i];
        if (!k) return `<span class="seq-slot">•</span>`;
        const label = p.buttons.find((b) => b.key === k).label;
        return `<span class="seq-slot filled">${label}</span>`;
      });
      return slots.join('<span class="seq-arrow">→</span>');
    }
  }

  /* ----- hints ----- */

  function currentPuzzleId() {
    const room = STORY.rooms[state.room];
    if (!room || !room.hotspots) return null;
    for (const h of room.hotspots) {
      if (h.puzzle && !state.flags["solved_" + h.puzzle]) return h.puzzle;
    }
    return null;
  }

  function hintFor(pid) {
    const pz = STORY.puzzles[pid];
    const used = state.flags["hints_" + pid] || 0;
    const idx = Math.min(used, pz.hints.length - 1);
    state.flags["hints_" + pid] = used + 1;
    save();
    modal({
      title: "🎾 New balls, please",
      body: `<p class="hint-text">${pz.hints[idx]}</p><p class="hint-count">Hint ${Math.min(used + 1, pz.hints.length)} of ${pz.hints.length}${idx === pz.hints.length - 1 ? " — that's the lot; the ball boy has done all he can." : ""}</p>`,
      actions: [{ label: "Back to it" }],
    });
  }

  function openHint() {
    const pid = currentPuzzleId();
    if (state.room === "court") {
      modal({
        title: "🎾 New balls, please",
        body: "<p class='hint-text'>No more locks — only the truth. The kill was patient, gloved, and horticultural. Ask yourself: who harvested the foxgloves, who pressed the pills, who signed for the scoreboard key, and who only ever needed one crossword answer? Bring the evidence that <em>prunes</em>, not the evidence that pines.</p>",
        actions: [{ label: "Back to it" }],
      });
      return;
    }
    if (!pid) {
      modal({ title: "🎾 New balls, please", body: "<p class='hint-text'>Nothing locked here just now. Examine everything — at Hartcombe even the furniture is keeping secrets — then take the open door.</p>", actions: [{ label: "Back to it" }] });
      return;
    }
    hintFor(pid);
  }

  /* ----- casebook ----- */

  function openCasebook() {
    const wrap = el("div");
    const tabs = el("div", "tabs");
    const tabEv = btn(`Evidence (${state.evidence.length})`, "tab active", () => show("ev"));
    const tabLt = btn(`Letters & Papers (${state.letters.length})`, "tab", () => show("lt"));
    tabs.appendChild(tabEv); tabs.appendChild(tabLt);
    wrap.appendChild(tabs);
    const pane = el("div", "casebook-pane");
    wrap.appendChild(pane);

    function show(which) {
      tabEv.classList.toggle("active", which === "ev");
      tabLt.classList.toggle("active", which === "lt");
      pane.innerHTML = "";
      if (which === "ev") {
        if (!state.evidence.length) { pane.innerHTML = "<p class='empty'>Nothing yet. Journalism is mostly looking under furniture.</p>"; return; }
        state.evidence.forEach((id) => {
          const ev = STORY.evidence[id];
          pane.appendChild(el("div", "case-entry", `<div class="case-head">${ev.icon} <strong>${ev.name}</strong></div><p>${ev.desc}</p>`));
        });
      } else {
        if (!state.letters.length) { pane.innerHTML = "<p class='empty'>No letters found yet. They're always in the pockets people think no one checks.</p>"; return; }
        state.letters.forEach((id) => {
          const lt = STORY.letters[id];
          const entry = el("div", "case-entry case-letter");
          entry.appendChild(el("div", "case-head", `${lt.icon} <strong>${lt.name}</strong>`));
          entry.appendChild(btn("Read again", "btn btn-small", () => openLetter(id)));
          pane.appendChild(entry);
        });
      }
    }
    show("ev");
    modal({ title: "📔 Your casebook", body: wrap, actions: [{ label: "Close" }], kind: "modal-wide" });
  }

  /* ----- accusation ----- */

  function accuseCard(h) {
    return btn(
      `<span class="hs-icon">${h.icon}</span><span class="hs-label">${h.label}</span>`,
      "hotspot door accuse-card",
      openAccusation
    );
  }

  function openAccusation() {
    const acc = STORY.accusation;
    const wrap = el("div");
    wrap.appendChild(el("div", "puzzle-prompt", acc.intro));
    const grid = el("div", "suspect-grid");
    acc.suspects.forEach((s) => {
      const card = btn(`<span class="hs-icon">${s.icon}</span><span class="hs-label">${s.name}</span>`, "hotspot suspect", () => {
        modal({
          title: s.icon + " " + s.name,
          body: `<p>${s.line}</p><p>Do you call it?</p>`,
          actions: [
            { label: "Accuse " + s.name.split(" ")[0], cls: "btn btn-danger", onClick: () => accuse(s.id) },
            { label: "Hold the call" , onClick: openAccusation },
          ],
        });
      });
      grid.appendChild(card);
    });
    wrap.appendChild(grid);
    modal({ title: "⚖️ Call the score", body: wrap, actions: [{ label: "Not yet" }], kind: "modal-wide" });
  }

  function accuse(id) {
    if (id !== "cressida") {
      state.endingId = "wrong_" + id;
      state.screen = "ending";
      save(); render();
      return;
    }
    pickEvidence();
  }

  function pickEvidence() {
    const acc = STORY.accusation;
    const wrap = el("div");
    wrap.appendChild(el("div", "puzzle-prompt", acc.evidencePrompt));
    const list = el("div", "evidence-pick");
    const chosen = new Set();
    const counter = el("p", "pick-count", "Chosen: 0 of 3");

    state.evidence.forEach((id) => {
      const ev = STORY.evidence[id];
      const item = btn(`${ev.icon} ${ev.name}`, "pick-item", () => {
        if (chosen.has(id)) chosen.delete(id);
        else if (chosen.size < 3) chosen.add(id);
        item.classList.toggle("picked", chosen.has(id));
        counter.textContent = `Chosen: ${chosen.size} of 3`;
      });
      list.appendChild(item);
    });
    wrap.appendChild(list);
    wrap.appendChild(counter);

    modal({
      title: "⚖️ Lay out the proof",
      body: wrap,
      kind: "modal-wide",
      actions: [
        {
          label: "Make the case", cls: "btn btn-danger",
          onClick: () => {
            if (chosen.size < 3) { counter.textContent = "Choose three. Hartcombe is a best-of-three sort of place."; return; }
            const hits = [...chosen].filter((id) => acc.keyEvidence.includes(id)).length;
            state.endingId = hits >= acc.minKeyEvidence ? "correct" : "insufficient";
            state.screen = state.endingId === "correct" ? "finale" : "ending";
            save(); render();
          },
        },
        { label: "Step back", onClick: openAccusation },
      ],
    });
  }

  /* ----- endings & epilogue ----- */

  function renderEnding(id, isFinale) {
    const end = STORY.endings[id];
    const wrap = el("div", "story-screen ending-screen");
    wrap.appendChild(el("h2", "story-heading ending-title", end.title));
    wrap.appendChild(el("div", "story-body", end.text));
    const row = el("div", "story-actions");
    if (end.retry) {
      row.appendChild(btn("Play the point again", "btn btn-primary", () => {
        state.screen = "room"; state.room = "court"; state.endingId = null; save(); render();
      }));
    }
    if (isFinale) {
      row.appendChild(btn("Morning comes →", "btn btn-primary", () => {
        state.screen = "epilogue"; state.flags.epiloguePhase = "intro"; save(); render();
      }));
    }
    wrap.appendChild(row);
    app.appendChild(wrap);
  }

  function renderEpilogue() {
    const epi = STORY.epilogue;
    const wrap = el("div", "story-screen");

    if (!state.flags.epilogueChoice) {
      wrap.appendChild(el("h2", "story-heading", "Epilogue — Full Morning"));
      wrap.appendChild(el("div", "story-body", epi.intro));
      const row = el("div", "epilogue-choices");
      epi.choices.forEach((c) => {
        row.appendChild(btn(`<span class="hs-icon">${c.icon}</span><span class="hs-label">${c.label}</span>`, "hotspot epilogue-card", () => {
          state.flags.epilogueChoice = c.id; save(); render();
        }));
      });
      wrap.appendChild(row);
    } else {
      const end = epi.endings[state.flags.epilogueChoice];
      wrap.appendChild(el("h2", "story-heading ending-title", end.title));
      wrap.appendChild(el("div", "story-body", end.text));
      wrap.appendChild(el("p", "credits", "LOVE ALL — fin.<br><span>You may now file your eight hundred words about strawberries.</span>"));
      const row = el("div", "story-actions");
      row.appendChild(btn("Choose a different morning", "btn", () => {
        delete state.flags.epilogueChoice; save(); render();
      }));
      row.appendChild(btn("Play again from the storm", "btn btn-primary", () => {
        wipe(); state = freshState(); state.screen = "title"; render();
      }));
      wrap.appendChild(row);
    }
    app.appendChild(wrap);
  }

  /* ----- restart ----- */

  function confirmRestart() {
    modal({
      title: "Abandon the match?",
      body: "<p>Return to the title screen? Your progress is saved — Hartcombe never forgets anything, it's half the problem.</p>",
      actions: [
        { label: "Title screen", cls: "btn btn-primary", onClick: () => { save(); state.screen = "title"; render(); } },
        { label: "Stay" },
      ],
    });
  }

  /* ---------- boot ---------- */

  // Always boot to the title screen; "Continue" re-loads the saved state
  // (load() is called inside the Continue button), so the in-memory state
  // here is only used until the player picks New Game or Continue.
  state = freshState();
  render();
})();
