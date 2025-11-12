import express from 'express';
import * as contactController from '../controllers/contact.controller.js';

const router = express.Router();

// Enviar formulario de contacto
router.post('/submit', contactController.submitContactForm);

// Obtener todos los formularios
router.get('/', contactController.getAllContactForms);

// Actualizar estado de respuesta de un formulario
router.put('/:id', contactController.updateContactAnsweredStatus);

export default router;
