import express from 'express';
import * as servicesController from '../controllers/service.controller.js';

const router = express.Router();

// Crear servicio
router.post('/', servicesController.createService);

// Obtener todos los servicios
router.get('/', servicesController.getServices);

// Obtener servicio por ID
router.get('/:id', servicesController.getServiceById);

// Actualizar servicio
router.put('/:id', servicesController.updateService);

// Eliminar servicio
router.delete('/:id', servicesController.deleteService);

export default router;
