// Validacion Usuario //
// Condicion: a modo de ejemplo, solo podrá iniciar sesiíon alguien con usuario:"admin" y password="1234".

function validarCredenciales() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validar las credenciales
    const isValidCredentials = username === 'admin' && password === '1234'; 
    
    

    // Tomar acción en base a la validez de las credenciales
    if (isValidCredentials) {
      alert('¡Bienvenido! Acceso concedido.');
    } else {
      alert('Credenciales inválidas. Acceso denegado.');
    }
  }

//   Para que haya mas usuarios y contraseñas : //

// function validarCredenciales() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
  
//     // Definir una lista de usuarios y contraseñas permitidos
//     const usuariosPermitidos = [
//       { username: 'admin', password: '1234' },
//       { username: 'usuario1', password: 'clave1' },
//       { username: 'usuario2', password: 'clave2' },
//       // Agregar más usuarios según sea necesario
//     ];
  
//     // Verificar si las credenciales coinciden con algún usuario permitido
//     const isValidCredentials = usuariosPermitidos.some(
//       user => user.username === username && user.password === password
//     );
  
//     // Tomar acción en base a la validez de las credenciales
//     if (isValidCredentials) {
//       alert('¡Bienvenido! Acceso concedido.');
//     } else {
//       alert('Credenciales inválidas. Acceso denegado.');
//     }
//   }
  