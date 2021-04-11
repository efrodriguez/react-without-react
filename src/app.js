import { Welcome } from "./components/welcome";
import { updateStore } from "./store/updateStore";

const App = (state) => {
  const handleClick = () => {
    updateStore(state, { user: { first_name: "efren" } });
  };

  const addEventListeners = () => {
    const addButtonEventListener = () => document.querySelector("div.app button").addEventListener("click", handleClick);

    return { addButtonEventListener };
  };

  const render = () => {
    return `
      <div class="app">
         <h1>${Welcome(state.user.first_name)}<h1>
         <div> I EXIST! </div>
         <button id="hello-again">hello again</button>
      </div>
   `;
  };

  return {
    render,
    addEventListeners,
  };
};

export { App };
