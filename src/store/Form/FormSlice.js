import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // aca se define todas las variables globales del componente Counter.jsx
    isEstado: 'False',

    LoginForm: {
        modulo: 'React Mod7',
        email: '',
        usuario: '',
        password: 'mod7USIP-MARCELO'

    },
    loginStatus: null,
    isLoggedIn: false,
    isModalVisible: false,
    isVisibleIn: false,
    //... otros estados globales del componente.jsx, como por ejemplo, el estado del modal.jsx
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFormData: (state, action) => {
            const { name, value } = action.payload;
            state.LoginForm[name] = value;
        },
        setLoginStatus: (state, action) => {
            state.loginStatus = action.payload;
            state.isModalVisible = true;
        },
        hideModal: (state) => {
            state.isModalVisible = false;
        },
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.LoginForm.modulo = '';
            state.LoginForm.usuario = '';
            state.LoginForm.email = '';
            state.LoginForm.password = '';
           
        },
        visible:(state) => {
            state.isVisibleIn = true;
        },
    }
})

export const { setFormData, setLoginStatus, hideModal, login, logout,visible } = formSlice.actions;

export default formSlice.reducer