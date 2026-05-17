let cuerpoTabla = document.getElementById("cuerpoTabla");

function renderHistorial() {
    // 1. Obtener datos de LocalStorage
    const registros = JSON.parse(localStorage.getItem("registroVehiculos")) || [];
    
    // 2. Limpiar la tabla antes de renderizar
    cuerpoTabla.innerHTML = "";

    // 3. Recorrer los datos y crear filas (tr)
    registros.forEach(reg => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${reg.lugar || 'N/A'}</td>
            <td>${reg.nombrePro}</td>
            <td>${reg.tipoNombrea}|| 'Vehículo'}</td>
            <td>${reg.placa}</td>
            <td>${reg.fecha} ${reg.hora}</td>
            <td>$${reg.totalBase.toFixed(2)}</td>
            <td>
                <button onclick="eliminar(${reg.id})">Eliminar</button>
                <button onclick="finalizar(${reg.id})" style="background:green; color:white">Pagar</button>
            </td>
        `;
        cuerpoTabla.appendChild(fila);
    });
}

// Función global para eliminar (necesita estar en window para el onclick del HTML)
window.eliminar = (id) => {
    if(confirm("¿Estás seguro de eliminar este registro?")) {
        let registros = JSON.parse(localStorage.getItem("registroVehiculos")) || [];
        registros = registros.filter(r => r.id !== id);
        localStorage.setItem("registroVehiculos", JSON.stringify(registros));
        renderHistorial(); // Refrescar la tabla
    }
};

window.finalizar = (id) => {
    alert("Procesando pago... ¡Vuelva pronto!");
    window.eliminar(id);
};

document.addEventListener("DOMContentLoaded", () => {
    cuerpoTabla = document.getElementById("cuerpoTabla"); // Ahora sí te dejará guardarlo aquí sin romper nada
    renderHistorial();
});