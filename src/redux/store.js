import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

//reducers.index해도 되는데 index는 기본 파일이라 경로만 지정하면 기본으로 index파일 import 한 역할함
let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
