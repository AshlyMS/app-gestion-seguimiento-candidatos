import { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { alertaGeneral, alertaRedireccion } from '../../helpers/alertas';
import { generarToken } from '../../helpers/funciones';

console.log(generarToken());

function Login() {
    const [usuario, setUsuario] = useState("")
    const [contrasena, setContrasena] = useState("")
    let redireccion = useNavigate()
    function iniciarSesion() {
        if (usuario== "admin" && contrasena=="123456") {
        alertaRedireccion("Inicio de sesión exitoso", "success", "/Dashboard", redireccion)
    }else{
        alertaGeneral("Error", "Usuario o contraseña incorrecta","error")
    }
}
    return (
        <div>
            <form>
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                    <div class="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <p class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Iniciar Sesión


                            </p><div>
                                <label class="block mb-2 text-sm font-medium text-gray-900">
                                    Usuario
                                </label>
                                <input placeholder="AshlyMS"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                    id="username"
                                    type="text"
                                    onChange={(e) => setUsuario(e.target.value)}
                                />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900">
                                    Contraseña
                                </label>
                                <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                    placeholder="••••••••"
                                    id="password"
                                    type="password"
                                    onChange={(e) => setContrasena(e.target.value)}
                                />
                            </div>
                            <button
                            onClick={iniciarSesion}
                             class="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white"
                             type="button">
                                Crear una cuenta
                            </button>
                            <Link to="/registro">¿No tiene una cuenta? ¡Regístrese!</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Login;