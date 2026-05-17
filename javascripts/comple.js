// ==========================================
// 1. LOGIN (Múltiples Usuarios)
// ==========================================
const mensaje = document.getElementById("mensajeError");
const form = document.getElementById("login");

function validarDatos(e) {
    e.preventDefault();
    const nombreVal = document.getElementById("nombre").value.trim();
    const correoVal = document.getElementById("correo").value.trim();
    const contraVal = document.getElementById("contrasea").value.trim();

    // Traemos la lista de usuarios, si no existe, será un array vacío []
    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Buscamos si existe algún usuario que coincida con TODOS los datos del login
    const usuarioEncontrado = listaUsuarios.find(user => 
        user.usuario === nombreVal && 
        user.correo === correoVal && 
        user.contraseña === contraVal
    );

    if (usuarioEncontrado) {
        alert(`¡Inicio exitoso! Bienvenido ${usuarioEncontrado.usuario}`);
        // Opcional: Guardar temporalmente quién inició sesión para usar su nombre en home.html
        localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));
        window.location.href = "./home.html";
    } else {
        mensaje.textContent = "Datos incorrectos o usuario no registrado.";
    }
}

if (form) {
    form.addEventListener('submit', validarDatos);
}


// ==========================================
// 2. REGISTRO (Múltiples Usuarios)
// ==========================================
const form2 = document.getElementById("login-registro");

const registro = (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre1").value.trim();
    const correo = document.getElementById("correo1").value.trim();
    const contra = document.getElementById("contraseña1").value.trim();
    
    // 1. Obtener la lista de usuarios que ya existen (o crear una vacía)
    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // 2. Validar que el correo no esté registrado ya por otra persona
    const existeCorreo = listaUsuarios.some(user => user.correo === correo);
    if (existeCorreo) {
        alert("Este correo ya está registrado. Intenta iniciar sesión.");
        return; // Detiene la función aquí
    }

    // 3. Crear el nuevo usuario
    const nuevosDatos = {
        usuario: nombre,
        correo: correo,
        contraseña: contra
    };
    
    // 4. Agregar el nuevo usuario a la lista existente sin borrar los anteriores
    listaUsuarios.push(nuevosDatos);
    
    // 5. Guardar la lista actualizada en LocalStorage
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    
    alert("Usuario registrado con éxito. ¡Ya puedes iniciar sesión!");
    form2.reset(); 
};

if (form2) {
    form2.addEventListener('submit', registro);
}