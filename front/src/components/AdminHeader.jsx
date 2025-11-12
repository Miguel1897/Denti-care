// src/components/AdminHeader.jsx
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/HeaderStyles.css";

const AdminHeader = () => {
  return (
    <Container fluid className="header-container">
      <Row className="header-row">
        <Col md={4} sm={12}>
          <div className="card card-header-img"></div>
        </Col>
        <Col md={8} sm={12} className="d-flex flex-column justify-content-center align-items-center">
          <div className="card card-header-title mb-4">
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <h1 className="color-white fs-1 fw-bold">Panel de Administración</h1>
            </div>
          </div>
          <Link to="/admin/mensajes" className="btn basic-btn w-50 mb-2">Mensajes de Contacto</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminHeader;
