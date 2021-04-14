import { updateStore } from "../store/updateStore";
import { Todo } from "../components/todo";

const TodoList = (state) => {
  const handleClick = () => {
    const text = document.querySelector("div#todoList #newTodo").value;

    const newTodo = {
      id: state.todos.length + 1,
      text,
      completed: false,
      editing: false,
    };

    updateStore(state, { todos: [...state.todos, newTodo] });
  };

  const addEventListeners = () => {
    const addButtonEventListener = () =>
      document.querySelector("div#todoList #addTodo").addEventListener("click", handleClick);

    return { addButtonEventListener };
  };

  const render = () => {
    return `
      <div id="todoList">
        <ul>
            ${state.todos
              .map((todo) => Todo(todo).render())
              .toString()
              .replaceAll(",", "")}
        </ul>
        <input type="text" id="newTodo" value="">
        <button id="addTodo">Add Todo</button>
      </div>
   `;
  };

  return {
    render,
    addEventListeners,
  };
};

export { TodoList };
