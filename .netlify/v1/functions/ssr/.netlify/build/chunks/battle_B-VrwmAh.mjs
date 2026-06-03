import { c as createComponent } from './astro-component_DhNIOW7e.mjs';
import 'piccolore';
import { a as renderTemplate, d as defineScriptVars, r as renderComponent, m as maybeRenderHead, b as addAttribute } from './ssr-function_D9hfZRez.mjs';
import { $ as $$Layout, m as mascotteIcon } from './Layout_J5fQyMPZ.mjs';
import { $ as $$CTAButton } from './CTAButton_DrJ9AueS.mjs';
import { m as mascotte1 } from './mascotte1_FvfZysDN.mjs';
import { c as checkIcon } from './check_BNmDTFJ3.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Battle = createComponent(async ($$result, $$props, $$slots) => {
  const DUREE = 120;
  const mots = [
    {
      id: "bonjour",
      image: null,
      reponses: ["Bonjour", "Au revoir", "À Demain", "À plus tard"],
      bonne_reponse: "Bonjour"
    },
    {
      id: "merci",
      image: null,
      reponses: ["Merci", "Bonjour", "Pardon", "S'il vous plaît"],
      bonne_reponse: "Merci"
    }
  ];
  const participants = [
    { id: "p1", done: true },
    { id: "p2", done: true },
    { id: "p3", done: true },
    { id: "p4", done: false }
  ];
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", '\n    const lightbox = document.getElementById("battle-lightbox");\n    const btnStart = document.getElementById("btn-start");\n    const btnClose = document.getElementById("btn-close");\n    const btnCloseEnd = document.getElementById("btn-close-end");\n    const btnRestart = document.getElementById("btn-restart");\n    const timerDisplay = document.getElementById("timer-display");\n    const cardImage = document.getElementById("card-image");\n    const answersGrid = document.getElementById("answers-grid");\n    const feedback = document.getElementById("feedback");\n    const endScreen = document.getElementById("end-screen");\n    const endTitle = document.getElementById("end-title");\n    const scoreDisplay = document.getElementById("score-display");\n    const card = document.getElementById("card");\n\n    let index = 0;\n    let score = 0;\n    let timeLeft = DUREE;\n    let timerInterval = null;\n    let gameOver = false;\n\n    function formatTime(s) {\n        const m = Math.floor(s / 60);\n        const sec = s % 60;\n        return `${m}:${sec.toString().padStart(2, "0")}`;\n    }\n\n    function startTimer() {\n        timerDisplay.textContent = formatTime(timeLeft);\n        timerDisplay.style.backgroundColor = "";\n        timerDisplay.style.color = "";\n        timerInterval = setInterval(() => {\n            timeLeft--;\n            timerDisplay.textContent = formatTime(timeLeft);\n            if (timeLeft <= 10) {\n                timerDisplay.style.backgroundColor = "var(--pink)";\n                timerDisplay.style.color = "var(--green)";\n            }\n            if (timeLeft <= 0) {\n                clearInterval(timerInterval);\n                showEnd(false);\n            }\n        }, 1000);\n    }\n\n    function loadCard() {\n        const mot = mots[index % mots.length];\n        // TODO: remplacer par l\'URL PocketBase → cardImage.src = mot.image\n        card.classList.remove("scale-95");\n        card.style.display = "";\n        answersGrid.style.display = "";\n        feedback.classList.add("hidden");\n        feedback.textContent = "";\n        answersGrid.innerHTML = "";\n        const reponses = [...mot.reponses].sort(() => Math.random() - 0.5);\n        reponses.forEach((rep) => {\n            const btn = document.createElement("button");\n            btn.textContent = rep;\n            btn.style.backgroundColor = "var(--pink)";\n            btn.style.color = "var(--green)";\n            btn.className =\n                "font-gill font-black text-2xl rounded-full py-4 px-4 hover:opacity-85 active:scale-95 transition-all focus:outline-none";\n            btn.addEventListener("click", () => answer(rep, mot.bonne_reponse));\n            answersGrid.appendChild(btn);\n        });\n    }\n\n    function answer(choix, bonne) {\n        if (gameOver) return;\n        const correct = choix === bonne;\n        feedback.classList.remove("hidden");\n        if (correct) {\n            feedback.textContent = "✓ Bonne réponse !";\n            feedback.style.backgroundColor = "var(--light-green)";\n            feedback.style.color = "white";\n            score++;\n        } else {\n            feedback.textContent = `✗ C\'était : ${bonne}`;\n            feedback.style.backgroundColor = "var(--pink)";\n            feedback.style.color = "var(--green)";\n        }\n        card.classList.add("scale-95");\n        Array.from(answersGrid.children).forEach((b) => (b.disabled = true));\n        setTimeout(() => {\n            if (!gameOver) {\n                index++;\n                loadCard();\n            }\n        }, 1000);\n    }\n\n    function showEnd(fini) {\n        gameOver = true;\n        clearInterval(timerInterval);\n        answersGrid.innerHTML = "";\n        feedback.classList.add("hidden");\n        card.style.display = "none";\n        answersGrid.style.display = "none";\n        endTitle.textContent = fini ? "Bravo, terminé !" : "Temps écoulé !";\n        scoreDisplay.textContent = `Score : ${score} / ${mots.length}`;\n        endScreen.classList.remove("hidden");\n        endScreen.classList.add("flex");\n    }\n\n    function openLightbox() {\n        index = 0;\n        score = 0;\n        timeLeft = DUREE;\n        gameOver = false;\n        endScreen.classList.add("hidden");\n        endScreen.classList.remove("flex");\n        lightbox.classList.remove("opacity-0", "pointer-events-none");\n        document.body.style.overflow = "hidden";\n        document.documentElement.style.overflow = "hidden";\n        loadCard();\n        startTimer();\n    }\n\n    function closeLightbox() {\n        clearInterval(timerInterval);\n        lightbox.classList.add("opacity-0", "pointer-events-none");\n        document.body.style.overflow = "";\n        document.documentElement.style.overflow = "";\n    }\n\n    btnStart.addEventListener("click", openLightbox);\n    btnClose.addEventListener("click", closeLightbox);\n    btnCloseEnd.addEventListener("click", closeLightbox);\n    btnRestart.addEventListener("click", () => {\n        endScreen.classList.add("hidden");\n        endScreen.classList.remove("flex");\n        index = 0;\n        score = 0;\n        timeLeft = DUREE;\n        gameOver = false;\n        loadCard();\n        startTimer();\n    });\n})();<\/script>'], ["", " <script>(function(){", '\n    const lightbox = document.getElementById("battle-lightbox");\n    const btnStart = document.getElementById("btn-start");\n    const btnClose = document.getElementById("btn-close");\n    const btnCloseEnd = document.getElementById("btn-close-end");\n    const btnRestart = document.getElementById("btn-restart");\n    const timerDisplay = document.getElementById("timer-display");\n    const cardImage = document.getElementById("card-image");\n    const answersGrid = document.getElementById("answers-grid");\n    const feedback = document.getElementById("feedback");\n    const endScreen = document.getElementById("end-screen");\n    const endTitle = document.getElementById("end-title");\n    const scoreDisplay = document.getElementById("score-display");\n    const card = document.getElementById("card");\n\n    let index = 0;\n    let score = 0;\n    let timeLeft = DUREE;\n    let timerInterval = null;\n    let gameOver = false;\n\n    function formatTime(s) {\n        const m = Math.floor(s / 60);\n        const sec = s % 60;\n        return \\`\\${m}:\\${sec.toString().padStart(2, "0")}\\`;\n    }\n\n    function startTimer() {\n        timerDisplay.textContent = formatTime(timeLeft);\n        timerDisplay.style.backgroundColor = "";\n        timerDisplay.style.color = "";\n        timerInterval = setInterval(() => {\n            timeLeft--;\n            timerDisplay.textContent = formatTime(timeLeft);\n            if (timeLeft <= 10) {\n                timerDisplay.style.backgroundColor = "var(--pink)";\n                timerDisplay.style.color = "var(--green)";\n            }\n            if (timeLeft <= 0) {\n                clearInterval(timerInterval);\n                showEnd(false);\n            }\n        }, 1000);\n    }\n\n    function loadCard() {\n        const mot = mots[index % mots.length];\n        // TODO: remplacer par l\'URL PocketBase → cardImage.src = mot.image\n        card.classList.remove("scale-95");\n        card.style.display = "";\n        answersGrid.style.display = "";\n        feedback.classList.add("hidden");\n        feedback.textContent = "";\n        answersGrid.innerHTML = "";\n        const reponses = [...mot.reponses].sort(() => Math.random() - 0.5);\n        reponses.forEach((rep) => {\n            const btn = document.createElement("button");\n            btn.textContent = rep;\n            btn.style.backgroundColor = "var(--pink)";\n            btn.style.color = "var(--green)";\n            btn.className =\n                "font-gill font-black text-2xl rounded-full py-4 px-4 hover:opacity-85 active:scale-95 transition-all focus:outline-none";\n            btn.addEventListener("click", () => answer(rep, mot.bonne_reponse));\n            answersGrid.appendChild(btn);\n        });\n    }\n\n    function answer(choix, bonne) {\n        if (gameOver) return;\n        const correct = choix === bonne;\n        feedback.classList.remove("hidden");\n        if (correct) {\n            feedback.textContent = "✓ Bonne réponse !";\n            feedback.style.backgroundColor = "var(--light-green)";\n            feedback.style.color = "white";\n            score++;\n        } else {\n            feedback.textContent = \\`✗ C\'était : \\${bonne}\\`;\n            feedback.style.backgroundColor = "var(--pink)";\n            feedback.style.color = "var(--green)";\n        }\n        card.classList.add("scale-95");\n        Array.from(answersGrid.children).forEach((b) => (b.disabled = true));\n        setTimeout(() => {\n            if (!gameOver) {\n                index++;\n                loadCard();\n            }\n        }, 1000);\n    }\n\n    function showEnd(fini) {\n        gameOver = true;\n        clearInterval(timerInterval);\n        answersGrid.innerHTML = "";\n        feedback.classList.add("hidden");\n        card.style.display = "none";\n        answersGrid.style.display = "none";\n        endTitle.textContent = fini ? "Bravo, terminé !" : "Temps écoulé !";\n        scoreDisplay.textContent = \\`Score : \\${score} / \\${mots.length}\\`;\n        endScreen.classList.remove("hidden");\n        endScreen.classList.add("flex");\n    }\n\n    function openLightbox() {\n        index = 0;\n        score = 0;\n        timeLeft = DUREE;\n        gameOver = false;\n        endScreen.classList.add("hidden");\n        endScreen.classList.remove("flex");\n        lightbox.classList.remove("opacity-0", "pointer-events-none");\n        document.body.style.overflow = "hidden";\n        document.documentElement.style.overflow = "hidden";\n        loadCard();\n        startTimer();\n    }\n\n    function closeLightbox() {\n        clearInterval(timerInterval);\n        lightbox.classList.add("opacity-0", "pointer-events-none");\n        document.body.style.overflow = "";\n        document.documentElement.style.overflow = "";\n    }\n\n    btnStart.addEventListener("click", openLightbox);\n    btnClose.addEventListener("click", closeLightbox);\n    btnCloseEnd.addEventListener("click", closeLightbox);\n    btnRestart.addEventListener("click", () => {\n        endScreen.classList.add("hidden");\n        endScreen.classList.remove("flex");\n        index = 0;\n        score = 0;\n        timeLeft = DUREE;\n        gameOver = false;\n        loadCard();\n        startTimer();\n    });\n})();<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Battle — Gestons!" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-5 pt-8 pb-32 flex flex-col gap-8"> <h1 class="font-gill font-black text-6xl text-(--green) text-center leading-tight">
Battle
</h1> <div class="flex flex-col gap-3"> <div> <h2 class="font-sugo text-2xl text-(--light-green)">
Les règles de la Battle :
</h2> <p class="font-sugo text-base text-(--pink)">
Affrontez vos adversaires dans un duel de rapidité et de
                    précision !
</p> </div> <p class="font-lato text-sm leading-relaxed ml-6">
Le principe est simple : une image ou une vidéo de signe LSF
                apparaît au centre de l'écran, accompagnée de quatre
                propositions de mots. Pour l'emporter, vous devez identifier et
                sélectionner le mot correspondant le plus vite possible.
</p> <p class="font-lato text-sm leading-relaxed ml-6">
Chaque seconde compte : plus votre réponse est immédiate, plus
                vous engrangez de points pour distancer vos rivaux.
</p> <p class="font-lato text-sm leading-relaxed ml-6">
Restez concentré, car la moindre erreur peut donner l'avantage à
                votre adversaire. Prêt pour le face-à-face ? Que le meilleur
                signeur gagne !
</p> </div> <div class="flex flex-col gap-3 items-center"> <div class="flex flex-row gap-4 flex-wrap"> <div class="flex flex-col items-start gap-2"> <button id="btn-start" class="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 font-sugo font-bold text-xl transition-all border-2 border-white text-white bg-(--light-green) hover:opacity-85 shadow-[0_0_18px_4px_var(--light-green)]">
C'est parti !
</button> <p class="font-lato text-xs text-(--green) ml-1">
Lancer la bataille
</p> </div> <div class="flex flex-col items-start gap-2"> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "href": "/training", "label": "S'entraîner en solo", "variant": "white" })} </div> </div> </div> </section> <div id="battle-lightbox" class="fixed inset-0 z-50 bg-white flex flex-col opacity-0 pointer-events-none transition-opacity duration-300" aria-modal="true" role="dialog" aria-label="Jeu Battle"> <div class="flex items-center justify-between px-5 pt-5 pb-2 shrink-0"> <h2 class="font-gill font-black text-3xl text-(--green) uppercase">
BATTLE
</h2> <button id="btn-close" aria-label="Quitter la battle" class="border-2 border-(--light-green) text-(--green) font-lato text-sm rounded-xl px-4 py-2 hover:bg-(--light-green) hover:text-white transition-all">
✕ Quitter
</button> </div> <div class="flex flex-col gap-4 px-5 pb-6 overflow-y-auto flex-1 select-none"> <div class="flex justify-center"> <div id="timer-display" class="bg-(--light-green) text-white font-gill font-black text-5xl rounded-2xl px-10 py-4 tabular-nums tracking-wider transition-colors">
2:00
</div> </div> <div class="flex items-center gap-3"> <div class="flex items-center -space-x-2"> ${participants.map((p) => renderTemplate`<div class="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center shrink-0"${addAttribute(
    p.done ? "background-color: var(--light-green)" : "background-color: var(--pink)",
    "style"
  )}> ${p.done ? renderTemplate`<img${addAttribute(checkIcon.src, "src")} alt="" class="w-5 h-5" aria-hidden="true">` : renderTemplate`<img${addAttribute(mascotteIcon.src, "src")} alt="" class="w-6 h-6" aria-hidden="true">`} </div>`)} </div> <span class="font-gill font-black text-sm text-(--green) uppercase leading-tight">
