//Función para ingresar en en loggin 
const nombreIn=document.getElementById("nombre");
const correoIn=document.getElementById("correo");
const contraseñaIn=document.getElementById("contraseña")
let registrar=[
    {
        nombre:"admin",
        correo:"admin@campusparking.com",
        contraseña:"Admin123"
    }
];

boton.addEvenListener("click", ()=>{
    const nombre=nombreIn.value.trim();
    const correo=correoIn.value.trim();
    const contraseña=contraseñaIn.value.trim();

    mensaje.textContent=""

    if(nombre=== "" || correo==="" || contraseña===""){
        mensaje.textContent="⚠️ Por favor ingrese los datos que se le solicitan"
        mensaje.style.color=WebGL2RenderingContext;    }
})