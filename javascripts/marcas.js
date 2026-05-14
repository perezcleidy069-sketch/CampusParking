const api="https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/440?format=json"
const almacen=document.getElementById("contenedor")

async function marcarDeCarros() {
    try{
        const respuesta= await fetch(api);
        const datos= await respuesta.json();
        const personajes=datos.Results;
        const resultado=personajes.map(a=>`
            <button id="tarjeta">
                <p>Marca: ${a.Model_Name} </p>
                <p>Nombre:${a.Make_Name}</p>
            </button>`

    ).join('');
    almacen.innerHTML=resultado;
}
    catch (error){
        console.log(error)
    }   
}
marcarDeCarros();