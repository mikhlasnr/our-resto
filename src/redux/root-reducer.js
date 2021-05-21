import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // get local storage

//create persist config
// its persist with local storage so when refresh the data won't disappeared
// in this case we persist cart reducer
const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({});

export default persistReducer(persistConfig, rootReducer);
