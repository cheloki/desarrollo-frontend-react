import React from 'react'
import { Link } from "react-router";
import '../../App.css';
import { useState } from "react";
import useForm from "../Hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../store/Form/FormSlice.js";
import ModalInfo from "../Modals/Modalinfo";
const Navigator = () => {
    const formData = useSelector((state) => state.form.LoginForm);

    // const val_login = useSelector((state)=>state.form.isLoggedIn);
    const [showModal, setShowModal] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.form);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        console.log('datos del formulario', formData);
    };
    const onCloseModalInfo = () => {
        setShowModal(false);
    };

    const handleClick = () => {
        setShowModal(true);
    };
    return (

        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/counter" className="nav-link">Counter</Link>
            <Link to="/think" className="nav-link">Think</Link>
            <Link to="/products" className="nav-link">Product</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/login" className="nav-link">Login</Link>

            {isLoggedIn ? (
                <div>
                    <a>Bienvenido, {formData.usuario} | {formData.email}</a>
                    <button onClick={handleClick}>Logout</button>
                </div>
            ) : (
                <div>

                </div>
            )}
            <ModalInfo
                visible={showModal}
                message={'¿ '+formData.usuario+', Estas seguro de que quieres cerrar sesión? !!! ' }
                onClose={onCloseModalInfo}
            />
        </nav>

    );
}

export default Navigator;