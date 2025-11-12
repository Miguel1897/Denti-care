// src/components/NavMenu.jsx
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import LogoDiente from "../assets/img/LogoDiente.png";

const NavMenu = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (!user) return null;

  // Paciente
  if (user.role === "paciente") {
    return (
      <Navbar expand="lg" sticky="top" style={{ backgroundColor: "#88b5bf" }}>
        <Container>
          <Navbar.Brand as={Link} to="/inicio" className="d-flex align-items-center">
            <img src={LogoDiente} alt="Logo" className="me-2" style={{ width: "40px" }} />
            Smile Clinic
          </Navbar.Brand>

          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#sobre-nosotros">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            <Nav.Link href="#agenda-turno">Agenda tu turno</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Button variant="light" onClick={handleLogout} className="ms-2">
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>
    );
  }

  // Dentista
  if (user.role === "dentista") {
    return (
      <Navbar expand="lg" sticky="top" style={{ backgroundColor: "#88b5bf" }}>
        <Container>
          <Navbar.Brand as={Link} to="/dentist" className="d-flex align-items-center">
            <img src={LogoDiente} alt="Logo" className="me-2" style={{ width: "40px" }} />
            Smile Clinic
          </Navbar.Brand>
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/dentist">Mis Turnos</Nav.Link>
            <Button variant="light" onClick={handleLogout} className="ms-2">Logout</Button>
          </Nav>
        </Container>
      </Navbar>
    );
  }

  // Admin
  if (user.role === "admin") {
    return (
      <Navbar expand="lg" sticky="top" style={{ backgroundColor: "#88b5bf" }}>
        <Container>
          <Navbar.Brand as={Link} to="/admin" className="d-flex align-items-center">
            <img src={LogoDiente} alt="Logo" className="me-2" style={{ width: "40px" }} />
            Smile Clinic
          </Navbar.Brand>
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/admin/usuarios">Usuarios</Nav.Link>
            <Nav.Link as={Link} to="/admin/turnos">Turnos</Nav.Link>
            <Button variant="light" onClick={handleLogout} className="ms-2">Logout</Button>
          </Nav>
        </Container>
      </Navbar>
    );
  }

  return null;
};

export default NavMenu;
