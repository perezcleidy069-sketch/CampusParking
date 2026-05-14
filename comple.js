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

const formulario=document.getElementById("formulario");
const propetario=document.getElementById("propetario");
const inputPlaca=document.getElementById("place");
const inputLugar=document.getElementById("lugar");
const inputFijo=document.getElementById("placaFija")
const tipoVehiculo=document.getElementById("car");
const horaIngreso=document.getElementById("hora");
const fechaIngreso=document.getElementById("fecha");
const asignacion=document.getElementById("botons");
const linkAsignar=document.querySelector('a[href="./asignarLugar.html"]');

const spanLugar=document.getElementById("botons");
const spanMarca=document.getElementById("marca");

let editando=null;

//para que cargue los otros html al abrir el formulario

window.addEventListener("load", ()=>{
    const LugarTemp=localStorage.getItem("LugarTemporal");
    const marcaTemp=localStorage.getItem("MarcaTemporal")
    const tarifaMarca=localStorage.getItem("TarifaMarca");

    if(LugarTemp){
        spanLugar.textContent=" -Seleccionado: " + LugarTemp
    }
    if(marcaTemp){
        spanMarca.textContent=" -Seleccionado: " + marcaTemp
    }
});

//funccion para cuando el de click en el tipo de vehiculo le escriba el la letra de las placas

tipoVehiculo.addEventListener("change", ()=>{
    const seleccionOpcion=tipoVehiculo.options[tipoVehiculo.selectedIndex];
    const prefix=seleccionOpcion.getAttribute("data-prefix");
    inputFijo.textContent=prefix || "---";

    const secciones={ "option1": "#carro", "option2": "#moto", "option3": "#bicicleta"}
    linkAsignar.href=`./asignarLugar.html${secciones[tipoVehiculo.value] || ""}`;
});


//Para guardar el registro que se realiza
formulario.addEventListener("submit", function(e){
    e.preventDefault();
    const registroVehi=JSON.parse(localStorage.getItem("registroVehiculos")) || []


    const precios={"option1": 10, "opciton2": 8, "option3": 5}
    const tarifaBase=precioS[tipoVehiculo.value] || 0;
    const propinaMarca=parseFloat(localStorage.getItem("TarifaMarca"))|| 0;
    
    const nuevoRegistro={
        id:editando || Date.now(),
        nombrePro:propetario.value,
        placa:inputFijo.textContent + inputPlaca.value,
        typeCars:tipoVehiculo.options[tipoVehiculo.selectedIndex].text,
        fecha:fechaIngreso.value,
        hora:horaIngreso.value,
        lugar:localStorage.getItem("LugarTemporal"),
        marca:localStorage.getItem("MarcaTemporal"),
        totalBase:tarifaBase +(tarifaBase+propinaMarca),
        entradaMs:Date.now()
    };

    if(editando){
        const reg=registroVehi.findIndex(r=> r.id===editando);
        registroVehiculos[reg]=nuevoRegistro;
        editando=null
    }else{
        registroVehi.push(nuevoRegistro)
    }
    localStorage.setItem("registroVehiculos", JSON.stringify(registroVehi))

    localStorage.removeItem("LugarTemporal");
    localStorage.removeItem("MarcaTemporal");
    inputFijo.textContent = "---";
    spanLugar.textContent = "";
    spanMarca.textContent = "";

    console.log("Guardado en local storage")
    formulario.reset()
})