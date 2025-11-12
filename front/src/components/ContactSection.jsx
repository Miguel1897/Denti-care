// src/components/ContactSection.jsx
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { useAuth } from "../context/AuthContext";

const ContactSection = () => {
    const { user } = useAuth(); // Usuario logueado
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/contact/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormData({ ...formData, phone: '', service: '', message: '' });
                Swal.fire({
                    icon: 'success',
                    title: 'Mensaje enviado',
                    text: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error al enviar el formulario. Intenta nuevamente.',
            });
        }
    };

    return (
        <section id="contacto" className="contact-section py-5" style={{ background: 'linear-gradient(135deg, #88b5bf, #1C7C82)', color: 'white' }}>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} md={12} className="mb-4">
                        <div className="p-4 rounded shadow" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                            <h3 className="fw-bold mb-3">¡Estamos aquí para ayudarte!</h3>
                            <p className="mb-4">Contáctanos para programar tu próxima consulta dental y resolver cualquier pregunta que puedas tener.</p>
                            
                            <div className="d-flex align-items-center mb-3">
                                <FontAwesomeIcon icon={faPhone} className="me-3" />
                                <span className="fw-semibold">+54 9 381 540-8251</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                                <span className="fw-semibold">consultoriosmilebot@gmail.com</span>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} md={12}>
                        <Form onSubmit={handleSubmit} className="p-4 rounded shadow" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                            <Form.Group controlId="formName" className="mb-3">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Ingrese su nombre"
                                    required
                                    style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white' }}
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Correo Electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Ingrese su correo electrónico"
                                    required
                                    style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white' }}
                                />
                            </Form.Group>

                            <Form.Group controlId="formPhone" className="mb-3">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Ingrese su teléfono"
                                    required
                                    style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white' }}
                                />
                            </Form.Group>

                            <Form.Group controlId="formService" className="mb-3">
                                <Form.Label>Servicio Requerido</Form.Label>
                                <Form.Select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white' }}
                                    required
                                >
                                    <option value="">Seleccione un servicio</option>
                                    <option value="Limpieza">Limpieza</option>
                                    <option value="Ortodoncia">Ortodoncia</option>
                                    <option value="Implantes">Implantes</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group controlId="formMessage" className="mb-4">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Escriba su mensaje aquí"
                                    style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white' }}
                                />
                            </Form.Group>

                            <Button type="submit" className="w-100 fw-bold" style={{
                                backgroundColor: '#1C7C82',
                                border: 'none',
                                color: 'white',
                                transition: '0.3s'
                            }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#88b5bf'}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1C7C82'}
                            >
                                Enviar Mensaje
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactSection;
