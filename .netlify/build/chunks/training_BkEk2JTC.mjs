import { c as createComponent } from './astro-component_DhNIOW7e.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './ssr-function_D9hfZRez.mjs';
import { $ as $$Layout } from './Layout_J5fQyMPZ.mjs';
import { $ as $$CTAButton } from './CTAButton_DrJ9AueS.mjs';

const $$Training = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Entraînement — Gestons!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-5 pt-8 pb-32 flex flex-col gap-8"> <h1 class="font-gill font-black text-6xl text-(--green) text-center leading-tight">
Entrainement
</h1> <div class="flex flex-col gap-3"> <div> <h2 class="font-sugo text-2xl text-(--light-green)">
Les règles du Vrai / Faux :
</h2> <p class="font-sugo text-base text-(--pink)">
Maîtrisez le vocabulaire de la LSF à votre propre rythme
                    avec ce mode d'entraînement intuitif !
</p> </div> <p class="font-lato text-sm leading-relaxed ml-6">
Le principe repose sur le Vrai/Faux : une image ou une vidéo de
                signe LSF apparaît au centre de l'écran, avec un mot associé
                juste en dessous.
</p> <div class="flex flex-col gap-1"> <p class="font-lato text-sm leading-relaxed ml-6">
Votre mission est de valider la correspondance :
</p> <ul class="font-lato text-sm leading-relaxed list-disc list-inside flex flex-col gap-2 ml-6"> <li>
Si le mot <strong>correspond</strong> parfaitement au signe
                        affiché, swipez à droite (ou cliquez sur la flèche Droite)
                        pour confirmer que c'est <strong>VRAI</strong>.
</li> <li>
Si le mot <strong>ne correspond pas</strong> au signe, swipez
                        à gauche (ou cliquez sur la flèche Gauche) pour indiquer que
                        c'est <strong>FAUX</strong>.
</li> </ul> </div> <p class="font-lato text-sm leading-relaxed ml-6">
Un doute sur un signe ? Ne restez pas bloqué ! Cliquez sur
                l'icône Ampoule située au centre, entre les flèches
                directionnelles, pour afficher instantanément la solution. C'est
                l'outil idéal pour apprendre de vos erreurs et mémoriser les
                signes sans pression. Enchaînez les bonnes réponses pour
                progresser dans les thématiques et perfectionner votre agilité
                gestuelle !
</p> </div> <div class="flex flex-col gap-3 items-center"> <div class="flex flex-row gap-4 flex-wrap"> <div class="items-start"> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "href": "/jeux/entrainement", "label": "C'est parti !", "variant": "outline" })} <p class="font-lato text-xs text-(--green) ml-1 mt-4">
Lancer l'entraînement
</p> </div> <div class="items-start"> ${renderComponent($$result2, "CTAButton", $$CTAButton, { "href": "/battle", "label": "Mode Battle", "variant": "white" })} <p class="font-lato text-xs text-(--green) ml-1 mt-4"></p> </div> </div> </div> </section> ` })}`;
}, "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/training.astro", void 0);

const $$file = "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/training.astro";
const $$url = "/training";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Training,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
