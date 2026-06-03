import { c as createComponent } from './astro-component_DhNIOW7e.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './ssr-function_D9hfZRez.mjs';
import 'clsx';
import { m as mascotteIcon } from './Layout_J5fQyMPZ.mjs';
import { c as checkIcon } from './check_BNmDTFJ3.mjs';

const $$AvatarLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AvatarLink;
  const {
    href = "/personalisation",
    color = "var(--light-green)",
    alt = "Avatar — modifier l'apparence"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(alt, "aria-label")} class="relative inline-block w-32 h-32 shrink-0"> <div class="w-full h-full rounded-full border-4 overflow-hidden flex items-center justify-center bg-white"${addAttribute(`border-color: ${color}`, "style")}> <img${addAttribute(mascotteIcon.src, "src")} alt="" aria-hidden="true" class="w-24 h-24 object-contain"> </div> <span class="absolute bottom-1 right-1 w-8 h-8 rounded-full flex items-center justify-center border-2 border-white"${addAttribute(`background-color: ${color}`, "style")} aria-hidden="true"> <img${addAttribute(checkIcon.src, "src")} alt="" class="w-4 h-4"> </span> </a>`;
}, "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/components/AvatarLink.astro", void 0);

export { $$AvatarLink as $ };
