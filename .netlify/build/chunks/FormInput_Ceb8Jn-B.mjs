import { c as createComponent } from './astro-component_DhNIOW7e.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './ssr-function_D9hfZRez.mjs';
import 'clsx';

const $$FormInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FormInput;
  const {
    label,
    name,
    type = "text",
    placeholder = "",
    required = false,
    multiline = false,
    rows = 5,
    variant = "default"
  } = Astro2.props;
  const id = `field-${name}`;
  const inputClass = variant === "flat" ? "w-full bg-gray-100 border-b-2 border-(--light-green) px-3 py-2 text-(--green) font-lato text-sm placeholder:text-(--green)/40 focus:outline-none focus:border-(--green) transition-colors" : "w-full rounded-xl bg-(--light-green) px-4 py-3 text-(--green) font-lato text-sm placeholder:text-(--green)/50 focus:outline-2 focus:outline-(--green) border-2 border-(--dark-green) focus:border-(--green) transition-colors";
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-1 w-full"> <label${addAttribute(id, "for")} class="font-lato text-sm font-bold text-(--green)"> ${label} </label> ${multiline ? renderTemplate`<textarea${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(rows, "rows")}${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")}${addAttribute(`${inputClass} resize-none`, "class")}></textarea>` : renderTemplate`<input${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(type, "type")}${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")}${addAttribute(inputClass, "class")}>`} </div>`;
}, "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/components/FormInput.astro", void 0);

export { $$FormInput as $ };
