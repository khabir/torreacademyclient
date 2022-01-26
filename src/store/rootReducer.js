import { combineReducers as _ } from '@reduxjs/toolkit';
import userReducer from './user/reducer';
import skillDetailsReducer from './skillDetails/reducer';
import userListReducer from './user-list/reducer';
import skillListReducer from './skill-list/reducer';

const rootReducer = _({
  ui: _({
    user: userReducer,
    skillDetails: skillDetailsReducer,
    userList: userListReducer,
    skillList: skillListReducer,
  }),
});

export default rootReducer;
