import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Toast from './components/Toast';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import HRPlanning from './pages/HRPlanning';
import HRDPractices from './pages/HRDPractices';
import Achievements from './pages/Achievements';
import GapAnalysis from './pages/GapAnalysis';
import About from './pages/About';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toast />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/hr-planning" element={<HRPlanning />} />
            <Route path="/hrd-practices" element={<HRDPractices />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route
              path="/gap-analysis"
              element={
                <ProtectedRoute adminOnly>
                  <GapAnalysis />
                </ProtectedRoute>
              }
            />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