Suivis des autres<br>participants
</span> </div> <div id="card" class="w-full bg-(--light-green) rounded-3xl flex items-center justify-center overflow-hidden transition-transform duration-200" style="min-height: 220px;"> <img id="card-image"${addAttribute(mascotte1.src, "src")} alt="Signe LSF" class="h-52 w-auto object-contain"> </div> <div id="answers-grid" class="grid grid-cols-2 gap-3"></div> <div id="feedback" class="hidden text-center font-gill font-black text-2xl py-3 rounded-full"></div> <div id="end-screen" class="hidden flex-col items-center gap-6 py-8"> <p id="end-title" class="font-gill font-black text-4xl text-(--green) text-center"></p> <p id="score-display" class="font-lato text-xl font-bold text-(--light-green)"></p> <button id="btn-restart" class="bg-(--green) text-white font-sugo font-bold text-xl rounded-full px-8 py-3 hover:opacity-85 transition-all">
Rejouer
</button> <a href="/classement" class="bg-(--light-green) text-white font-sugo font-bold text-xl rounded-full px-8 py-3 hover:opacity-85 transition-all shadow-[0_0_18px_4px_var(--light-green)]">
Voir le classement
</a> <button id="btn-close-end" class="border-2 border-(--light-green) text-(--green) font-lato text-sm rounded-xl px-6 py-2 hover:bg-(--light-green) hover:text-white transition-all">
Quitter
</button> </div> </div> </div> ` }), defineScriptVars({ mots, DUREE }));
}, "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/battle.astro", void 0);

const $$file = "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/battle.astro";
const $$url = "/battle";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Battle,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
