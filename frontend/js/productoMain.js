const API_URL_PROD = 'http://localhost:3000/api/productos';

document.getElementById('formProducto').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre_prod = document.getElementById('nombre_prod').value;
    const stock = document.getElementById('stock').value;
    const precio = document.getElementById('valor').value;

    try {
    const respuesta_prod = await fetch(API_URL_PROD, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_prod, stock, precio })
    });

    const datos_prod = await respuesta_prod.json();

    if (respuesta_prod.ok) {
      alert(datos_prod.mensaje_prod); // Muestra "Cliente agregado"
        document.getElementById('formProducto').reset();
        cargarProductos();
    } else {
        alert('Error al agregar producto: ' + datos_prod.error);
    }
    } catch (error) {
    alert('Error al conectar con el servidor');
    console.error(error);
    }
});

async function cargarProductos() {
    try {
    const res_prod = await fetch(API_URL_PROD);
    const datos_prod = await res_prod.json();

    const tabla_prod = document.getElementById('tablaProductos');
    tabla_prod.innerHTML = '';
    datos_prod.forEach(produto => {
        tabla_prod.innerHTML += `
        <tr>
            <td>${produto.id}</td>
            <td>${produto.nombre_prod}</td>
            <td>${produto.stock}</td>
            <td>${produto.valor}</td>
        </tr>
        `;
    });
    } catch (error) {
    console.error('Error al cargar los productos:', error);
    }
}

cargarProductos();