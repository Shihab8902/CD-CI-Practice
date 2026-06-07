import { Routes, Route, Navigate } from 'react-router'
import { useAuth } from './context/AuthContext'
import Login from './pages/Login'
import Todos from './pages/Todos'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? <Navigate to="/todos" replace /> : <>{children}</>
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/todos" element={<ProtectedRoute><Todos /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
