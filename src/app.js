import "./app.css";
import { TodoList } from "./components/todoList";

const App = (state) => {
  const render = () => {
    return `
      <div class="app">
         ${TodoList(state).render()}
      </div>
   `;
  };

  return {
    render,
  };
};

export { App };
