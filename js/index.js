
function obtenerNombreProducto(codigo) {
    const nombresProductos = {
        1: "Empanada de Queso",
        2: "Empanada de Carne",
        3: "Empanada de Pollo",
        4: "Empanada de Camaron",
        5: "Empanada de Queso/Camaron",
        6: "Empanada de Queso/Choclo",
        7: "Empanada Vegetariana",
        8: "Empanada de Pulpo",
        9: "Papas Fritas",
        10: "Cafe",
    };

    while (codigo < 1 || codigo > 10) {
        alert("Tu opcion no es valida. Por favor, selecciona un codigo valido.");
        codigo = parseInt(prompt("Selecciona el codigo del producto:"));
    }

    return nombresProductos[codigo];
}
function obtenerPrecioProducto(codigo) {
    const preciosProductos = {
        1: 1500,
        2: 1800,
        3: 1800,
        4: 2300,
        5: 2000,
        6: 2000,
        7: 2000,
        8: 2500,
        9: 3000, 
        10: 800, 
    };

    if (preciosProductos[codigo] !== undefined) {
        return preciosProductos[codigo];
    } else {
        alert("Tu opcion no es valida. Por favor, selecciona un codigo valido.");
        return 0;
    }
}

function mostrarOpcionesProductos() {
    alert("Opciones disponibles:\n1. Empanada de Queso\n2. Empanada de Carne\n3. Empanada de Pollo\n4. Empanada de Camaron\n5. Empanada de Queso/Camaron\n6. Empanada de Queso/Choclo\n7. Empanada Vegetariana\n8. Empanada de Pulpo\n9. Papas Fritas\n10. Café");
}

function agregarOpcionesExtras(producto) {
    while (true) {
        if (producto === 9) { 
            const opcionesPapas = prompt("¿Desea agregar salsas? \n ketchup Pulsa(1)\nmayonesa Pulsa (2)\n Sin salsas pulsa(3)");

            if (opcionesPapas.includes('1')) {
                alert("Se agrego Ketchup a las papas.");
            }

            if (opcionesPapas.includes('2')) {
                alert("Se agrego Mayonesa a las papas.");
            }
            if (opcionesPapas.includes('3')) {
                alert("No se agregaron Salsas a sus papas.");
            }

            if (opcionesPapas.includes('1') || opcionesPapas.includes('2')|| opcionesPapas.includes('3')) {
                break;
            } else {
                alert("Opcion no valida. Por favor, seleccione una opcion valida.");
            }
        } else if (producto === 10) { // Café
            const opcionesCafe = prompt("Elija Cafe \nMocachino Pulsa (1)\nLatte de Vainilla Pulsa (2)");

            if (opcionesCafe.includes('1')) {
                alert("Se ordeno su cafe Mocachino.");
            }

            if (opcionesCafe.includes('2')) {
                alert("Se ordeno su cafe Latte de Vainilla.");
            }

            if (opcionesCafe.includes('1') || opcionesCafe.includes('2')) {
                break;
            } else {
                alert("Opcion no valida. Por favor, seleccione una opcion valida.");
            }
        }
    }
}
const carrito = {};

while (true) {
    mostrarOpcionesProductos();

    const codigoElegido = parseInt(prompt("Selecciona el codigo del producto (o cancela para ver el total):"));

    if (isNaN(codigoElegido)) {
        break;
    }

    const nombreProducto = obtenerNombreProducto(codigoElegido);
    
    if (nombreProducto === "Desconocido") {
        alert("Codigo no valido. Por favor, seleccione un codigo entre 1 y 10.");
        continue; 
    }

    alert(`Precio de ${nombreProducto}: $${obtenerPrecioProducto(codigoElegido)}`);

    if (codigoElegido === 9 || codigoElegido === 10) {
        agregarOpcionesExtras(codigoElegido);
    }

    const cantidad = parseInt(prompt(`Ingrese la cantidad de ${nombreProducto} que desea comprar:`));

    if (!carrito[codigoElegido]) {
        carrito[codigoElegido] = 0;
    }

    carrito[codigoElegido] += cantidad;
}

let total = 0;

for (const codigo in carrito) {
    const precioUnitario = obtenerPrecioProducto(parseInt(codigo));
    total += precioUnitario * carrito[codigo];
}

if (total > 0) {
    alert(`Total a pagar: $${total}`);
} else {
    alert("Gracias por visitar El Palacio de la Empanada.");
}