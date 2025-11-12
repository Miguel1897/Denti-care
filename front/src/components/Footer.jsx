// src/components/Footer.jsx
import { Container, Row, Col } from "react-bootstrap";
import Icons from "./Icons";
import LogoDiente from "../assets/img/logo.png";
import "../assets/css/FooterStyles.css";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1C7C82", color: "white", padding: "0.8rem 0" }}>
      <Container>
        <Row className="align-items-center">
          {/* Logo a la izquierda */}
          <Col xs={12} md={4} className="d-flex justify-content-start mb-2 mb-md-0">
            <img src={LogoDiente} alt="Logo Diente" style={{ width: "50px" }} />
          </Col>

          {/* Iconos centrados */}
          <Col xs={12} md={4} className="d-flex justify-content-center mb-2 mb-md-0">
            <Icons />
          </Col>

          {/* Derechos de autor a la derecha */}
          <Col xs={12} md={4} className="d-flex justify-content-end">
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.8)" }}>
              © {new Date().getFullYear()} Smile Clinic
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
