function todoDeletionCheck(store) {
  return (next) => (action) => {
    if (action.type === "DELETE_TODO") {
      const { todos } = store.getState();
      const todosTobeDeleted = todos.find(
        (todo) => todo.id === action.payload.id
      );

      if (!todosTobeDeleted.complete) {
        alert("Tidak bisa menghapus to-do yang belum selesai.");
        return;
      }
    }

    return next(action);
  };
}

function thunk(store) {
  return (next) => (action) => {
    if (typeof action === "function") {
      return action(store.dispatch, store.getState);
    }

    return next(action);
  };
}

export { todoDeletionCheck, thunk };
