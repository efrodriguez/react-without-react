import { render } from "../lib/render";

const updateStore = (store, newState) => {
  store = Object.assign(store, newState);
  render(root, store);
};

export { updateStore };
