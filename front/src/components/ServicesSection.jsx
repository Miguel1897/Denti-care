import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const servicios = [
    {
        titulo: 'Ortodoncia',
        descripcion: 'Tratamientos para alinear los dientes y corregir problemas de mordida mediante aparatos como brackets y alineadores.',
        imagen: 'https://i.ibb.co/NSnF4tG/ortodoncia.jpg',
    },
    {
        titulo: 'Blanqueamiento dental',
        descripcion: 'Procedimientos estéticos para mejorar el color de los dientes, eliminando manchas y decoloraciones.',
        imagen: 'data:image/jpeg;base64,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',
    },
    {
        titulo: 'Implantes dentales',
        descripcion: 'Procedimientos para reemplazar dientes perdidos mediante la colocación de implantes de titanio que se integran con el hueso dental.',
        imagen: 'https://i.ibb.co/vY7qJ8g/implantes.jpg',
    }
];

const ServicesSection = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 992);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 992);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="services" className="services-section d-flex align-items-center justify-content-center flex-column">
            <h2 className="mt-2 mb-3 font-color fs-1 fw-bold text-center">Nuestros Servicios</h2>
            <p className="subtitle-service-section fw-semibold fs-4 text-center">Descubre cómo nuestros servicios pueden mejorar tu salud dental.</p>
            <div className="services-container">
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {servicios.map((servicio, index) => (
                            <Col key={index}>
                                {isLargeScreen ? (
                                    <div
                                        className="card-large"
                                        style={{
                                            backgroundImage: `url(${servicio.imagen})`,
                                        }}
                                    >
                                        <div className="card-content">
                                            <h2 className="card-title">{servicio.titulo}</h2>
                                            <p className="card-body">{servicio.descripcion}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <Card className="card-service-home">
                                        <Card.Img variant="top" src={servicio.imagen} />
                                        <Card.Body className="font-color">
                                            <Card.Title className="fw-bold">{servicio.titulo}</Card.Title>
                                            <Card.Text className="fw-medium">{servicio.descripcion}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                )}
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default ServicesSection;
