import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../../reducers";

export default function configureStore(initialState) {
  function _getMiddleware() {
    const middleware = [];

    return applyMiddleware(...middleware);
  }
  const composeEnhancers =
    typeof window === "object" &&
    process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const store = composeEnhancers(_getMiddleware())(createStore)(
    rootReducer,
    initialState
  );

  if (module.hot) {
    module.hot.accept(rootReducer, () => {
      store.replaceReducer(rootReducer.default);
    });
  }

  return store;
}
