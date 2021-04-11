import { App, AppEventListeners } from "../app";

const render = (root, state) => {
  root.innerHTML = App(state);

  AppEventListeners().addButtonEventListener();
};

export { render };
