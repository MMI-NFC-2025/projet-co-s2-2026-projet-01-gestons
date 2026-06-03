import { c as createComponent } from './astro-component_DhNIOW7e.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './ssr-function_D9hfZRez.mjs';
import 'clsx';

const $$CTAButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CTAButton;
  const {
    href,
    label,
    variant = "primary",
    icon,
    customClass = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([
    "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-2.5 font-sugo font-bold text-xl transition-all focus-visible:outline-2 focus-visible:outline-offset-2",
    variant === "primary" ? "bg-(--green) text-white hover:opacity-85 focus-visible:outline-(--green)" : variant === "secondary" ? "text-(--green) bg-(--pink) hover:bg-(--green) hover:text-white focus-visible:outline-(--green)" : variant === "outline" ? "border-2 border-white text-white bg-(--light-green) hover:opacity-85 focus-visible:outline-(--light-green) shadow-[0_0_18px_4px_var(--light-green)]" : variant === "white" ? "bg-(--white) text-(--light-green) hover:bg-(--light-green) hover:text-white focus-visible:outline-white border-2 border-(--light-green)" : customClass
  ], "class:list")}> ${icon && renderTemplate`<img${addAttribute(icon, "src")} alt="" aria-hidden="true" class="w-5 h-5">`} ${label} </a>`;
}, "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/components/CTAButton.astro", void 0);

export { $$CTAButton as $ };
