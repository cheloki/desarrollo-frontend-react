import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from "motion/react";
import useForm from "../Hooks/useForm";
import ModalInfo from "../Modals/Modalinfo";
import { useState } from "react";
import { setFormData, setLoginStatus, hideModal, login } from "../../store/Form/FormSlice";
import SuccessModal from '../Modals/ModalSuccess.jsx';
import ErrorModal from '../Modals/ModalError.jsx';
// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({ titleForm }) => {

   // const val_estado = useSelector((state) => state.form.isEstado);
    const [showModal, setShowModal] = useState(false);
    const [showModalError, setShowModalError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    //   const formData = useSelector((state) => state.form.loginForm);

    const formData = useSelector((state) => state.form.LoginForm);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setFormData({ name, value }));
    };


    /*const { formData, handleChange } = useForm({
        username: '',
        email: ''
    });
    */
    const handleLogin = (event) => {
        event.preventDefault();
        // Lógica ficticia para la autenticación
        const isAuthenticated = formData.password === 'mod7USIP-MARCELO';
        if (isAuthenticated) {
            dispatch(setLoginStatus('success'));
            dispatch(login());
            setShowModal(true);
            console.log('datos del formulario', formData);
        } else {
            dispatch(setLoginStatus('error'));
            setShowModalError(true);
        }
    };
    const closeModal = () => {
        dispatch(hideModal());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
        console.log('datos del formulario', formData);
    };
    const onCloseModalInfo = () => {
        setShowModal(false);
    };

    const onCloseModalError = () => {
        setShowModalError(false);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <SuccessModal
                visible={showModal}
                message={'Bienvenido !!! ' + formData.usuario}
                onClose={onCloseModalInfo}
            />
            <ErrorModal
                visible={showModalError}
                message={'Username/Password incorrectos !!! '}
                onClose={onCloseModalError}
            />

            <form onSubmit={handleLogin}>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3>{titleForm}</h3>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Modulo:
                            <input
                                type="text"
                                name="modulo"
                                //disabled={val_estado}
                                value={formData.modulo}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Username:
                            <input
                                type="text"
                                name="usuario"
                                value={formData.usuario}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Password:
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <button type="button" onClick={handleTogglePasswordVisibility}> {showPassword ? 'Hide' : 'Show'}</button>

                    </div>
                </motion.div>
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <button type="submit">Enviar</button>
                </motion.div>

            </form>

        </motion.div>


    );
};
export default FormWithMotionAndHook;