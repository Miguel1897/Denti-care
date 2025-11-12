// back/controllers/contact.controller.js
import Contact from "../models/contact.model.js";
import { updateContactAnswered } from '../services/contact.service.js';

// Enviar formulario de contacto
export const submitContactForm = async (req, res) => {
  // Extraemos los datos recibidos
  const { name, email, phone, service, message } = req.body;

  // Debug: imprimir el body recibido
  console.log('Datos recibidos en backend:', req.body);

  try {
    // Creamos un nuevo contacto
    const newContact = new Contact({
      name,
      email,
      phone,
      service,
      message,
    });

    // Guardamos en la base de datos
    const savedContact = await newContact.save();

    // Retornamos la respuesta
    res.status(201).json(savedContact);
  } catch (error) {
    console.error('Error al guardar contacto:', error);
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los formularios de contacto
export const getAllContactForms = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); // ordenados por fecha
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error al obtener contactos:', error);
    res.status(500).json({ error: error.message });
  }
};

// Actualizar estado de respuesta de un formulario
export const updateContactAnsweredStatus = async (req, res) => {
  const { id } = req.params;
  const { answered } = req.body;

  try {
    const updatedContact = await updateContactAnswered(id, answered);
    if (!updatedContact) {
      return res.status(404).json({ message: 'Contacto no encontrado' });
    }
    res.status(200).json(updatedContact);
  } catch (error) {
    console.error('Error al actualizar el estado del contacto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
