import { motion } from "motion/react"
import useForm from "../Hooks/useForm.js";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../store/Form/FormSlice.js";
// eslint-disable-next-line react/prop-types
const ModalInfo = ({ visible, message, onClose }) => {
    const dispatch = useDispatch();
    const initialState ={modulo:"", usuario:"", email:"",password:""};
    const {formData,resetForm} = useForm(initialState);
    const onLogout = () => {
        resetForm();
        dispatch(logout());
        console.log('datos del formulario', formData);
        onClose();
    };

    if (!visible) {
        return null;
    }
return (
        <div className="modal-overlay">
            <motion.div
                className="notification-info"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <div>
                    <p>{message}</p>
                    <button onClick={onLogout}>Presionar para salir </button>
                </div>
                <button
                    className="close-btn-success"
                    onClick={onClose}>
                    X
</button>
            </motion.div>
        </div>
    );
};

export default ModalInfo;