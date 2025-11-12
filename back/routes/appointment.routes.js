import express from "express";
import * as appointmentsController from "../controllers/appointment.controller.js";

const router = express.Router();

// ✅ Obtener todas las citas
router.get("/", appointmentsController.getAppointments);

// ✅ Obtener cita por teléfono (antes que :id)
router.get("/phone/:phone", appointmentsController.getAppointmentByPhone);

// ✅ Obtener citas por fecha (antes que :id)
router.get("/check-date/:date", appointmentsController.getAppointmentsByDate);

// ✅ Obtener cita por ID (se deja al final de los GET específicos)
router.get("/:id", appointmentsController.getAppointmentById);

// ✅ Crear una cita
router.post("/", appointmentsController.createAppointment);

// ✅ Actualizar cita por ID
router.put("/:id", appointmentsController.updateAppointment);

// ✅ Cancelar cita por teléfono (colocar antes que :id/status)
router.put("/phone/:phone", appointmentsController.cancelAppointmentByNumber);

// ✅ Actualizar estado de la cita
router.put("/:id/status", appointmentsController.updateStatusAppointment);

// ✅ Eliminar cita por ID
router.delete("/:id", appointmentsController.deleteAppointment);

export default router;
