document.addEventListener('DOMContentLoaded', function () {
  const btnProductos = document.getElementById('btnProductos');
  btnProductos.addEventListener('click', () => {
    fetch('http://localhost:3456/api/usuarios/iniciarSesion')
      .then(response => response.json())
      .then(data => console.log(data));
  })
});