import { updateStore } from "../store/updateStore";

const TodoList = (state) => {
  const handleClick = () => {
    const text = document.querySelector("div#todoList #newTodo").value;

    const newTodo = {
      id: state.todos.length + 1,
      text,
      completed: false,
    };
    
    updateStore(state, { todos: [...state.todos, newTodo] });
  };

  const addEventListeners = () => {
    const addButtonEventListener = () => document.querySelector("div#todoList button").addEventListener("click", handleClick);

    return { addButtonEventListener };
  };

  const render = () => {
    return `
      <div id="todoList">
        <ul>
            ${state.todos.map((todo) => JSON.stringify(todo))}
        </ul>
        <input type="text" id="newTodo" value="go grocery shopping">
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
