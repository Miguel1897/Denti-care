// src/routes/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth(); // suponiendo que tu AuthContext tiene { user }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Si allowedRoles existe, verificar si el rol del usuario está permitido
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;

