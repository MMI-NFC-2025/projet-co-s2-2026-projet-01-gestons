import { c as createComponent } from './astro-component_DhNIOW7e.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './ssr-function_D9hfZRez.mjs';
import { $ as $$Layout } from './Layout_J5fQyMPZ.mjs';
import { $ as $$BackButton } from './BackButton_DLd46BCs.mjs';

const $$Cookies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Politique Cookies — Gestons!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-5 pt-6 pb-16 flex flex-col gap-8"> <div class="flex justify-end"> ${renderComponent($$result2, "BackButton", $$BackButton, { "href": "/", "label": "<- Retour" })} </div> <div> <h1 class="font-gill font-black text-5xl text-(--green) leading-tight">
Politique Cookies – Gestons
</h1> <p class="font-lato text-sm mt-2 ml-6">(Conformité CNIL)</p> </div> <div class="flex flex-col gap-2"> <h2 class="font-sugo text-2xl text-(--light-green)">
Utilisation des cookies
</h2> <p class="font-lato text-sm leading-relaxed ml-6">
Gestons utilise uniquement des cookies ou traceurs strictement
                nécessaires au fonctionnement de l'application.
</p> </div> <div class="flex flex-col gap-2"> <h2 class="font-sugo text-2xl text-(--light-green)">
Types de cookies utilisés
</h2> <ul class="font-lato text-sm leading-relaxed list-disc list-inside flex flex-col gap-1"> <li>
cookies techniques : session, sécurité, authentification ;
</li> <li>cookies de mesure d'audience anonymisés (si activés).</li> </ul> <p class="font-lato text-sm leading-relaxed ml-6">
Aucun cookie publicitaire n'est utilisé.
</p> </div> <div class="flex flex-col gap-2"> <h2 class="font-sugo text-2xl text-(--light-green)">
Consentement
</h2> <div class="font-lato text-sm leading-relaxed flex flex-col gap-2"> <p class="ml-6">
Les cookies nécessaires ne requièrent pas de consentement.
</p> <p class="ml-6">
Les cookies optionnels (si présents) sont soumis à un
                    bandeau de consentement conforme CNIL.
</p> </div> </div> <div class="flex flex-col gap-2"> <h2 class="font-sugo text-2xl text-(--light-green)">Base légale</h2> <ul class="font-lato text-sm leading-relaxed list-disc list-inside flex flex-col gap-1 ml-6"> <li>cookies techniques : durée de session ;</li> <li>
cookies de mesure d'audience anonymisés : 13 mois maximum.
</li> </ul> <p class="font-lato text-sm leading-relaxed mt-1 ml-6">
L'utilisateur peut gérer ou supprimer les cookies via les
                paramètres de son appareil.
</p> </div> </section> ` })}`;
}, "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/cookies.astro", void 0);

const $$file = "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/cookies.astro";
const $$url = "/cookies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Cookies,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
