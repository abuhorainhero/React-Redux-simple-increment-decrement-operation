import { createStore } from "redux";
import valueReducer from "../Reducers/valueReducer";

const Store = createStore(valueReducer);

export default Store;
