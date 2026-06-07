import { createContext, useContext, useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router'

interface AuthContextType {
  isAuthenticated: boolean
  login: (email: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

const VALID_EMAIL = 'dev@cdcipractice.com'
const VALID_PASSWORD = '123456'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  const login = (email: string, password: string) => {
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      setIsAuthenticated(true)
      navigate('/todos')
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
