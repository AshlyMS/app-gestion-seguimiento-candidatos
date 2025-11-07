import Login from "../pages/auth/Login";
import Registro from "../pages/auth/Registro";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";
import RutaProtegida from "../components/RutaProtegida";
import Candidatos from "../pages/candidatos/Candidatos";
import Postulaciones from "../pages/postulaciones/Postulaciones";
import Vacantes from "../pages/vacantes/Vacantes";

export let RouterApp = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/dashboard",
    element: <RutaProtegida componente={<Dashboard />} />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/candidatos",
    element: <RutaProtegida componente={<Candidatos/>} />,
  },
  {
    path: "/postulaciones",
    element: <RutaProtegida componente={<Postulaciones/>} />,
  },
  {
    path: "/vacantes",
    element: <RutaProtegida componente={<Vacantes/>} />,
  }
];
