const formulario=document.getElementById("formulario");
const propetario=document.getElementById("propetario");
const inputPlaca=document.getElementById("place");
const inputLugar=document.getElementById("lugar");
const inputFijo=document.getElementById("placaFija")
const tipoVehiculo=document.getElementById("car");
const horaIngreso=document.getElementById("hora");
const fechaIngreso=document.getElementById("fecha");
const asignacion=document.getElementById("boton");
const tarjetaMarca=document.getElementById("tarjeta")
const linkAsignar=document.querySelector('a[href="./asignarLugar.html"]');

const spanLugar=document.getElementById("botons");
const spanMarca=document.getElementById("marca");

let editando=null;

tipoVehiculo.addEventListener("change", (e)=>{
    const seleccionOpcion=e.target.selectedOptions[0]
    const prefix=seleccionOpcion.getAttribute("data-prefix");

    console.log("cambiando el prefijo a: ", prefix)

    if(inputFijo){
        inputFijo.textContent=prefix || "---";
    }
});

//para que cargue los otros html al abrir el formulario

window.addEventListener("DOMContentLoaded", ()=>{
    const LugarTemp=localStorage.getItem("LugarTemporal");
    const marcaTemp=localStorage.getItem("MarcaTemporal")
    const tarifaMarca=localStorage.getItem("TarifaMarca");

    if(LugarTemp && LugarTemp !=""){
        spanLugar.textContent= ` - Seleccionado: ${lugarGuardado}`;
        spanLugar.style.color="#2ecc71";
        spanLugar.classList.add("activo")
    }
    else{
        spanLugar.textContent="(Pediente)"
    }
    if(marcaTemp && marcaTemp !=""){
        spanMarca.textContent=` - Seleccionado: ${lugarGuardado}`
    }else{
        spanMarca.textContent="(Pediente)"
    }
});

//Para guardar el registro que se realiza
formulario.addEventListener("submit", function(e){
    e.preventDefault();
    const registroVehi=JSON.parse(localStorage.getItem("registroVehiculos")) || []


    const precios={"option1": 10, "option2": 8, "option3": 5}
    const tarifaBase=precios[tipoVehiculo.value] || 0;
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
        registroVehi[reg]=nuevoRegistro;
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

