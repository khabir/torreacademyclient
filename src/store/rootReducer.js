import { combineReducers as _ } from "@reduxjs/toolkit";
import userReducer from "./user/reducer";
import skillDetailsReducer from "./skillDetails/reducer";
const rootReducer = _({
  ui: _({
    user: userReducer,
    skillDetails: skillDetailsReducer
  })
});

export default rootReducer;
