import { Welcome } from "./components/welcome";
import { updateStore } from "./store/updateStore";

let appState = {};

const handleClick = () => {
  updateStore(appState, { user: { first_name: "efren" } });
};

const AppEventListeners = () => {
  const addButtonEventListener = () => document.querySelector("div.app button").addEventListener("click", handleClick);

  return { addButtonEventListener };
};
const App = (state) => {
  appState = state;

  return `
      <div class="app">
         <h1>${Welcome(state.user.first_name)}<h1>
         <div> I EXIST! </div>
         <button id="hello-again">hello again</button>
      </div>
   `;
};

export { App, AppEventListeners };
