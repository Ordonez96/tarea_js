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
    const validacion_nombre = /^[A-Za-z\s]+$/; //expresion regular para validar que el nombre sea tipo string
    //Recuperacion de datos
    let nombre = document.getElementById('id_nombre').value;
    let carnet = document.getElementById('id_carnet').value;
    let examen = parseFloat(document.getElementById('id_examen').value);
    let tareas = parseFloat(document.getElementById('id_tareas').value);
    let asistencia = parseFloat(document.getElementById('id_asistencia').value);
    let investigacion = parseFloat(document.getElementById('id_investigacion').value);
    //Validaciondes de entrada de datos
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
    //Proceso
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
Para este ejercicio deberá de asignar las siguientes letiables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial.
*/

function calcularAumento(){
    //Recuperacion de datos
    let nombre = document.getElementById('id_nombre').value;
    let salario = parseFloat(document.getElementById('id_salario').value);
    let categoría = document.getElementById('id_categoria').value;
    let aumentoC = 0;
    let aumentoR = 0;
    //Validacion de datos de entrada
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
    //Logica
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
    //Recuperacion de datos
    let num1 = parseInt(document.getElementById('id_num_uno').value);
    let num2 = parseInt(document.getElementById('id_num_dos').value);
    //Validacion de datos de entrada
    if(isNaN(num1) || isNaN(num2)){
        alert('Ingresa dos numeros validos');
        return;
    }
    //Logica
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

document.addEventListener('DOMContentLoaded', function() {//aseguramos que primero cargue DOM y luego las funciones
    document.getElementById('id_categoria').addEventListener('change', labelDescuento);

    function labelDescuento() {
        //Recuperacion de datos
        const categoría_label = document.getElementById('id_categoria').value;
        const descuento_label = document.getElementById('descuentos');
        let descuentoTexto = '';
        //Logica label
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
        //Salida Label
        descuento_label.textContent = descuentoTexto;
    }

    window.calcularPrecio = function() {
        //Recuperacion de datos
        let precio = parseFloat(document.getElementById('id_precio').value);
        let categoría = document.getElementById('id_categoria').value;
        let descuento = 0;
        let precioFinal = 0;
        //Validaciones de entrada de datos
        if (isNaN(precio) || precio <= 0) { 
            alert('Ingresa un precio válido');
            return;
        }
        //Logica
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

/*
EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%.
*/

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('id_destino').addEventListener('change', labelDestino);

    function labelDestino() {
        //Recuperacion de datos
        const categoría_select = document.getElementById('id_destino').value;
        const descuento_label = document.getElementById('descuentos_d');
        let descuentoTexto = '';
        //Logica label
        switch(categoría_select) {
            case 'COSTA DEL SOL':
                descuentoTexto = '5% de descuento';
                break;
            case 'PANCHIMALCO':
                descuentoTexto = '10% de descuento';
                break;
            case 'PUERTO EL TRIUNFO':
                descuentoTexto = '15% de descuento';
                break;
            default:
                descuentoTexto = 'Selecciona una categoría para ver el descuento';
        }
        //Salida label
        descuento_label.textContent = descuentoTexto;
    }
});

/*
EJERCICIO 7:
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares.
*/

function validarNumeros() {
    //Recuperacion de datos
    const num = document.getElementById('id_numeros').value;
    const numeros = num.split(',').map(num => parseInt(num.trim(), 10));
    let negativos = 0;
    let positivos = 0;
    let multiplos = 0;
    let sumaPares = 0;

    //Validaciones de entrada de datos
    if (numeros.length !== 10) {
        alert('Por favor, ingrese exactamente 10 números.');
        return;
    }
    //Logica
    for (const numero of numeros) {
        if (numero < 0) {
            negativos++;
        } else if (numero > 0) {
            positivos++;
        }
        if (numero % 15 === 0) {
            multiplos++;
        }
        if (numero % 2 === 0) {
            sumaPares += numero;
        }
    }

    alert(`Valores negativos: ${negativos}\nValores positivos: ${positivos}\nMúltiplos de 15: ${multiplos}\nSuma pares: ${sumaPares}`);
}


/*
EJERCICIO 8:
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario.
*/

function tablaNum(){
    //Recuperacion de datos
    let num = parseInt(document.getElementById('id_num').value);
    let result = '';
    //Validaciones de entrada de datos
    if (isNaN(num) || num <= 0) {
        alert('Ingresa un número entero positivo.');
        return;
    }
    //Logica
    for (let i = 1; i <= 10; i++) {
        result += `${num} x ${i} = ${num * i}\n`;
    }
    alert(result);
}

/*
EJERCICIO 9:
Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida”

*/

function validartemperatura() {
    //Recuperacion de datos
    let celsius = parseFloat(document.getElementById('id_celsius').value);
    let mensaje;
    //Validaciones de entrada de datos
    if (isNaN(celsius)) {
        alert('Ingrese una Temperatura válida');
        return;
    }
    //Logica
    let fahrenheit = (celsius * 9/5) + 32;
    if (fahrenheit >= 14 && fahrenheit < 32) {
        mensaje = "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        mensaje = "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        mensaje = "Temperatura alta";
    } else {
        mensaje = "Temperatura desconocida";
    }
    alert(mensaje);
}

/*
EJERCICIO 10:
Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche.
Nota: Las edades de cada estudiante se deberán ingresar por la web.
Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades mayor.
*/

function validarEdades() {
    let mensaje;
    //Recuperacion de datos
    let edadesManana = document.getElementById('id_edades_manana').value.split(',').map(Number);
    let edadesTarde = document.getElementById('id_edades_tarde').value.split(',').map(Number);
    let edadesNoche = document.getElementById('id_edades_noche').value.split(',').map(Number);
    //Validacion de datos de entrada
    if (edadesManana.length !== 5 || edadesTarde.length !== 6 || edadesNoche.length !== 11) {
        alert('Ingrese la cantidad solicitada de edades para cada turno');
        return;
    }
    //Logica
    let promedioManana = calcularPromedio(edadesManana);
    let promedioTarde = calcularPromedio(edadesTarde);
    let promedioNoche = calcularPromedio(edadesNoche);
    
    if (promedioManana > promedioTarde && promedioManana > promedioNoche) {
        mensaje = 'El turno de la Mañana posee el promedio mas alto.';
    } else if (promedioTarde > promedioManana && promedioTarde > promedioNoche) {
        mensaje = 'El turno de la Tarde posee el promedio mas alto.';
    } else if (promedioNoche > promedioManana && promedioNoche > promedioTarde) {
        mensaje = 'El turno de la Noche posee el promedio mas alto.';
    } else {
        mensaje = 'Hay promedios de edad iguales';
    }
    alert(
        `Promedio de edades TM: ${promedioManana.toFixed(2)}\n` +
        `Promedio de edades TT: ${promedioTarde.toFixed(2)}\n` +
        `Promedio de edades TN: ${promedioNoche.toFixed(2)}\n\n` +
        mensaje
    );
}
function calcularPromedio(edades) {
    let suma = edades.reduce(function(a, b) {
        return a + b;
    }, 0);
    return suma / edades.length;
}