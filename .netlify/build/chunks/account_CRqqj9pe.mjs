import { c as createComponent } from './astro-component_DhNIOW7e.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './ssr-function_D9hfZRez.mjs';
import { $ as $$Layout } from './Layout_J5fQyMPZ.mjs';
import { $ as $$BackButton } from './BackButton_DLd46BCs.mjs';
import { $ as $$AvatarLink } from './AvatarLink_CoJhzqVu.mjs';
import { $ as $$FormInput } from './FormInput_Ceb8Jn-B.mjs';

const $$Account = createComponent(($$result, $$props, $$slots) => {
  const user = {
    username: "Lucas07",
    email: "lucas.dubois@gmail.com",
    phone: "06 67 12  04 25",
    avatarColor: "var(--light-green)"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mon Compte — Gestons!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-5 pt-6 pb-32 flex flex-col gap-8"> <div class="flex items-start justify-between"> ${renderComponent($$result2, "AvatarLink", $$AvatarLink, { "href": "/perso", "color": user.avatarColor, "alt": "Modifier l'avatar" })} ${renderComponent($$result2, "BackButton", $$BackButton, { "href": "/", "label": "<- Retour" })} </div> <div class="flex flex-col gap-6"> <h2 class="font-gill font-black text-2xl text-(--green)">
Vos informations :
</h2> <form method="POST" action="/api/account" class="flex flex-col gap-5"> ${renderComponent($$result2, "FormInput", $$FormInput, { "label": "Nom d'utilisateur", "name": "username", "type": "text", "placeholder": user.username, "variant": "flat" })} ${renderComponent($$result2, "FormInput", $$FormInput, { "label": "Adresse e-mail", "name": "email", "type": "email", "placeholder": user.email, "variant": "flat" })} ${renderComponent($$result2, "FormInput", $$FormInput, { "label": "Numéro de téléphone", "name": "phone", "type": "tel", "placeholder": user.phone, "variant": "flat" })} ${renderComponent($$result2, "FormInput", $$FormInput, { "label": "Mot de passe", "name": "password", "type": "password", "placeholder": "••••••••••••••", "variant": "flat" })} </form> </div> </section> ` })}`;
}, "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/account.astro", void 0);

const $$file = "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/account.astro";
const $$url = "/account";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Account,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
