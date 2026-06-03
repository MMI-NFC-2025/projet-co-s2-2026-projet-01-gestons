import { c as createComponent } from './astro-component_DhNIOW7e.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './ssr-function_D9hfZRez.mjs';
import { $ as $$Layout } from './Layout_J5fQyMPZ.mjs';
import { $ as $$BackButton } from './BackButton_DLd46BCs.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const team = [
    {
      name: "Mathéo Girardin Tarby",
      role: "Responsable Design",
      bio: "Garant de l'identité visuelle de Gestons !, Mathéo supervise l'intégralité de la direction artistique. Il orchestre les évolutions graphiques de la plateforme et conçoit chaque nouvel élément visuel pour s'assurer que l'expérience utilisateur soit à la fois esthétique, intuitive et parfaitement alignée avec les valeurs d'inclusion de l'association."
    },
    {
      name: "Sacha Martin",
      role: "Responsable Développement",
      bio: "Expert technique du projet, Sacha est le maître d'œuvre de la plateforme. Il assure le développement complet et la mise en place des fonctionnalités interactives, comme le mode miroir ou les mini-jeux. Son rôle est de transformer les concepts créatifs en une solution technologique fluide, performante et accessible à tous."
    },
    {
      name: "Valentin Deroo",
      role: "Responsable Communication",
      bio: "Valentin pilote la visibilité et la viabilité du projet. Il définit la stratégie digitale, gère les budgets et coordonne les actions de communication pour faire rayonner Gestons !. Son objectif est de bâtir une communauté engagée autour de la LSF tout en garantissant une gestion rigoureuse et pérenne de la structure."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "À Propos — Gestons!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-5 pt-6 pb-32 flex flex-col gap-10"> <div class="flex justify-end"> ${renderComponent($$result2, "BackButton", $$BackButton, { "href": "/", "label": "<- Retour" })} </div> <h1 class="font-gill font-black text-6xl text-(--green) leading-tight">
À Propos de Gestons!
</h1> <div class="flex flex-col gap-1"> <h2 class="font-sugo text-3xl text-(--light-green)">
Notre Mission  :
</h2> <h3 class="font-sugo text-lg text-(--pink) mb-4">
Signer ensemble pour une société plus juste.
</h3> <p class="font-lato text-sm leading-relaxed mb-2">
Imaginez-vous dans un espace public, face à une situation
                simple, mais impossible à résoudre faute de pouvoir communiquer.
                Pour beaucoup de personnes sourdes ou malentendantes, ces micro
                obstacles transforment les interactions ordinaires en parcours
                compliqués.
</p> <p class="font-lato text-sm leading-relaxed"> <strong class="font-gill">Gestons!</strong> est né d'une idée simple
                : briser ces barrières sociales en rendant la Langue des Signes Française
                (LSF) visible, accessible et simple à pratiquer pour tous. Que vous
                soyez étudiant, proche d'une personne sourde ou simplement curieux,
                notre plateforme vous accompagne pour découvrir la LSF sans pression
                et avec une réelle dimension inclusive.
</p> </div> <div class="flex flex-col gap-1"> <h2 class="font-sugo text-3xl text-(--light-green)">
Le Concept :
</h2> <h3 class="font-sugo text-lg text-(--pink) mb-4">
L'apprentissage par le jeu
</h3> <p class="font-lato text-sm leading-relaxed mb-2">
Nous avons transformé l'acquisition du vocabulaire en une
                expérience motivante et immersive. À travers une grande variété
                de mini-jeux (quiz, défis solo ou multijoueur, histoires
                scénarisées), vous progressez pas à pas dans différents univers
                de la vie courante comme les émotions ou les déplacements
                quotidiens.
</p> <p class="font-lato text-sm leading-relaxed">
Notre nom est un verbe imaginaire inspiré de l'action de «
                gester ». Il reflète l'essence même de la LSF : une langue
                vivante construite à partir de gestes naturels et enchaînés. «
                Gestons ! », c'est une invitation à « signer ensemble », dans un
                esprit de collectif et de simplicité.
</p> </div> <div class="flex flex-col gap-6"> <div> <h2 class="font-sugo text-3xl text-(--light-green)">
L'Équipe Gestons!
</h2> <h3 class="font-sugo text-lg text-(--pink) mb-4">
Ce projet est porté par trois étudiants passionnés :
</h3> </div> ${team.map(({ name, role, bio }) => renderTemplate`<div class="flex flex-col gap-2"> <p class="font-lato font-black text-sm text-gray-900"> ${name} – ${role} </p> <p class="font-lato text-sm leading-relaxed">${bio}</p> </div>`)} </div> </section> ` })}`;
}, "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/about.astro", void 0);

const $$file = "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
