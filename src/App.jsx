/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import AppRouter from './router/AppRouter'
import { AuthProvider } from './states/auth/AuthContext'
import { SocketProvider } from './states/socket/SocketContext'

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <SocketProvider>{children}</SocketProvider>
    </AuthProvider>
  )
}

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  )
}

export default App
