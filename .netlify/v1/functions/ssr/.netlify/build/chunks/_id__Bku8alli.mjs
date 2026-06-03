import { c as createComponent } from './astro-component_DhNIOW7e.mjs';
import 'piccolore';
import { a as renderTemplate, d as defineScriptVars, r as renderComponent, m as maybeRenderHead, b as addAttribute } from './ssr-function_D9hfZRez.mjs';
import PocketBase from 'pocketbase';
import { $ as $$Layout, m as mascotteIcon } from './Layout_J5fQyMPZ.mjs';
import { m as mascotte1 } from './mascotte1_FvfZysDN.mjs';
import { c as checkIcon } from './check_BNmDTFJ3.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const pb = new PocketBase("https://gestons.girardin-tarby.fr");
  const records = await pb.collection("mot").getFullList();
  const noms = records.map((r) => r.mot_associe);
  const mots = records.map((record) => {
    const videoUrl = record.video_mot ? `https://gestons.girardin-tarby.fr/api/files/${record.collectionId}/${record.id}/${record.video_mot}` : null;
    const bonne = record.mot_associe;
    const autres = noms.filter((n) => n !== bonne);
    const mauvaises = [];
    const pool = [...autres].sort(() => Math.random() - 0.5);
    while (mauvaises.length < 3 && pool.length) mauvaises.push(pool.pop());
    const reponses = [bonne, ...mauvaises].sort(() => Math.random() - 0.5);
    return { id: record.id, videoUrl, reponses, bonne_reponse: bonne };
  });
  const participants = [
    { id: "p1", name: "Lucas07", avatar: null, score: 0, done: false },
    { id: "p2", name: "Chloé12", avatar: null, score: 0, done: false },
    { id: "p3", name: "Lola01", avatar: null, score: 0, done: false },
    { id: "p4", name: "Moi", avatar: null, score: 0, done: false }
  ];
  const session = { id, duree: 120 };
  const myId = "p4";
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", '\n    let index = 0;\n    let score = 0;\n    let timeLeft = session.duree;\n    let timerInterval = null;\n    let gameOver = false;\n\n    const timerDisplay = document.getElementById("timer-display");\n    const cardVideo = document.getElementById("card-video");\n    const cardFallback = document.getElementById("card-fallback");\n    const answersGrid = document.getElementById("answers-grid");\n    const feedback = document.getElementById("feedback");\n    const endScreen = document.getElementById("end-screen");\n    const endTitle = document.getElementById("end-title");\n    const scoreDisplay = document.getElementById("score-display");\n    const card = document.getElementById("card");\n\n    function formatTime(s) {\n        const m = Math.floor(s / 60);\n        const sec = s % 60;\n        return `${m}:${sec.toString().padStart(2, "0")}`;\n    }\n\n    function startTimer() {\n        timerInterval = setInterval(() => {\n            timeLeft--;\n            timerDisplay.textContent = formatTime(timeLeft);\n            if (timeLeft <= 10) {\n                timerDisplay.style.backgroundColor = "var(--pink)";\n                timerDisplay.style.color = "var(--green)";\n            }\n            if (timeLeft <= 0) {\n                clearInterval(timerInterval);\n                showEnd(false);\n            }\n        }, 1000);\n    }\n\n    function loadCard() {\n        const mot = mots[index % mots.length];\n        if (mot.videoUrl) {\n            cardVideo.src = mot.videoUrl;\n            cardVideo.classList.remove("hidden");\n            cardFallback.classList.add("hidden");\n            cardVideo.play().catch(() => {});\n        } else {\n            cardVideo.classList.add("hidden");\n            cardFallback.classList.remove("hidden");\n        }\n        card.classList.remove("scale-95");\n        feedback.classList.add("hidden");\n        feedback.textContent = "";\n\n        answersGrid.innerHTML = "";\n        const reponses = [...mot.reponses].sort(() => Math.random() - 0.5);\n        reponses.forEach((rep) => {\n            const btn = document.createElement("button");\n            btn.textContent = rep;\n            btn.className =\n                "bg-(--pink) text-(--green) font-gill font-black text-2xl rounded-full py-4 px-4 hover:opacity-85 active:scale-95 transition-all focus:outline-none";\n            btn.addEventListener("click", () => answer(rep, mot.bonne_reponse));\n            answersGrid.appendChild(btn);\n        });\n    }\n\n    function answer(choix, bonne) {\n        if (gameOver) return;\n        const correct = choix === bonne;\n\n        feedback.classList.remove("hidden");\n        if (correct) {\n            feedback.textContent = "✓ Bonne réponse !";\n            feedback.style.backgroundColor = "var(--light-green)";\n            feedback.style.color = "white";\n            score++;\n        } else {\n            feedback.textContent = `✗ C\'était : ${bonne}`;\n            feedback.style.backgroundColor = "var(--pink)";\n            feedback.style.color = "var(--green)";\n        }\n\n        card.classList.add("scale-95");\n        Array.from(answersGrid.children).forEach((b) => (b.disabled = true));\n\n        setTimeout(() => {\n            if (!gameOver) {\n                index++;\n                loadCard();\n            }\n        }, 1000);\n    }\n\n    function showEnd(fini) {\n        gameOver = true;\n        answersGrid.innerHTML = "";\n        feedback.classList.add("hidden");\n        card.style.display = "none";\n        document.getElementById("answers-grid").style.display = "none";\n        endTitle.textContent = fini ? "Bravo, terminé !" : "Temps écoulé !";\n        scoreDisplay.textContent = `Score : ${score} / ${mots.length}`;\n        endScreen.classList.remove("hidden");\n        endScreen.classList.add("flex");\n    }\n\n    function startGame() {\n        loadCard();\n        startTimer();\n    }\n\n    mots.sort(() => Math.random() - 0.5);\n    startGame();\n})();<\/script>'], ["", " <script>(function(){", '\n    let index = 0;\n    let score = 0;\n    let timeLeft = session.duree;\n    let timerInterval = null;\n    let gameOver = false;\n\n    const timerDisplay = document.getElementById("timer-display");\n    const cardVideo = document.getElementById("card-video");\n    const cardFallback = document.getElementById("card-fallback");\n    const answersGrid = document.getElementById("answers-grid");\n    const feedback = document.getElementById("feedback");\n    const endScreen = document.getElementById("end-screen");\n    const endTitle = document.getElementById("end-title");\n    const scoreDisplay = document.getElementById("score-display");\n    const card = document.getElementById("card");\n\n    function formatTime(s) {\n        const m = Math.floor(s / 60);\n        const sec = s % 60;\n        return \\`\\${m}:\\${sec.toString().padStart(2, "0")}\\`;\n    }\n\n    function startTimer() {\n        timerInterval = setInterval(() => {\n            timeLeft--;\n            timerDisplay.textContent = formatTime(timeLeft);\n            if (timeLeft <= 10) {\n                timerDisplay.style.backgroundColor = "var(--pink)";\n                timerDisplay.style.color = "var(--green)";\n            }\n            if (timeLeft <= 0) {\n                clearInterval(timerInterval);\n                showEnd(false);\n            }\n        }, 1000);\n    }\n\n    function loadCard() {\n        const mot = mots[index % mots.length];\n        if (mot.videoUrl) {\n            cardVideo.src = mot.videoUrl;\n            cardVideo.classList.remove("hidden");\n            cardFallback.classList.add("hidden");\n            cardVideo.play().catch(() => {});\n        } else {\n            cardVideo.classList.add("hidden");\n            cardFallback.classList.remove("hidden");\n        }\n        card.classList.remove("scale-95");\n        feedback.classList.add("hidden");\n        feedback.textContent = "";\n\n        answersGrid.innerHTML = "";\n        const reponses = [...mot.reponses].sort(() => Math.random() - 0.5);\n        reponses.forEach((rep) => {\n            const btn = document.createElement("button");\n            btn.textContent = rep;\n            btn.className =\n                "bg-(--pink) text-(--green) font-gill font-black text-2xl rounded-full py-4 px-4 hover:opacity-85 active:scale-95 transition-all focus:outline-none";\n            btn.addEventListener("click", () => answer(rep, mot.bonne_reponse));\n            answersGrid.appendChild(btn);\n        });\n    }\n\n    function answer(choix, bonne) {\n        if (gameOver) return;\n        const correct = choix === bonne;\n\n        feedback.classList.remove("hidden");\n        if (correct) {\n            feedback.textContent = "✓ Bonne réponse !";\n            feedback.style.backgroundColor = "var(--light-green)";\n            feedback.style.color = "white";\n            score++;\n        } else {\n            feedback.textContent = \\`✗ C\'était : \\${bonne}\\`;\n            feedback.style.backgroundColor = "var(--pink)";\n            feedback.style.color = "var(--green)";\n        }\n\n        card.classList.add("scale-95");\n        Array.from(answersGrid.children).forEach((b) => (b.disabled = true));\n\n        setTimeout(() => {\n            if (!gameOver) {\n                index++;\n                loadCard();\n            }\n        }, 1000);\n    }\n\n    function showEnd(fini) {\n        gameOver = true;\n        answersGrid.innerHTML = "";\n        feedback.classList.add("hidden");\n        card.style.display = "none";\n        document.getElementById("answers-grid").style.display = "none";\n        endTitle.textContent = fini ? "Bravo, terminé !" : "Temps écoulé !";\n        scoreDisplay.textContent = \\`Score : \\${score} / \\${mots.length}\\`;\n        endScreen.classList.remove("hidden");\n        endScreen.classList.add("flex");\n    }\n\n    function startGame() {\n        loadCard();\n        startTimer();\n    }\n\n    mots.sort(() => Math.random() - 0.5);\n    startGame();\n})();<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Battle — Gestons!" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-5 pt-6 pb-32 flex flex-col gap-6 select-none" id="battle-page"> <h1 class="font-gill font-black text-5xl text-(--green) uppercase text-center">
BATTLE
</h1> <div class="flex justify-center"> <div id="timer-display" class="bg-(--light-green) text-white font-gill font-black text-5xl rounded-2xl px-10 py-4 tabular-nums tracking-wider">
2:00
</div> </div> <div class="flex items-center gap-3"> <div class="flex items-center -space-x-2"> ${participants.map((p) => renderTemplate`<div class="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center shrink-0"${addAttribute(
    p.done ? "background-color: var(--light-green)" : "background-color: var(--pink)",
    "style"
  )}> ${p.done ? renderTemplate`<img${addAttribute(checkIcon.src, "src")} alt="" class="w-5 h-5" aria-hidden="true">` : renderTemplate`<img${addAttribute(mascotteIcon.src, "src")} alt="" class="w-6 h-6" aria-hidden="true">`} </div>`)} </div> <span class="font-gill font-black text-sm text-(--green) uppercase leading-tight">
Suivis des autres<br>participants
</span> </div> <div id="card" class="w-full bg-(--light-green) rounded-3xl flex items-center justify-center overflow-hidden" style="min-height: 220px;"> <video id="card-video" src="" autoplay playsinline muted loop class="w-full max-h-56 object-contain rounded-3xl hidden" aria-label="Signe LSF"></video> <img id="card-fallback"${addAttribute(mascotte1.src, "src")} alt="Signe LSF" class="h-44 w-auto object-contain"> </div> <div id="answers-grid" class="grid grid-cols-2 gap-3"></div> <div id="feedback" class="hidden text-center font-gill font-black text-2xl py-3 rounded-full"></div> <div id="end-screen" class="hidden flex-col items-center gap-6 py-8"> <p id="end-title" class="font-gill font-black text-4xl text-(--green) text-center"></p> <p id="score-display" class="font-lato text-xl font-bold text-(--light-green)"></p> <a href="/battle" class="bg-(--green) text-white font-sugo font-bold text-xl rounded-full px-8 py-3 hover:opacity-85 transition-all">
Retour au lobby
</a> <a href="/classement" class="bg-(--light-green) text-white font-sugo font-bold text-xl rounded-full px-8 py-3 hover:opacity-85 transition-all shadow-[0_0_18px_4px_var(--light-green)]">
Voir le classement
</a> </div> </section> ` }), defineScriptVars({ session, mots, myId }));
}, "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/jeux/multi/[id].astro", void 0);

const $$file = "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/jeux/multi/[id].astro";
const $$url = "/jeux/multi/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
