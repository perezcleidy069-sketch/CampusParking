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

//Registrar vehiculos 

const propetario=document.getElementById("propetario");
const tipoVehiculo=document.getElementById("cars");
const fechaIngreso=document.getElementById("hora");
const asignacion=document.getElementById("botons");

formulario.addEventListener("submit", function(e){
    e.preventDefault
    const registroVehiculos=Json.parse(localStorage.getItem(registroVehiculos)) || []
    nombrePro=propetario.value;
    typeCars=tipoVehiculo.value;
    fecha=fechaIngreso.value;
    lugar=asignacion.value;

    transportes={nombrePro, typeCars, fecha, lugar};
    registroVehiculos.push(transportes);

    localStorage.setItem("registroVehiculos", JSON.stringify(registroVehiculos))
    console.log("Guardado en local storage")
    formulario.resert()
})