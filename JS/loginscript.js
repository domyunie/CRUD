let users = JSON.parse(localStorage.getItem('users')) || [{username: 'ADMIN', password: 'ADMIN'}];
//                                                         ^  Array, no objeto  ^

function loginUser() {
  let username = document.getElementById('usuario').value.trim();
  let password = document.getElementById('contrasena').value;

  if (!username || !password) {
    alert('Usuario y contraseña requeridos');
    return;
  }

  // ✅ Renombrada a 'foundUser' para no colisionar con la variable 'users' de arriba
  let foundUser = users.find(u => u.username === username && u.password === password);

  if (foundUser) {
    localStorage.setItem('userSession', JSON.stringify({ type: 'users', username }));
    alert('Login exitoso');

    // ✅ Redirige directamente, sin listeners innecesarios
    window.location.href = 'http://127.0.0.1:3000/HTML/crud.html';

  } else {
    alert('Credenciales inválidas');
  }
}

