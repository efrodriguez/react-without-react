import { updateStore } from "../store/updateStore";

const Todo = (state) => {
  const handleCompletedClick = (event) => {
    const li = event.target.parentElement;

    const todoIndex = state.todos.findIndex((todo) => todo.id === Number.parseInt(li.id));
    const updatedTodos = Object.assign([...state.todos], {
      [todoIndex]: { ...state.todos[todoIndex], completed: !state.todos[todoIndex].completed },
    });

    updateStore(state, { todos: updatedTodos });
  };

  const handleEditClick = (event) => {
    const li = event.target.parentElement;

    const todoIndex = state.todos.findIndex((todo) => todo.id === Number.parseInt(li.id));
    const updatedTodos = Object.assign([...state.todos], {
      [todoIndex]: { ...state.todos[todoIndex], editing: true },
    });

    updateStore(state, { todos: updatedTodos });
  };

  const handleSaveClick = (event) => {
    const li = event.target.parentElement;

    const newText = li.querySelector("input").value;

    const todoIndex = state.todos.findIndex((todo) => todo.id === Number.parseInt(li.id));
    const updatedTodos = Object.assign([...state.todos], {
      [todoIndex]: { ...state.todos[todoIndex], editing: false, text: newText },
    });

    updateStore(state, { todos: updatedTodos });
  };

  const handleDeleteClick = (event) => {
    const li = event.target.parentElement;

    const updatedTodos = state.todos.filter((todo) => todo.id !== Number.parseInt(li.id));

    updateStore(state, { todos: updatedTodos });
  };

  const addEventListeners = () => {
    const addCompletedButtonEventListener = () =>
      Array.from(document.querySelectorAll("div#todoList #completed")).map((el) =>
        el.addEventListener("click", handleCompletedClick)
      );
    const addEditButtonEventListener = () =>
      Array.from(document.querySelectorAll("div#todoList #edit")).map((el) =>
        el.addEventListener("click", handleEditClick)
      );
    const addSaveButtonEventListener = () =>
      Array.from(document.querySelectorAll("div#todoList #save")).map((el) =>
        el.addEventListener("click", handleSaveClick)
      );
    const addDeleteButtonEventListener = () =>
      Array.from(document.querySelectorAll("div#todoList #delete")).map((el) =>
        el.addEventListener("click", handleDeleteClick)
      );

    return {
      addCompletedButtonEventListener,
      addEditButtonEventListener,
      addDeleteButtonEventListener,
      addSaveButtonEventListener,
    };
  };

  const render = () => {
    return `
            <li id="${state.id}" class="todo">
                ${
                  state.editing === false
                    ? `<p>${state.text} | <em>${state.completed ? "completed" : "not completed"}</em></p>`
                    : ``
                }
                ${state.editing === true ? `<input type="text" id="editTodo" value="${state.text}">` : ``}
                ${
                  state.editing === false
                    ? `<button id="completed">${state.completed ? "mark as incomplete" : "Mark as completed"}</button>`
                    : ``
                }
                ${state.editing === false ? `<button id="edit">Edit</button>` : ``}
                ${state.editing === true ? `<button id="save">Save</button>` : ``}
                ${state.editing === false ? ` <button id="delete">Delete</button>` : ``}
            </li>
        `;
  };

  return { render, addEventListeners };
};

export { Todo };
