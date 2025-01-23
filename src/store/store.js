import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice.js'
import productReducer from './features/counter/ProductSlice.js'
import formReducer from './Form/FormSlice.js'
//import  userReducer from './features/user/userSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    form: formReducer
    //user: userReducer
  },
})

export default store;