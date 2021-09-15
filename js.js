console.log("bienvenido porfavor seleccione una opcion");
console.log("1-. Ejercisio 1");
console.log("2-. Ejercisio 2");
console.log("3-. Ejercisio 3");
console.log("4-. Ejercisio 4");
console.log("5-. Ejercisio 5");
console.log("6-. Ejercisio 6");
console.log("7-. Ejercisio 7");
console.log("8-. Ejercisio 8");
console.log("Cualquier otra tecla SALIR");

var menu = prompt('ingrese su opcion');
var menu = (parseInt(menu));

switch (menu) {
    case 1:
        for (let num = 0; num < 10; num++) {
            console.log(num);

        }
        break;
    case 2:
        for (let num = 50; num < 151; num++) {
            console.log(num);

        }
        break;
    case 3:
        for (let num = 8; num <= 40;) {
            console.log(num);
            num = num + 2;

        }
        break;
    case 4:
        console.log("ingrese los datos");
        let iteracion = prompt('ingrese el numero de iteraciones');
        iteracion = parseInt(iteracion);
        while (iteracion >= 1) {
            let b = prompt('ingrese un numero');
            b = parseInt(b);
            c = b + b;
            iteracion--;
        }
        console.log(c);
        break;

    case 5:
        var letras = prompt("Ingrese una palabra");
        var objeto = {};
        for (var i in letras) {
            objeto[letras[i]] = (objeto[letras[i]] || 0) + 1;
        }
        console.log(objeto);
        break;
    case 6:
        for (let num = 0; num < 51; num++) {
            console.log(num + num);
        }
        break;
    case 7:
        let n = prompt("ingrese un numero");
        n = (parseInt(n));
        var total = 1;
        for (i = 1; i <= n; i++) {
            total = total * i;
        }
        console.log(total);
        break;
    case 8:
        console.log("ingrese los datos");
        veces = 6;
        if (veces > 1) {
            var numero = [];
            for (let index = 0; index < 6; index++) {
                let elemento = prompt('ingrese un numero');
                elemento = parseInt(elemento);
                numero[index] = elemento;
            }
            var veces = veces - 1;
            console.log(numero);
        }
        var positivo = 0,
            negativo = 0,
            nulo = 0;
        var array_masMenos = [];
        for (var i = 0; i < numero.length; i++) {
            if (numero[i] == 0) {
                nulo++;
            }
            if (numero[i] > 0) {
                positivo = positivo + 1;
                let total = 0;
                numero.forEach(function(a) { total += a; });
                var avg = total / positivo;
            }
            if (numero[i] < 0) {
                negativo = 0;
                a = parseInt(numero[i]);
                z = a - a;
                negativo++;
            }

        }
        array_masMenos[0] = "positivos: " + positivo;
        array_masMenos[1] = "nulos: " + nulo;
        array_masMenos[2] = "negativos: " + negativo;
        console.log("hay:" + array_masMenos);
        console.log("el promedio de los positivos es;" + avg);
        console.log("la suma de los negativos es; " + z);


        /*let iteracion = 6;
        while (iteracion > 0) {
            iteracion--;
            let arreglo = [1, 2, 3, 4, 5, 6];
            console.log("ingrese el " + enteros + " numero");
            let n = prompt("ingrese un numero");
            n = (parseInt(n));
            for (let index = 0; index < arreglo.length; index++) {
                if (n > 0) {
                    values[index] = n[index][n];
                } else {
                    for (let index = 0; index < arreglo.length; index++) {
                        if (n > 0) {
                            a[index] = n[index][n];
                        }
                    }
                }
            }

        }
        let count = values.length;
        values = values.reduce((previous, current) => current += previous);
        values /= count;
        console.log(values);*/
        break;
    default:
        console.log("adios");
        break;

}

//} else {
//    console.log("adios");
//}
/*1 - 
4 - Pedir al usuario que ingrese una cantidad, la cantidad ingresada por el usuario sera el numero de iteraciones que hara el programa, en cada iteracion pedirle al usuario que ingrese un numero, al final imprimir la suma de cada numero ingresado por el usuario.
8 - Escribir un programa que permita al usuario ingresar 6 números enteros, que pueden ser positivos o negativos. Al finalizar, mostrar la sumatoria de los números negativos y el promedio de los positivos.
No olvides que no es posible dividir por cero, por lo que es necesario evitar que el programa arroje un error si no se ingresaron números positivos.
*/