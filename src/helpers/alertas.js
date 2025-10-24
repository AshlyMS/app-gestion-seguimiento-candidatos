import Swal from 'sweetalert2'
export function alertaGeneral(title, text, icon) {
    Swal.fire({
  title,
  text,
  icon,
});
}

export function alertaRedireccion(title, icon, path, redireccion) {
    let timerInterval;
Swal.fire({
  title,
  html: "Será redireccionado en <b></b> milisegundos.",
  timer: 1000,
  timerProgressBar: true,
  icon,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
    redireccion(path);
  }
})
}