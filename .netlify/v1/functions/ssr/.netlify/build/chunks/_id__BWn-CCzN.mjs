import { c as createComponent } from './astro-component_DhNIOW7e.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './ssr-function_D9hfZRez.mjs';
import PocketBase from 'pocketbase';
import { $ as $$Layout } from './Layout_J5fQyMPZ.mjs';
import { $ as $$BackButton } from './BackButton_DLd46BCs.mjs';
import { m as mascotte1 } from './mascotte1_FvfZysDN.mjs';

const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const pb = new PocketBase("https://gestons.girardin-tarby.fr");
  const records = await pb.collection("mot").getFullList();
  const nomToId = /* @__PURE__ */ new Map();
  records.forEach(
    (r) => nomToId.set(r.mot_associe.toLowerCase().trim(), r.id)
  );
  const record = records.find((r) => r.id === id);
  if (!record) return Astro2.redirect("/home");
  const videoUrl = record.video_mot ? `https://gestons.girardin-tarby.fr/api/files/${record.collectionId}/${record.id}/${record.video_mot}` : null;
  const motAssocie = record.mot_associe;
  const motAssocieId = nomToId.get(motAssocie.toLowerCase().trim()) ?? null;
  const mot = {
    titre: motAssocie || "erreur",
    genre: record.genre_mot || "erreur",
    instruction: record.instruction_mot || "erreur",
    niveau: record.niveau_mot || "erreur",
    videoUrl,
    motAssocieId
  };
  const lignes = mot.instruction === "erreur" ? ["erreur"] : mot.instruction.split("\n").filter(Boolean);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${mot.titre} — Gestons!` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-5 pt-6 pb-32 flex flex-col gap-6"> <!-- En-tête : titre + retour --> <div class="flex items-start justify-between gap-4"> <div class="flex flex-col gap-1 flex-1 min-w-0"> <h1 class="font-gill font-black text-5xl text-(--green) leading-tight wrap-break-word"> ${mot.titre} </h1> <p class="font-sugo text-lg text-(--light-green)"> ${mot.genre} </p> </div> ${renderComponent($$result2, "BackButton", $$BackButton, { "href": "/home", "label": "<- Retour" })} </div> <hr class="border-t-2 border-(--green)/20"> <!-- Vidéo / image --> <div class="w-full rounded-2xl bg-(--light-green) flex items-center justify-center overflow-hidden" style="min-height: 220px;"> ${mot.videoUrl ? renderTemplate`<video${addAttribute(mot.videoUrl, "src")} controls playsinline class="w-full max-h-64 object-contain rounded-2xl"${addAttribute(`Vidéo du signe LSF pour : ${mot.titre}`, "aria-label")}></video>` : renderTemplate`<img${addAttribute(mascotte1.src, "src")}${addAttribute(`Signe LSF pour : ${mot.titre}`, "alt")} class="h-52 w-auto object-contain">`} </div> <!-- Instructions --> <div class="flex flex-col gap-3"> <h2 class="font-sugo text-2xl text-(--green)">Comment signer ?</h2> ${lignes.map((ligne) => renderTemplate`<p${addAttribute(`font-lato text-sm leading-relaxed ml-6${ligne === "erreur" ? " text-red-500 italic" : ""}`, "class")}> ${ligne} </p>`)} </div> <!-- Niveau --> <div class="flex items-center gap-3 ml-6"> <span class="font-lato text-sm font-bold text-(--green)">Niveau :</span> <span${addAttribute(`font-lato text-sm font-bold px-3 py-1 rounded-full${mot.niveau === "erreur" ? " bg-red-100 text-red-500 italic" : " bg-(--pink) text-(--green)"}`, "class")}> ${mot.niveau} </span> </div> <!-- Mot associé --> ${mot.motAssocieId && mot.motAssocieId !== Astro2.params.id && renderTemplate`<a${addAttribute(`/mots/${mot.motAssocieId}`, "href")} class="font-lato text-sm underline underline-offset-4 text-(--green) inline-flex items-center gap-1 ml-6 hover:text-(--light-green) transition-colors w-fit">
Un mot souvent associé →
</a>`} <!-- Bouton entraînement --> <div class="flex justify-center mt-4"> <a href="/training" class="inline-flex items-center justify-center bg-(--green) text-white font-gill font-black text-3xl leading-tight text-center rounded-full px-10 py-6 hover:opacity-85 transition-all shadow-[0_0_24px_4px_var(--light-green)] max-w-xs w-full">
Entrainez-vous ici !
</a> </div> </section> ` })}`;
}, "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/mots/[id].astro", void 0);

const $$file = "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/mots/[id].astro";
const $$url = "/mots/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
