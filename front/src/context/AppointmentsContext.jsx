import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const AppointmentsContext = createContext();

export const useAppointments = () => useContext(AppointmentsContext);

export const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const { token } = useAuth();

  const fetchAppointments = async () => {
    if (!token) return; // Evita llamadas sin token
    try {
      const response = await axios.get("http://localhost:5000/api/appointments", {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setAppointments([]); // Evita estado undefined
    }
  };

  const deleteAppointment = async (appointmentId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/appointments/${appointmentId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );

      if (response.status === 204 || response.status === 200) {
        setAppointments((prev) =>
          prev.filter((appointment) => appointment._id !== appointmentId)
        );
      } else {
        throw new Error("Error al eliminar la cita");
      }
    } catch (error) {
      console.error("Error al eliminar la cita:", error);
    }
  };

  // Re-fetch cuando cambia el token (login/logout)
  useEffect(() => {
    fetchAppointments();
  }, [token]);

  return (
    <AppointmentsContext.Provider
      value={{ appointments, fetchAppointments, deleteAppointment }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
};
