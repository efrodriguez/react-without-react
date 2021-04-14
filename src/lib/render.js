import { App } from "../app";
import { TodoList } from "../components/todoList";
import { Todo } from "../components/todo";

const render = (root, state) => {
  root.innerHTML = App(state).render();

  TodoList(state).addEventListeners().addButtonEventListener();

  Todo(state).addEventListeners().addCompletedButtonEventListener();
  Todo(state).addEventListeners().addEditButtonEventListener();
  Todo(state).addEventListeners().addSaveButtonEventListener();
  Todo(state).addEventListeners().addDeleteButtonEventListener();
};

export { render };
