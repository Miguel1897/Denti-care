// HomeDentist.jsx
import { useState, useEffect } from "react";
import axios from "axios";

const HomeDentist = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/appointments", { withCredentials: true });
        setAppointments(res.data);
      } catch (err) {
        console.error("Error fetching appointments:", err);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Bienvenido Dentista</h2>
      <h4>Turnos asignados</h4>
      {appointments.length === 0 ? (
        <p>No hay turnos por ahora.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Teléfono</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr key={a._id}>
                <td>{a.name}</td>
                <td>{a.phone}</td>
                <td>{a.date}</td>
                <td>{a.time}</td>
                <td>{a.status || "Pendiente"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HomeDentist;
