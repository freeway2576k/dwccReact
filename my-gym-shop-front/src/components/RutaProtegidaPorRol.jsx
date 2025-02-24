import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const RutaProtegidaPorRol = ({ children, rolesPermitidos }) => {
  const { isAuthenticated, rol } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!rolesPermitidos.includes(rol)) {
    return <Navigate to="/no-autorizado" />;
  }

  return children;
};

export default RutaProtegidaPorRol;
