import { c as createComponent } from './astro-component_DhNIOW7e.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './ssr-function_D9hfZRez.mjs';
import { $ as $$Layout } from './Layout_J5fQyMPZ.mjs';
import { $ as $$FormInput } from './FormInput_Ceb8Jn-B.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nous contacter — Gestons!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-5 pt-8 pb-32"> <h1 class="font-gill font-black text-4xl text-(--green) mb-4">
Nous contacter
</h1> <p class="font-lato font-bold text-sm text-gray-900 mb-8 leading-relaxed">
Besoin d'un coup de main ? Notre équipe est là pour t'accompagner.
            Envoie-nous un message et on te répondra plus vite qu'un signe
            éclair&nbsp;!
</p> <form method="POST" action="/api/contact" class="flex flex-col gap-5" novalidate> ${renderComponent($$result2, "FormInput", $$FormInput, { "label": "Prénom", "name": "prenom", "required": true })} ${renderComponent($$result2, "FormInput", $$FormInput, { "label": "Nom", "name": "nom", "required": true })} ${renderComponent($$result2, "FormInput", $$FormInput, { "label": "E-mail", "name": "email", "type": "email", "required": true })} ${renderComponent($$result2, "FormInput", $$FormInput, { "label": "Message", "name": "message", "multiline": true, "rows": 6, "required": true })} <div> <button type="submit" class="bg-(--green) text-(--pink) font-sugo text-xl rounded-xl px-8 py-3 hover:opacity-85 transition-opacity focus-visible:outline-2 focus-visible:outline-(--green)">
Envoyer
</button> </div> </form> </section> ` })}`;
}, "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/contact.astro", void 0);

const $$file = "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
