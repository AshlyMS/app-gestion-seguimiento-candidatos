import Login from "../pages/auth/Login";
import Registro from "../pages/auth/Registro";
import Dashboard from "../pages/dashboard/Dashboard";

export let RouterApp = [
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/registro',
        element: <Registro />,
    },
    {
        path: '/Dashboard',
        element: <Dashboard />,
    },
];
