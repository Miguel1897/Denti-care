🦷 Denti-Care
Sistema de autogestión para clínicas odontológicas que integra un chatbot inteligente con una plataforma web, optimizando la gestión de turnos y la comunicación con pacientes.

📖 Descripción

Denti-Care es una solución digital orientada a clínicas dentales que permite automatizar procesos clave mediante el uso de tecnologías modernas.

El sistema está compuesto por:

🔧 Backend: API REST para gestión de lógica de negocio

💻 Frontend: Interfaz web para distintos roles

🗄️ Base de Datos: MongoDB

🤖 Chatbot: Integración con Baileys para atención automatizada vía mensajería

👥 Equipo

Thiago López

Miguel Valdez

🧑‍💻 Roles del Sistema
👨‍⚕️ Dentista

Visualización de turnos

Gestión de agenda

🧑‍💼 Secretaría

Asignación de turnos

Administración de pacientes

🧑‍🦱 Paciente

Consulta de servicios

Solicitud de turnos

Acceso al chatbot

🤖 Chatbot

Respuestas automáticas

Asistencia en reservas

Canal de comunicación directa

🏗️ Arquitectura
denti-care/
│
├── backend/                # API REST
├── frontend/               # Aplicación web
├── base-baileys-mongo/     # Chatbot con integración a MongoDB
└── README.md
⚙️ Requisitos

Antes de ejecutar el proyecto, asegurate de tener instalado:

Node.js (v16 o superior recomendado)

MongoDB

🚀 Ejecución del Proyecto

⚠️ Importante: Ejecutar cada servicio en una consola diferente.

1️⃣ Base de Datos (MongoDB)
mongod
2️⃣ Backend
cd backend
npm run dev
3️⃣ Frontend
cd frontend
npm run dev
4️⃣ Chatbot
cd base-baileys-mongo
npm start
🔗 Flujo del Sistema

El paciente interactúa desde la web o el chatbot

El sistema procesa la solicitud mediante el backend

La base de datos almacena la información

La secretaría y el dentista gestionan los turnos desde el frontend

🧪 Buenas Prácticas

Mantener MongoDB activo antes de iniciar los servicios

Ejecutar cada módulo en una terminal separada

Verificar variables de entorno en cada módulo (.env)

Revisar logs del backend ante cualquier error

📦 Tecnologías Utilizadas

Node.js

Express

MongoDB

React

Baileys

📌 Estado del Proyecto

✅ Finalizado

🎯 Objetivo

Digitalizar y optimizar la gestión de clínicas odontológicas mediante herramientas modernas, mejorando tanto la eficiencia operativa como la experiencia del paciente.

📬 Contacto

Para consultas o mejoras del proyecto, contactar a los desarrolladores.
