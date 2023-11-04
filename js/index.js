/* function valorPrecio(codigo){
    switch(codigo){
        //casos a evaluar
        case 1: 
            alert("La Empanada de Queso vale $1500")
            break
        case 2:
            alert("La Empanada de Carne vale $1800")
            break
        case 3:
            alert("La Empanada de Pollo vale $1800")
            break
        case 4:
            alert("La Empanada de Camaron vale $2300")
            break
        case 5:
            alert("La Empanada de Queso/Camaron vale $2000")  
            break  
        case 6:
            alert("La Empanada de Queso/Choclo vale $2000")  
            break
        case 7:
            alert("La Empanada de Vegetariana vale $2000")   
            break
        case 8:
            alert("La Empanada de Pulpo vale $2500") 
            break
        default: 
            alert("Tu opcion no es valida.")    
    }
} */
//funcion por si acaso los precios varian
function obtenerNombreEmpanada(codigo) {
    const nombresEmpanadas = {
        1: "Empanada de Queso",
        2: "Empanada de Carne",
        3: "Empanada de Pollo",
        4: "Empanada de Camarón",
        5: "Empanada de Queso/Camarón",
        6: "Empanada de Queso/Choclo",
        7: "Empanada Vegetariana",
        8: "Empanada de Pulpo",
    };

    return nombresEmpanadas[codigo] || "Desconocida";
}

function obtenerPrecioEmpanada(codigo) {
    const preciosEmpanadas = {
        1: 1500,
        2: 1800,
        3: 1800,
        4: 2300,
        5: 2000,
        6: 2000,
        7: 2000,
        8: 2500,
    };

    if (preciosEmpanadas[codigo] !== undefined) {
        return preciosEmpanadas[codigo];
    } else {
        alert("Tu opcion no es válida por favor selecciona un código válido.");
        return 0;
    }
}

alert("Opciones disponibles:\n1. Empanada de Queso\n2. Empanada de Carne\n3. Empanada de Pollo\n4. Empanada de Camaron\n5. Empanada de Queso/Camaron\n6. Empanada de Queso/Choclo\n7. Empanada Vegetariana\n8. Empanada de Pulpo");

const carrito = {};

while (true) {
    const codigoElegido = parseInt(prompt("Selecciona el codigo de la empanada (o cancela para ver el total):"));

    if (isNaN(codigoElegido)) {
        break;
    }

    const nombreEmpanada = obtenerNombreEmpanada(codigoElegido);
    alert(`Precio de ${nombreEmpanada}: $${obtenerPrecioEmpanada(codigoElegido)}`);

    const cantidad = parseInt(prompt(`Ingrese la cantidad de ${nombreEmpanada} que desea comprar:`));

    if (!carrito[codigoElegido]) {
        carrito[codigoElegido] = 0;
    }

    carrito[codigoElegido] += cantidad;
}

let total = 0;

for (const codigo in carrito) {
    const precioUnitario = obtenerPrecioEmpanada(parseInt(codigo));
    total += precioUnitario * carrito[codigo];
}

if (total > 0) {
    alert(`Total a pagar: $${total}`);
} else {
    alert("Gracias por usar visitar El Palacio de la Empanada.");
}