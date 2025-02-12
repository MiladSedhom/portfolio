import { h as slot } from "../../chunks/index.js";
function default_slot($$props) {
  var children = $$props.$$slots?.default;
  if (children === true) {
    return $$props.children;
  } else {
    return children;
  }
}
function _layout($$payload, $$props) {
  $$payload.out += `<div class="min-h-screen min-w-screen font-sans color-tcolor bg-bgcolor"><header class="h-16 p-4"></header> <!---->`;
  slot($$payload, default_slot($$props), {});
  $$payload.out += `<!----></div>`;
}
export {
  _layout as default
};
