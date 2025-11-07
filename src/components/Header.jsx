import { Link, useNavigate } from "react-router-dom";
import { consultarLocalStorage, limpiarLocalStorage } from "../helpers/funciones"; 
import "./Header.css";
import { alertaRedireccion } from "../helpers/alertas";

const Header = () => {
  let redireccion = useNavigate();
  let usuario = consultarLocalStorage("usuario");
  let iniciales = usuario.nombre.
  split(" ").
  map((palabra)=>palabra[0]).
  join("")
  console.log(iniciales);

  function cerrarSesion(){
    limpiarLocalStorage("usuario");
    limpiarLocalStorage("token");
    alertaRedireccion("Sesión Cerrada", "info", "/login", redireccion);
  }
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <div className="logo-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="28"
                height="28"
                rx="6"
                fill="currentColor"
              />
              <path
                d="M16 9L22 15L16 21M10 15H22"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-title">TalentTrack</span>
            <span className="logo-subtitle">Sistema de Gestión</span>
          </div>
        </div>

        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="" className="nav-link">
                <svg
                  className="nav-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M3 9L10 2L17 9V17C17 17.5304 16.7893 18.0391 16.4142 18.4142C16.0391 18.7893 15.5304 19 15 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V9Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link">
                <svg
                  className="nav-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M14 2H6C4.89543 2 4 2.89543 4 4V18C4 19.1046 4.89543 20 6 20H14C15.1046 20 16 19.1046 16 18V4C16 2.89543 15.1046 2 14 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 6H12M8 10H12M8 14H10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Vacantes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link">
                <svg
                  className="nav-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M16 17V15C16 13.9391 15.5786 12.9217 14.8284 12.1716C14.0783 11.4214 13.0609 11 12 11H6C4.93913 11 3.92172 11.4214 3.17157 12.1716C2.42143 12.9217 2 13.9391 2 15V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 7C10.6569 7 12 5.65685 12 4C12 2.34315 10.6569 1 9 1C7.34315 1 6 2.34315 6 4C6 5.65685 7.34315 7 9 7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Candidatos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link">
                <svg
                  className="nav-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M14 2H6C4.89543 2 4 2.89543 4 4V18C4 19.1046 4.89543 20 6 20H14C15.1046 20 16 19.1046 16 18V4C16 2.89543 15.1046 2 14 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8L8 12L12 8ZM8 8L12 12L8 8Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="10"
                    cy="10"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                Postulaciones
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-user">
          <div className="user-profile">
            <div className="user-avatar">
              <p>{iniciales}</p>
            </div>
            <div className="user-info">
              <span className="user-name">{usuario.nombre}</span>
              <span className="user-role">{usuario.rol}</span>
            </div>
            <svg
              className="dropdown-icon"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <button onClick={cerrarSesion} className="nav-link">Cerrar Sesión</button>
      </div>
    </header>
  );
};

export default Header;
