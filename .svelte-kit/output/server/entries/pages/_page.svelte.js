import { m as spread_attributes, o as stringify, f as pop, p as push } from "../../chunks/index.js";
const getRelativeMouse = (n, range = { min: 0, max: 1 }) => {
  const mouse = { x: 0, y: 0, isInside: false };
  return mouse;
};
function Card($$payload, $$props) {
  push();
  const { class: classes = void 0, children, ...rest } = $$props;
  let container = void 0;
  let animationDone = false;
  let mouse = getRelativeMouse(() => container, { min: -1, max: 1 });
  $$payload.out += `<div class="fly-in bg-shadows border-rd-xl svelte-oxwq4z"><div${spread_attributes(
    {
      class: `min-h-25 text-3 border-rd-xl ${stringify(classes)}`,
      style: `transform: perspective(3000px) rotateX(${stringify(-20 * mouse.y)}deg) rotateY(${stringify(10 * mouse.x)}deg) ${stringify("")};`,
      "hover-shadow": "xl opacity-20",
      ...rest
    },
    {
      "svelte-oxwq4z": true,
      "fly-in-delayed": !animationDone
    },
    { opacity: "0" }
  )}>`;
  children?.($$payload);
  $$payload.out += `<!----></div></div>`;
  pop();
}
function _page($$payload) {
  $$payload.out += `<main p-4="" max-w-65ch="" m-auto="" class="svelte-1750poq"><div flex="" justify-between="" items-start="" m-b-6="" class="svelte-1750poq"><h1 class="slide-prime-left text-tcolor text-6 fw-bold font-display inline-block pos-relative svelte-1750poq" underline="~ wavy 2 primary offset-4">Milad Sedhom</h1> <div class="slide-prime-right svelte-1750poq"><a href="http://x.com/winter1v9" target="_blank" aria-label="Go to my twitter profile" class="group inline-block border-rd-50% p-2 line-height-1 pos-relative svelte-1750poq"><div class="rotate w-36px h-36px border-rd-50% pos-absolute top-0 left-0 hidden svelte-1750poq" group-hover="block" outline="dotted 3 primary offset--2"></div> <div class="i-ri-twitter-x-fill?mask bg-tcolor text-5 svelte-1750poq"></div></a> <a href="http://github.com/MiladSedhom" target="_blank" aria-label="Go to my github profile" class="group inline-block border-rd-50% p-2 line-height-1 pos-relative svelte-1750poq"><div class="rotate w-36px h-36px border-rd-50% pos-absolute top-0 left-0 hidden svelte-1750poq" group-hover="block" outline="dotted 3 primary offset--2"></div> <div class="i-logos-github-icon?mask bg-tcolor text-5 svelte-1750poq"></div></a></div></div> <p text-tcolor-1="" class="svelte-1750poq">Hi there! I'm a nerd... umm I mean a fullstack web developer. I enjoy crafting beautiful user
		interfaces and memorable digital experiences. With a foundation in Computer Science and Physics,
		I combine technical expertise with creative innovation to build engaging web solutions.</p> <div p-5="" class="svelte-1750poq"></div> <h2 class="text-4 fw-bold m-b-4 font-display svelte-1750poq">Recent Projects</h2> <section flex="~ col gap-6" class="svelte-1750poq">`;
  Card($$payload, {
    class: "border-dashed border-3 border-green-600 bg-bgcolor",
    children: ($$payload2) => {
      $$payload2.out += `<div class="block min-h-full p-4 svelte-1750poq"><div flex="" justify-between="" class="svelte-1750poq"><a href="https://github.com/MiladSedhom/PennyPal" target="_blank" aria-label="View this project on github" class="fw-bold text-5 font-display svelte-1750poq"><span inline-flex="" items-center="" class="svelte-1750poq">PennyPal <div class="i-ri-arrow-right-up-line bg-tcolor-1 text-4 svelte-1750poq"></div></span></a> <div p-2="" class="svelte-1750poq"><div class="i-logos-svelte-icon text-5 svelte-1750poq"></div> <div class="i-logos-prisma text-5 svelte-1750poq"></div> <div class="i-logos-supabase-icon?mask bg-#288e5c text-5 svelte-1750poq"></div></div></div> <p text-14px="" class="svelte-1750poq">a modern and intuitive expenses tracker</p></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Card($$payload, {
    class: "border-dashed border-3 border-#219C84 bg-bgcolor",
    children: ($$payload2) => {
      $$payload2.out += `<div class="block min-h-full p-4 svelte-1750poq"><div flex="" justify-between="" class="svelte-1750poq"><a href="https://github.com/MiladSedhom/grad-project" target="_blank" aria-label="View this project on github" class="fw-bold text-5 font-display svelte-1750poq"><span inline-flex="" items-center="" class="svelte-1750poq">Science Talk <div class="i-ri-arrow-right-up-line bg-tcolor-1 text-4 svelte-1750poq"></div></span></a> <div p-2="" class="svelte-1750poq"><div class="i-logos-svelte-icon text-5 svelte-1750poq"></div> <div class="i-logos-prisma text-5 svelte-1750poq"></div> <div class="i-logos-supabase-icon?mask bg-#288e5c text-5 svelte-1750poq"></div></div></div> <p text-14px="" class="svelte-1750poq">Social media application for students and students only.</p> <p text-3="" class="svelte-1750poq">Was made by a team of 2 as a graduation project for Department of Physics and Computer
					Science, Faculty of Science, Ain Shams university</p></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></section></main>`;
}
export {
  _page as default
};
