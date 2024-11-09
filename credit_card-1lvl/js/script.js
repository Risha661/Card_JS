import { el, mount, setChildren } from "https://redom.js.org/redom.es.min.js";
// import "./validate.js";

export const App = () => {
  const wrapper = el("div", { className: "wrapper" });
  const card = el("div", { className: "card" });

  mount(wrapper, card);
};
