//Función para ingresar en en loggin 
const nombreIn=document.getElementById("nombre");
const correoIn=document.getElementById("correo");
const boton=document.getElementById("boton");
const contraseñaIn=document.getElementById("contraseña")
const mensaje=document.getElementById("mensajeError")
let registrar=[
    {
        nombre:"admin",
        correo:"admin@campusparking.com",
        contraseña:"Admin123"
    }
];

boton.addEventListener("click", (e)=>{
    e.preventDefault();
    const nombre=nombreIn.value.trim();
    const correo=correoIn.value.trim();
    const contraseña=contraseñaIn.value.trim();

    mensaje.textContent="";

    if(nombre=== "" || correo==="" || contraseña===""){
        mensaje.textContent="⚠️ Por favor ingrese los datos que se le solicitan"
        mensaje.style.color="black";   
        return; 
    }
    const usuarioEncontrado=registrar.find(user=> user.nombre===nombre && user.correo===correo && user.contraseña===contraseña);
    if (usuarioEncontrado){
        window.location.href=("home.html");
    }else{
        mensaje.textContent="❌ Los datos ingresados incorrectos"
        mensaje.style.color="pink"
    }
})