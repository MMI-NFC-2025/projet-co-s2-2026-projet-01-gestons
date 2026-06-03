import { c as createComponent } from './astro-component_DhNIOW7e.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './ssr-function_D9hfZRez.mjs';
import { $ as $$Layout } from './Layout_J5fQyMPZ.mjs';
import { $ as $$Image } from './_astro_assets_CUFJTO_p.mjs';
import PocketBase from 'pocketbase';

const gameImage1 = new Proxy({"src":"/_astro/img-home1.DNKRUgfj.avif","width":680,"height":360,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/assets/img/img-home1.avif";
							}
							
							return target[name];
						}
					});

const gameImage2 = new Proxy({"src":"/_astro/img-home2.CAFbjdXj.avif","width":680,"height":360,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/assets/img/img-home2.avif";
							}
							
							return target[name];
						}
					});

const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const streakDays = 5;
  const level = 4;
  const starsProgress = 3;
  const totalStars = 5;
  const pb = new PocketBase("https://gestons.girardin-tarby.fr");
  const records = await pb.collection("mot").getFullList({ fields: "id,mot_associe,video_mot,collectionId" });
  const today = /* @__PURE__ */ new Date();
  const seed = today.getFullYear() * 1e4 + (today.getMonth() + 1) * 100 + today.getDate();
  const motDuJour = records[seed % records.length];
  const word = motDuJour?.mot_associe ?? "Bonjour";
  const wordId = motDuJour?.id ?? "";
  const videoUrl = motDuJour?.video_mot ? `https://gestons.girardin-tarby.fr/api/files/${motDuJour.collectionId}/${motDuJour.id}/${motDuJour.video_mot}` : null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gestons! - Accueil" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-8 py-6"> <section class="flex flex-col items-center gap-3 w-full px-4"> <span class="text-8xl leading-none" role="img" aria-label="Flamme de série">🔥</span> <p class="text-center text-lg font-bold font-lato">
Série de <span class="text-(--light-green)">${streakDays}</span> jours
                !!!
</p> <p class="text-center font-lato text-base text-gray-700">
Continuez comme ça !
</p> <div class="flex items-center justify-around w-full max-w-xs rounded-full bg-(--green) px-6 py-3 border-(--pink) border-4" role="progressbar"${addAttribute(`${starsProgress} étoile${"s" } sur ${totalStars}`, "aria-label")}${addAttribute(starsProgress, "aria-valuenow")}${addAttribute(0, "aria-valuemin")}${addAttribute(totalStars, "aria-valuemax")}> ${Array.from({ length: totalStars }, (_, i) => renderTemplate`<span${addAttribute([
    "text-3xl leading-none select-none",
    i < starsProgress ? "text-white" : "text-white/25"
  ], "class:list")} aria-hidden="true">
★
</span>`)} </div> <p class="text-center text-(--light-green) font-bold font-lato text-base">
Niveau ${level} !!!
</p> </section> <hr class="border-(--light-green) mx-4"> <section class="flex flex-col items-center gap-4 w-full px-4"> <h2 class="text-center text-3xl font-gill font-black">
Le Mot du Jour !
</h2> <p class="text-center text-lg font-bold font-lato">${word}</p> <div class="w-full max-w-xs overflow-hidden rounded-2xl border-2 border-(--light-green) bg-black flex items-center justify-center" style="min-height: 180px;"> ${videoUrl ? renderTemplate`<video${addAttribute(videoUrl, "src")} autoplay playsinline muted loop class="w-full h-auto max-h-56 object-contain"${addAttribute(`Signe LSF pour ${word}`, "aria-label")}></video>` : renderTemplate`<span class="text-white/40 text-sm font-lato">
Vidéo non disponible
</span>`} </div> <a${addAttribute(`/mots/${wordId}`, "href")} class="text-(--green) underline font-lato text-sm hover:text-(--light-green) transition-colors text-center">
Accédez à la fiche du mot en cliquant ici !
</a> </section> <hr class="border-(--light-green) mx-4"> <section class="flex flex-col gap-6 w-full px-4"> <h2 class="text-center text-4xl md:text-5xl font-gill font-black uppercase tracking-tight">
APERCU DES JEUX
</h2> <div class="flex flex-col gap-3 w-full"> <p class="font-bold font-lato text-base text-gray-900 underline underline-offset-4">
Passe à l'action : signe, joue, progresse !
<span class="text-gray-400 text-sm font-bold" aria-hidden="true">→</span> </p> <a href="/training" class="block w-full rounded-2xl overflow-hidden hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--light-green)"> ${renderComponent($$result2, "Image", $$Image, { "src": gameImage1, "alt": "Jeu solo - apprendre l'alphabet en LSF", "class": "w-full h-auto object-cover border-(--pink) border-2", "widths": [400, 800], "sizes": "(max-width: 768px) 100vw, 800px" })} </a> </div> <div class="flex flex-col gap-3 w-full"> <p class="font-bold font-lato text-base text-gray-900 underline underline-offset-4">
Défie tout le monde en multijoueur : c'est ici !
<span class="text-gray-400 text-sm font-bold" aria-hidden="true">→</span> </p> <a href="/battle" class="block w-full rounded-2xl overflow-hidden hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--light-green)"> ${renderComponent($$result2, "Image", $$Image, { "src": gameImage2, "alt": "Jeu multijoueur en LSF", "class": "w-full h-auto object-cover border-(--pink) border-2", "widths": [400, 800], "sizes": "(max-width: 768px) 100vw, 800px" })} </a> </div> </section> </div> ` })}`;
}, "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/home.astro", void 0);

const $$file = "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/home.astro";
const $$url = "/home";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Home,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
