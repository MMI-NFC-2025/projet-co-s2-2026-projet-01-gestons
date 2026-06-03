import { c as createComponent } from './astro-component_DhNIOW7e.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './ssr-function_D9hfZRez.mjs';
import 'clsx';

const $$BackButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BackButton;
  const { href = "/", label = "<- Retour" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="inline-flex items-center gap-1 border-2 border-(--light-green) text-(--green) font-lato font-bold text-sm rounded-xl px-4 py-2 hover:bg-(--light-green) transition-colors focus-visible:outline-2 focus-visible:outline-(--light-green)"> ${label} </a>`;
}, "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/components/BackButton.astro", void 0);

export { $$BackButton as $ };
