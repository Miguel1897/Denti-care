import * as usersService from '../services/user.service.js';
import User from "../models/user.model.js";  // ✅ IMPORTANTE
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

// Crear token con el ID real y el rol
const createToken = (user) => {
    return jwt.sign(
        { 
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role
        },
        SECRET_KEY,
        { expiresIn: "1h" }
    );
};

// =======================
// REGISTRO DE USUARIO
// =======================
export const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password, role } = req.body;

        if (!email || !password || !firstName || !lastName) {
            return res.status(400).json({ message: "Debe completar todos los campos" });
        }

        const existingUser = await usersService.getUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: "El correo electrónico ya está registrado" });
        }

        const hashedPassword = await usersService.hashPassword(password);
        await usersService.createUser({ 
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role: role || "paciente"
        });

        res.status(201).json({ message: "Usuario registrado exitosamente" });
    } 
    catch (error) {
        console.error("Error al registrar usuario:", error);
        res.status(500).json({ message: "Error al registrar usuario", error: error.message });
    }
};

// =======================
// LOGIN
// =======================
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await usersService.getUserByEmail(email);

        if (!user) {
            return res.status(400).json({ message: "No hay una cuenta asociada a ese correo electrónico." });
        }

        const validPassword = await usersService.comparePassword(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: "Contraseña incorrecta" });
        }

        const token = createToken(user);

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,     // Cambiar a true si usás HTTPS
            sameSite: 'lax',
            maxAge: 3600000    // 1 hora
        });

        res.status(200).json({
            message: "Login exitoso",
            user: {
                id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role
            }
        });
    } 
    catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).json({ message: "Error al iniciar sesión" });
    }
};

// =======================
// LOGOUT
// =======================
export const logout = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Sesión cerrada correctamente" });
};

// =======================
// OBTENER USUARIO AUTENTICADO
// =======================
export const getUserInfo = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).json({ message: "No autenticado" });

        const decoded = jwt.verify(token, SECRET_KEY);

        const user = await User.findById(decoded.id).select("-password");
        if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

        res.status(200).json(user);
    } 
    catch (error) {
        console.error("Error al obtener la información del usuario:", error);
        res.status(401).json({ message: "Token inválido" });
    }
};

// =======================
// OBTENER TODOS LOS USUARIOS (Solo admin)
// =======================
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password"); // Sin mostrar contraseñas
        res.status(200).json(users);
    } 
    catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ message: "Error al obtener los usuarios" });
    }
};
