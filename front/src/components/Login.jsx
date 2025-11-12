import { useState } from "react";
import { Button, Form, Modal } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom'; 
import Swal from 'sweetalert2';

const Login = ({ show, handleClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const [loginError, setLoginError] = useState(null);
    const [redirectToDashboard, setRedirectToDashboard] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        const { success } = await login(email, password);
        if (success) {
            setRedirectToDashboard(true); 
            handleClose(); 
            Swal.fire({
                icon: 'success',
                title: '¡Bienvenido!',
                text: 'Has iniciado sesión correctamente.',
            });
        } else {
            setLoginError('Usuario o Contraseña incorrecta'); 
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Usuario o Contraseña incorrecta',
            });
        }
    };

    if (redirectToDashboard) {
        // Redirigir según rol
        const role = JSON.parse(localStorage.getItem('userRole')) || 'paciente';
        if (role === 'admin') return <Navigate to="/admin" />;
        if (role === 'dentista') return <Navigate to="/dentist" />;
        return <Navigate to="/" />; // paciente
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Iniciar Sesión</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                        <Button className="basic-btn" type="submit">Iniciar Sesión</Button>
                    </div>
                    {loginError && <div className="text-danger text-center mt-2">{loginError}</div>}
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default Login;
