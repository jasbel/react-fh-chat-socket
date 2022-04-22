/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import AppRouter from './router/AppRouter'
import { AuthProvider } from './states/auth/AuthContext'
import { ChatProvider } from './states/chat/ChatContext'
import { SocketProvider } from './states/socket/SocketContext'

const Providers = ({ children }) => {
  return (
    <ChatProvider>
      <AuthProvider>
        <SocketProvider>{children}</SocketProvider>
      </AuthProvider>
    </ChatProvider>
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
