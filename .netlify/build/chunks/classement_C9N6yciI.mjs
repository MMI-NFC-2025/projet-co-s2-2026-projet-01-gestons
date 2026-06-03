import { c as createComponent } from './astro-component_DhNIOW7e.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './ssr-function_D9hfZRez.mjs';
import { $ as $$Layout } from './Layout_J5fQyMPZ.mjs';
import { $ as $$CTAButton } from './CTAButton_DrJ9AueS.mjs';
import { m as mascotte1 } from './mascotte1_FvfZysDN.mjs';

const $$Classement = createComponent(async ($$result, $$props, $$slots) => {
  const joueurs = [
    { rang: 1, name: "Lucas07", score: 18, avatar: null },
    { rang: 2, name: "Chloé12", score: 15, avatar: null },
    { rang: 3, name: "Lola01", score: 12, avatar: null },
    { rang: 4, name: "Moi", score: 9, avatar: null },
    { rang: 5, name: "Tom99", score: 7, avatar: null },
    { rang: 6, name: "Nina22", score: 5, avatar: null }
  ];
  const podium = [joueurs[1], joueurs[0], joueurs[2]];
  const podiumRanks = ["2e", "1er", "3e"];
  const podiumHeights = [110, 175, 90];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Classement — Gestons!" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-5 pt-8 pb-32 flex flex-col gap-8"> <h1 class="font-gill font-black text-5xl text-(--green) uppercase text-center">
Classement
</h1> <!-- Podium --> <div class="flex items-end justify-center gap-1 w-full"> ${podium.map((p, i) => renderTemplate`<div class="flex flex-col items-center flex-1 gap-1"> <div class="rounded-full border-4 border-white overflow-hidden flex items-center justify-center"${addAttribute(`width:${i === 1 ? "3.5rem" : "3rem"};height:${i === 1 ? "3.5rem" : "3rem"};background-color:${i === 1 ? "var(--light-green)" : "var(--pink)"}`, "style")}> <img${addAttribute(mascotte1.src, "src")}${addAttribute(p.name, "alt")} class="w-4/5 h-4/5 object-contain"> </div> <p class="font-lato text-xs font-bold text-(--green) text-center leading-tight"> ${p.name} </p> <div class="w-full rounded-t-2xl flex items-center justify-center"${addAttribute(`height:${podiumHeights[i]}px;background-color:var(--green)`, "style")}> <span class="font-gill font-black text-(--pink) leading-none"${addAttribute(`font-size:${i === 1 ? "3.5rem" : i === 0 ? "3rem" : "2.5rem"}`, "style")}> ${podiumRanks[i]} </span> </div> </div>`)} </div> <!-- Liste complète --> <div class="flex justify-center"> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "href": "/battle", "label": "Retour au lobby", "variant": "primary" })} </div> </section> ` })}`;
}, "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/classement.astro", void 0);

const $$file = "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/classement.astro";
const $$url = "/classement";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Classement,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
