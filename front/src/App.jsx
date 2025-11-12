import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Rutas
import { home, login, register } from './routes/routes.js';

// Layout
import Page from './templates/Page.jsx';

// Contextos
import { AuthProvider } from './context/AuthContext.jsx';
import { AppointmentsProvider } from './context/AppointmentsContext.jsx';

// Protecciones
import ProtectedRoute from './routes/ProtectedRoute.jsx';

// Páginas
import Home from './pages/Home.jsx';
import HomeAdmin from './pages/HomeAdmin.jsx';
import HomeDentist from './pages/HomeDentist.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterUser from './pages/RegisterUser.jsx';
import Users from './pages/Users.jsx';
import Appointments from './pages/Appointments.jsx';
import MessagesAdmin from './pages/MessagesAdmin.jsx';
import Error from './pages/Error.jsx';

function App() {
  return (
    <AuthProvider>
      <AppointmentsProvider>
        <BrowserRouter>
          <Routes>

            {/* Redirige / hacia /login */}
            <Route path="/" element={<Navigate to={login} />} />

            {/* LOGIN & REGISTER (públicos) */}
            <Route path={login} element={<LoginPage />} />
            <Route path={register} element={<RegisterUser />} />

            {/* HOME PACIENTE */}
            <Route path={home} element={
              <ProtectedRoute role="paciente">
                <Page><Home /></Page>
              </ProtectedRoute>
            } />

            {/* ADMIN */}
            <Route path="/admin" element={
              <ProtectedRoute role="admin">
                <Page><HomeAdmin /></Page>
              </ProtectedRoute>
            } />
            <Route path="/admin/usuarios" element={
              <ProtectedRoute role="admin">
                <Page><Users /></Page>
              </ProtectedRoute>
            } />
            <Route path="/admin/turnos" element={
              <ProtectedRoute role="admin">
                <Page><Appointments /></Page>
              </ProtectedRoute>
            } />
            <Route path="/admin/mensajes" element={
              <ProtectedRoute role="admin">
                <Page><MessagesAdmin /></Page>
              </ProtectedRoute>
            } />

            {/* DENTISTA */}
            <Route path="/dentist" element={
              <ProtectedRoute role="dentist">
                <Page><HomeDentist /></Page>
              </ProtectedRoute>
            } />

            {/* ERROR 404 */}
            <Route path="*" element={<Page><Error /></Page>} />

          </Routes>
        </BrowserRouter>
      </AppointmentsProvider>
    </AuthProvider>
  );
}

export default App;
