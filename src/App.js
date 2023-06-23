import { createStore } from "./Redux";

function App() {
  return <div className="App"></div>;
}

export default App;

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

function todosReducer(todos = [], action = {}) {
  if (action.type === "ADD_TODO") {
    return [...todos, action.payload];
  }

  if (action.type === "DELETE_TODO") {
    return todos.filter((todo) => todo.id !== action.payload.id);
  }

  if (action.type === "TOGGLE_TODO") {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, complete: !todo.complete };
      }

      return todo;
    });
  }

  return todos;
}

function addGoalActionCreator({ id, text }) {
  return {
    type: "ADD_GOAL",
    payload: {
      id,
      text,
    },
  };
}

function deleteGoalActionCreator(id) {
  return {
    type: "DELETE_GOAL",
    payload: {
      id,
    },
  };
}

function goalsReducer(goals = [], action = {}) {
  if (action.type === "ADD_GOAL") {
    return [...goals, action.payload];
  }

  if (action.type === "DELETE_GOAL") {
    return goals.filter((goal) => goal.id !== action.payload.id);
  }

  return goals;
}

function rootReducer(state = {}, action = {}) {
  return {
    todos: todosReducer(state.todos, action),
    goals: goalsReducer(state.goals, action),
  };
}

// 2. Consume state
const store = createStore(rootReducer);

// 4. subscribe state changed
store.subscribe(() => {
  console.log("state changed!", store.getState());
});

store.dispatch(
  addTodoActionCreator({
    id: 1,
    text: "Learn React",
  })
);

store.dispatch(
  addTodoActionCreator({
    id: 2,
    text: "Learn Redux",
  })
);

store.dispatch(
  addTodoActionCreator({
    id: 3,
    text: "Learn JavaScript",
  })
);

store.dispatch(toggleTodoActionCreator(2));
store.dispatch(deleteTodoActionCreator(3));

store.dispatch(
  addGoalActionCreator({
    id: 1,
    text: "Get a Doctorate",
  })
);

store.dispatch(
  addGoalActionCreator({
    id: 2,
    text: "Be an Entrepreneur",
  })
);

store.dispatch(deleteGoalActionCreator(1));

// 2. Get state
store.getState();

// 3. Subscribe state changed
const unsubscribe = store.subscribe(() => {
  console.log("state berubah");
  console.log("merender ulang UI");
});

unsubscribe();
