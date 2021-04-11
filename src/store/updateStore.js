import { render } from "../lib/render";

const updateStore = (store, newState) => {
  console.log("here");
  store = Object.assign(store, newState);
  render(root, store);
};

export { updateStore };
