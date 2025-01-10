import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice.js'
//import  userReducer from './features/user/userSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    //user: userReducer
  },
})

export default store;