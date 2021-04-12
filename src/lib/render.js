import { App } from "../app";
import { TodoList } from "../components/todoList";

const render = (root, state) => {
  root.innerHTML = App(state).render();

  TodoList(state).addEventListeners().addButtonEventListener();
};

export { render };
