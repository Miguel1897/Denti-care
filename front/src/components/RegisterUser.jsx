import { useState } from "react";
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

const RegisterUser = ({ show, handleClose }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', {
                firstName,
                lastName,
                email,
                password,
                role: "paciente" // rol por defecto
            });
            Swal.fire({
                icon: 'success',
                title: '¡Registrado!',
                text: 'Tu cuenta de paciente ha sido creada.',
            });
            handleClose();
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: err.response?.data?.message || 'Hubo un error',
            });
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Registrar Paciente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" value={firstName} onChange={e => setFirstName(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" value={lastName} onChange={e => setLastName(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                        <Button type="submit">Registrar</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default RegisterUser;
