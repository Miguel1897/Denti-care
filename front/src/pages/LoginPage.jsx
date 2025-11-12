// src/pages/LoginPage.jsx
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import video from "../assets/video/video8.mp4";
import "../assets/css/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // login devuelve { success, user }
      const { success, user } = await login(email, password);

      if (success && user) {
        Swal.fire({
          icon: "success",
          title: "¡Bienvenido!",
          text: `Has iniciado sesión como ${user.role}`,
        });

        // Redirigir según rol
        if (user.role === "admin") navigate("/admin");
        else if (user.role === "dentista") navigate("/dentist");
        else navigate("/inicio"); // paciente
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Usuario o Contraseña incorrecta",
        });
      }
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo conectar con el servidor",
      });
    }
  };

  return (
    <section className="video-container d-flex justify-content-center">
      <video autoPlay loop muted playsInline src={video} preload="metadata"></video>
      <div className="login-wrap d-flex flex-column justify-content-center align-items-center">
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

          <div className="d-flex justify-content-center pt-4">
            <Button className="basic-btn" type="submit">
              Iniciar Sesión
            </Button>
          </div>

          <div className="d-flex justify-content-center pt-2">
            <Button
              variant="link"
              onClick={() => navigate("/register")}
            >
              ¿No tienes cuenta? Registrarse
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default LoginPage;

  