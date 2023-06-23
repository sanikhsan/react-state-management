function createStore(reducer) {
  /**
   * Store memiliki 4 hal
   * 1. State
   * 2. Mendapatkan state
   * 3. Men-subscribe perubahan state
   * 4. Memperbarui state
   */

  // 1. Inisiasi State
  let state;

  // 3. Inisiasi Listener
  let listeners = [];

  // 2. Mendapatkan State
  const getState = () => state;

  // 3. Men-subscribe perubahan state
  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((listenerItem) => listenerItem !== listener);
    };
  };

  // 4. Memperbarui state
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}

export { createStore };
