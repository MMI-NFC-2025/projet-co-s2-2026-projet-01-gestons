import { c as createComponent } from './astro-component_DhNIOW7e.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './ssr-function_D9hfZRez.mjs';
import { $ as $$Layout } from './Layout_J5fQyMPZ.mjs';
import { $ as $$BackButton } from './BackButton_DLd46BCs.mjs';

const $$Cgu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CGU — Gestons!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-5 pt-6 pb-16 flex flex-col gap-8"> <div class="flex justify-end"> ${renderComponent($$result2, "BackButton", $$BackButton, { "href": "/", "label": "<- Retour" })} </div> <div> <h1 class="font-gill font-black text-5xl text-(--green) leading-tight">
Conditions Général d'Utilisation – Gestons
</h1> <p class="font-lato text-sm mt-2 ml-6">
(Conformité RGPD – Règlement UE 2016/679)
</p> </div> <div class="flex flex-col gap-2"> <h2 class="font-sugo text-2xl text-(--light-green)">Objet</h2> <p class="font-lato text-sm leading-relaxed ml-6">
Les présentes CGU encadrent l'accès et l'utilisation de
                l'application Gestons, dédiée à l'apprentissage de la LSF.
</p> </div> <div class="flex flex-col gap-2"> <h2 class="font-sugo text-2xl text-(--light-green)">Acceptation</h2> <p class="font-lato text-sm leading-relaxed ml-6">
L'utilisation de l'application implique l'acceptation pleine et
                entière des CGU.
</p> </div> <div class="flex flex-col gap-2"> <h2 class="font-sugo text-2xl text-(--light-green)">
Accès au service
</h2> <p class="font-lato text-sm leading-relaxed ml-6">
Gestons est accessible gratuitement. L'éditeur peut suspendre ou
                modifier l'accès pour maintenance ou mise à jour.
</p> </div> <div class="flex flex-col gap-2"> <h2 class="font-sugo text-2xl text-(--light-green)">
Compte utilisateur
</h2> <p class="font-lato text-sm leading-relaxed ml-6">
Certaines fonctionnalités nécessitent un compte.
</p> <p class="font-lato text-sm leading-relaxed ml-6">
L'utilisateur s'engage à fournir des informations exactes et à
                ne pas usurper l'identité d'un tiers.
</p> <p class="font-lato text-sm font-bold ml-6">
L'utilisateur s'engage à :
</p> <ul class="font-lato text-sm leading-relaxed list-disc list-inside flex flex-col gap-1 ml-6"> <li>utiliser l'application dans un cadre pédagogique ;</li> <li>
ne pas tenter d'accéder aux données d'autres utilisateurs ;
</li> <li>ne pas nuire au fonctionnement technique.</li> </ul> </div> <div class="flex flex-col gap-2"> <h2 class="font-sugo text-2xl text-(--light-green)">
Destinataires
</h2> <p class="font-lato text-sm leading-relaxed ml-6">
Les contenus pédagogiques sont fournis à titre informatif.
</p> <p class="font-lato text-sm leading-relaxed ml-6">
L'éditeur ne garantit pas l'exactitude absolue de chaque signe
                ou interprétation.
</p> </div> <div class="flex flex-col gap-2"> <h2 class="font-sugo text-2xl text-(--light-green)">Résiliation</h2> <p class="font-lato text-sm leading-relaxed ml-6">
L'utilisateur peut supprimer son compte à tout moment.
</p> <p class="font-lato text-sm leading-relaxed ml-6">
L'éditeur peut suspendre un compte en cas d'usage abusif.
</p> </div> <div class="flex flex-col gap-2"> <h2 class="font-sugo text-2xl text-(--light-green)">Sécurité</h2> <p class="font-lato text-sm font-bold ml-6">
L'éditeur ne peut être tenu responsable en cas de :
</p> <ul class="font-lato text-sm leading-relaxed list-disc list-inside flex flex-col gap-1 ml-6"> <li>indisponibilité temporaire ;</li> <li>perte de données liée à un usage non conforme ;</li> <li>utilisation détournée de l'application.</li> </ul> </div> <div class="flex flex-col gap-2"> <h2 class="font-sugo text-2xl text-(--light-green)">
Droit applicable
</h2> <p class="font-lato text-sm leading-relaxed ml-6">
Les CGU sont soumises au droit français.
</p> </div> </section> ` })}`;
}, "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/cgu.astro", void 0);

const $$file = "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/cgu.astro";
const $$url = "/cgu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Cgu,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
