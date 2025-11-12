import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/HeaderStyles.css";
import LogoDiente from "../assets/img/LogoDiente.png";

const Header = () => {
  return (
    <header className="admin-header">
      <Container fluid className="py-5">
        <Row className="align-items-center">
          
          {/* Imagen o Logo */}
          <Col md={4} sm={12} className="text-center text-md-start mb-4 mb-md-0">
            <img 
              src={LogoDiente} 
              alt="Logo Smile Clinic" 
              className="header-logo"
              style={{ width: "200px" }}
            />
          </Col>

          {/* Título y botones */}
          <Col md={8} sm={12} className="text-center text-md-start">
            <h1 className="admin-title mb-4">
              Panel de Administración
            </h1>
            <p className="admin-subtitle mb-4">
              Accede rápidamente a la gestión de turnos, usuarios y servicios
            </p>
            
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-md-start">
              <Button as={Link} to="/turnos" className="btn-admin">
                Administrar turnos
              </Button>
              <Button as={Link} to="/contactos" className="btn-admin">
                Mensajes de contacto
              </Button>
              <Button as={Link} to="/servicios" className="btn-admin">
                Ver servicios
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
