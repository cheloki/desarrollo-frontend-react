import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice.js'
import productReducer from './features/counter/ProductSlice.js'
//import  userReducer from './features/user/userSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    //user: userReducer
  },
})

export default store;