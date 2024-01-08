import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices

import dataReducer from "./slices/data";

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  data: dataReducer,
});

export { rootPersistConfig, rootReducer };
