import mockAPI from "../../data/mockAPI";

function receiveTodosActionCreator(todos) {
  return {
    type: "RECEIVE_TODO",
    payload: {
      todos,
    },
  };
}

function addTodoActionCreator({ id, text }) {
  return {
    type: "ADD_TODO",
    payload: {
      id,
      text,
      complete: false,
    },
  };
}

function toggleTodoActionCreator(id) {
  return {
    type: "TOGGLE_TODO",
    payload: {
      id,
    },
  };
}

function deleteTodoActionCreator(id) {
  return {
    type: "DELETE_TODO",
    payload: {
      id,
    },
  };
}

function asyncReceiveTodos() {
  return async (dispatch) => {
    const todos = await mockAPI.getTodos();
    dispatch(receiveTodosActionCreator(todos));
  };
}

function asyncAddTodo(text) {
  return async (dispatch) => {
    const { id } = await mockAPI.addTodo(text);
    dispatch(addTodoActionCreator({ id, text }));
  };
}

function asyncDeleteTodo(id) {
  return async (dispatch) => {
    await mockAPI.deleteTodo(id);
    dispatch(deleteTodoActionCreator(id));
  };
}

function asyncToggleTodo(id) {
  return async (dispatch) => {
    await mockAPI.toggleTodo(id);
    dispatch(toggleTodoActionCreator(id));
  };
}

export {
  receiveTodosActionCreator,
  addTodoActionCreator,
  toggleTodoActionCreator,
  deleteTodoActionCreator,
  asyncReceiveTodos,
  asyncAddTodo,
  asyncDeleteTodo,
  asyncToggleTodo,
};
