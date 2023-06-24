import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { todoDeletionCheck, thunk } from "./middleware";
import rootReducer from "./rootReducer";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, todoDeletionCheck)
);

export { store };
