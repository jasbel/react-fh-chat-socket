/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./states/auth/AuthContext";

const Providers = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
