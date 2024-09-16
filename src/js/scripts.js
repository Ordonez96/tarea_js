/*Ejercicio uno
EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario*/

function validarEdad(edad) {
    if(edad.trim() === "" || edad <= 0){
        alert('La edad debe ser mayor a cero, intetalo nuevamente')
        return
    }else alert(edad >= 18? 'Usted es mayor de edad' : 'Usted es menor de edad');
return
}

/*
EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
    • Examen =20%
    • tareas = 40%
    • asistencia = 10%
    • investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.
*/
function promedioNotas(){
    const validacion_nombre = /^[A-Za-z\s]+$/;
    let nombre = document.getElementById('id_nombre').value;
    let carnet = document.getElementById('id_carnet').value;
    let examen = parseFloat(document.getElementById('id_examen').value);
    let tareas = parseFloat(document.getElementById('id_tareas').value);
    let asistencia = parseFloat(document.getElementById('id_asistencia').value);
    let investigacion = parseFloat(document.getElementById('id_investigacion').value);
    if(nombre.trim() === '' || !validacion_nombre.test(nombre)){
        alert('Ingresa un nombre valido');
        return;
    }
    if(carnet.trim() === ''){
        alert('Ingresa un carnet');
        return;
    }
    if (isNaN(examen) || examen < 0 || examen > 10) {
        alert('Ingresa una nota valida');
        return ;
    }
    if (isNaN(tareas) || tareas < 0 || tareas > 10) {
        alert('Ingresa una nota valida');
        return ;
    }
    if (isNaN(asistencia) || asistencia < 0 || asistencia > 10) {
        alert('Ingresa una nota valida');
        return ;
    }
    if (isNaN(investigacion) || investigacion < 0 || investigacion > 10) {
        alert('Ingresa una nota valida');
        return ;
    }
    let promedio = (examen*0.2) + (tareas*0.4) + (asistencia*0.1) + (investigacion*0.3);
    alert(`Alumno ${nombre}\nCon No. de carnet ${carnet}\nSu nota Final es ${promedio}`);
}

/*
EJERCICIO 3:
CATEGORIA AUMENTO
    A 15%
    B 30%
    C 10%
    D 20%
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial.
*/

function calcularAumento(){
    let nombre = document.getElementById('id_nombre').value;
    let salario = parseFloat(document.getElementById('id_salario').value);
    let categoría = document.getElementById('id_categoria').value;
    let aumentoC = 0;
    let aumentoR = 0;
    if(nombre.trim() === ''){
        alert('Ingresa un nombre valido');
        return;
    }
    if(isNaN(salario) || salario <= 0){
        alert('Ingresa un salario valido');
        return;
    }
    if(categoría.trim() === ''){
        alert('Ingresa una categoria valida');
        return;
    }
    switch(categoría){
        case 'A':
            aumentoC = salario * 0.15;    
            aumentoR = parseFloat(aumentoC.toFixed(2));
            break;
        case 'B':
            aumentoC = salario * 0.30;
            aumentoR = parseFloat(aumentoC.toFixed(2));
            break;
        case 'C':
            aumentoC = salario * 0.10;
            aumentoR = parseFloat(aumentoC.toFixed(2));
            break;
        case 'D':
            aumentoC = salario * 0.20;
            aumentoR = parseFloat(aumentoC.toFixed(2));
            break;
        default:
            alert('Ingresa una categoria valida');
            return;
    }
    alert(`Estimado ${nombre}\nSu salario actual es de $${salario}\nY su aumento es de $${aumentoR}\nQuedando su salario nuevo en $${salario + aumentoR}`);
}

/*
EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo. 
*/

function compararNumeros(){
    let num1 = parseInt(document.getElementById('id_num_uno').value);
    let num2 = parseInt(document.getElementById('id_num_dos').value);
    if(isNaN(num1) || isNaN(num2)){
        alert('Ingresa dos numeros validos');
        return;
    }
    let mayor = num1 > num2? num1 : num2;
    alert(`El numero mayor es ${mayor}`);
}

/**
EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
aplicara en base a lo que selecciono el usuario.
*/

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('id_categoria').addEventListener('change', labelDescuento);

    function labelDescuento() {
        const categoría_label = document.getElementById('id_categoria').value;
        const descuento_label = document.getElementById('descuentos');
        let descuentoTexto = '';

        switch(categoría_label) {
            case 'FORD FIESTA':
                descuentoTexto = '5% de descuento';
                break;
            case 'FORD FOCUS':
                descuentoTexto = '10% de descuento';
                break;
            case 'FORD ESCAPE':
                descuentoTexto = '20% de descuento';
                break;
            default:
                descuentoTexto = 'Selecciona una categoría para ver el descuento';
        }

        descuento_label.textContent = descuentoTexto;
    }

    window.calcularPrecio = function() {
        let precio = parseFloat(document.getElementById('id_precio').value);
        let categoría = document.getElementById('id_categoria').value;
        let descuento = 0;
        let precioFinal = 0;

        if (isNaN(precio) || precio <= 0) {
            alert('Ingresa un precio válido');
            return;
        }
        switch(categoría) {
            case 'FORD FIESTA':
                descuento = precio * 0.05;
                break;
            case 'FORD FOCUS':
                descuento = precio * 0.10;
                break;
            case 'FORD ESCAPE':
                descuento = precio * 0.20;
                break;
            default:
                alert('Ingresa una categoría válida');
                return;
        }
        precioFinal = parseFloat((precio - descuento).toFixed(2));
        descuentoFinal = descuento.toFixed(2);
        alert(`El coche seleccionado es un ${categoría}\nCon precio de $${precio}\nTiene un descuento de $${descuentoFinal}\nEl precio final con descuento es $${precioFinal}`);
    }
});