import { render } from "./src/lib/render";
import { store } from "./src/store/store";

const root = document.getElementById("root");

window.addEventListener("load", () => {
  render(root, store);
});
