import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "./models/user.model.js";
import dotenv from "dotenv";

dotenv.config();

async function createUsers() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Conectado a la base de datos");

    // Limpiar usuarios repetidos (opcional)
    // await User.deleteMany({});

    const users = [
      {
        firstName: "Admin",
        lastName: "General",
        email: "admin@denti.com",
        password: await bcrypt.hash("admin123", 10),
        role: "admin",
      },
      {
        firstName: "Laura",
        lastName: "Dentista",
        email: "dentista@denti.com",
        password: await bcrypt.hash("dentista123", 10),
        role: "dentista",
      },
      {
        firstName: "Juan",
        lastName: "Paciente",
        email: "paciente@denti.com",
        password: await bcrypt.hash("paciente123", 10),
        role: "paciente",
      },
    ];

    await User.insertMany(users);
    console.log("🎉 Usuarios creados con éxito");
    process.exit();
  } catch (error) {
    console.error("❌ Error creando usuarios:", error);
    process.exit(1);
  }
}

createUsers();
