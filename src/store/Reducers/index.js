import { combineReducers,createStore } from "redux";
import TempReducer from "./TempReducer";

const reducers = combineReducers({
  datas: TempReducer,
});

export const store = createStore(
  reducers,
  {
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default reducers;