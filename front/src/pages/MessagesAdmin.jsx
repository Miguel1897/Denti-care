// src/pages/MessagesAdmin.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Form } from "react-bootstrap";

const MessagesAdmin = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/contact/");
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages: ", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleAnsweredChange = async (id, checked) => {
    try {
      await axios.put(`http://localhost:5000/api/contact/${id}`, { answered: checked });
      fetchMessages();
    } catch (error) {
      console.error("Error updating message status: ", error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <section className="container mt-4">
      <h2 className="mb-4">Mensajes de Contacto</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Servicio</th>
            <th>Mensaje</th>
            <th>Contestado</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg, idx) => (
            <tr key={msg._id}>
              <td>{idx + 1}</td>
              <td>{msg.name}</td>
              <td>{msg.email}</td>
              <td>{msg.phone}</td>
              <td>{msg.service}</td>
              <td>{msg.message}</td>
              <td>
                <Form.Check
                  type="checkbox"
                  checked={msg.answered}
                  onChange={(e) => handleAnsweredChange(msg._id, e.target.checked)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default MessagesAdmin;
