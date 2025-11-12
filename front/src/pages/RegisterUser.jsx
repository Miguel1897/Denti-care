import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const RegisterUser = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", formData, { 
        withCredentials: true 
      });

      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Tu cuenta ha sido creada correctamente",
      });

      navigate("/login");

    } catch (error) {
      console.log(error.response?.data);

      Swal.fire({
        icon: "error",
        title: "Error al registrarse",
        text: error.response?.data?.message || "Intenta nuevamente",
      });
    }
  };

  return (
    <section className="d-flex justify-content-center mt-5">
      <div className="p-4 shadow rounded" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Crear Cuenta</h3>

        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button type="submit" className="basic-btn">
              Registrarse
            </Button>
          </div>

          <div className="text-center mt-3">
            <Button variant="link" onClick={() => navigate("/login")}>
              ¿Ya tienes cuenta? Iniciar Sesión
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default RegisterUser;
