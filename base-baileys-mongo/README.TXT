🦷 Clínica Dental: Sistema de Autogestión📋 Descripción del ProyectoEste proyecto es un sistema integral de autogestión diseñado para una clínica dental, facilitando la administración interna y la interacción con los pacientes.Funcionalidades Clave:Home/Pantalla de Paciente: Página principal donde los pacientes pueden interactuar.Chatbot: Módulo de IA (servicio Bailys) para agendar turnos de forma automatizada.Mensajería Asíncrona: Opción para que los pacientes dejen un mensaje y esperen el contacto de la secretaría.CRUD Secretaría: Gestión de pacientes, visualización de mensajes y coordinación con dentistas.CRUD Dentista: Consulta de agenda, gestión de disponibilidad y seguimiento de tratamientos.🛠️ Arquitectura y TecnologíasEl sistema se compone de tres servicios principales y una base de datos:ComponenteRolTecnología PrincipalPunto de InicioFrontendInterfaz de Usuario (Pacientes, Secretarias, Dentistas)React / Framework JS (Asumido)npm startBackendAPI RESTful para la lógica de negocio y persistencia de datosNode.js / Express (Asumido)npm startBailys (Bot)Servicio de Chatbot para gestión de turnosNode.js (Contenedorizado con Docker)docker runMongoDBBase de Datos NoSQLMongoDBmongod⚙️ PrerrequisitosAsegúrate de tener instalado lo siguiente en tu entorno local:Node.js (Versión 18 o superior)npm (Gestor de paquetes de Node)MongoDB (Servidor de base de datos)Docker (Para levantar el servicio de Chatbot "Bailys")🚀 Guía de Inicio RápidoSigue estos pasos en el orden indicado para asegurar que todos los servicios se comuniquen correctamente.Paso 1: Inicializar la Base de Datos (MongoDB)Abre una nueva ventana de terminal o consola y ejecuta el comando de inicio de MongoDB.# Inicia el demonio de MongoDB. Asegúrate de que el path de datos es correcto.
mongod
Nota: La consola debe permanecer abierta y ejecutando este comando mientras la aplicación esté en uso.Paso 2: Configuración e Instalación de DependenciasNavega a los directorios de cada servicio e instala las dependencias necesarias.# Navega al directorio raíz del proyecto

# Instalar dependencias del Backend (API)
cd backend
npm install
cd ..

# Instalar dependencias del Frontend (UI)
cd frontend
npm install
cd ..

# Instalar dependencias del Bot (Bailys) - Opcional si solo se usa Docker
cd bot
npm install
cd ..
Paso 3: Arrancar el Servicio Backend (API)Abre una segunda ventana de terminal, navega al directorio del backend y ejecuta el inicio.cd backend
npm start
Nota: Verifica que el backend se conecte exitosamente a MongoDB antes de continuar.Paso 4: Arrancar el Servicio Frontend (UI)Abre una tercera ventana de terminal, navega al directorio del frontend y ejecuta el inicio.cd frontend
npm start
El frontend generalmente se abrirá automáticamente en tu navegador (ej: http://localhost:3000).Paso 5: Construir y Ejecutar el Bot "Bailys" (Docker)El servicio de chatbot está contenido en una imagen de Docker. Abre una cuarta ventana de terminal, navega al directorio del bot y sigue los pasos:1. Construir la Imagen de Docker:cd bot
docker build -t bailys-bot .
2. Ejecutar el Contenedor:Necesitarás proporcionar las variables de entorno que están definidas en el Dockerfile (RAILWAY_STATIC_URL, PUBLIC_URL, PORT). Usa un puerto local disponible (ej: 3001).docker run -d \
    --name bailys_service \
    --env RAILWAY_STATIC_URL="<URL_ESTATICA>" \
    --env PUBLIC_URL="<URL_PUBLICA_DEL_FRONTEND>" \
    -p 3001:3000 \
    bailys-bot
Nota: Reemplaza <URL_ESTATICA>, <URL_PUBLICA_DEL_FRONTEND> con los valores de configuración de tu entorno. En este ejemplo, el puerto interno (PORT del Dockerfile) se mapea al puerto local 3001.🛑 Detener los ServiciosPara apagar la aplicación, detén la ejecución en las cuatro consolas abiertas:Frontend/Backend: Presiona Ctrl + C en las respectivas consolas.MongoDB: Presiona Ctrl + C en la consola de mongod.Bailys Bot: Detén y elimina el contenedor de Docker:docker stop bailys_service
docker rm bailys_service



usuarios prueba
admin@denti.com
admin123

dentista@denti.com
dentista123

paciente@denti.com
paciente123