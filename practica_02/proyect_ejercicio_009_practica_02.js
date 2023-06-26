//(001)Crear una función makeBurger que reciba más de 3 parámetros, todos tienen que ser strings.

//(002)El primero y el último serán "pan", y los demás ingredientes los eligirá el usuario mediante un modal.

//(003)En la función se creará un objeto cuyo primer y último valor serán el "pan" que le pasamos por parámetros de entrada. El resto de parámetros ponedlos en ell orden que prefiráis.

//(004)Mostrar por consola el resultado(objeto).

// 

function makeBurguer(pan, lechuga, tomate, carne, pan2) {
    let hamburguesa = {
        pan: pan,
        tomate: tomate,
        lechuga: lechuga,
        carne: carne,
        pan2: 'pan'  
    }
    return hamburguesa;
    // console.log(makeBurger);
}
// let lechuga = prompt("Introduce un ingrediente por ejemplo'lechuga':","lechuga")
// let tomate = prompt("Introduce un ingrediente por ejemplo'tomate':", "tomate")
// let carne = prompt("Introduce un ingrediente por ejemplo'carne':","carne")
// console.log(makeBurguer('pan', tomate, lechuga, carne, 'pan'));

makeBurguer('pan')
// ------------------------------------------------------------->
// lechuga = prompt("Introduce un ingrediente por ejemplo'lechuga':")
//     tomate = prompt("Introduce un ingrediente por ejemplo'tomate':")
//     carne = prompt("Introduce un ingrediente por ejemplo'carne':")
//     pan = prompt("Introduce un ingrediente por ejemplo'pan':")




// ------------------------------------------------------------------->
//[_1_:] Crear una función operations que reciba 2 parámetros de entrada.
//[_2_] En la función del anterior paso, retornar un array de 3 posiciones con diferentes operaciones en cada posición. Se tienen que usar los 2..

function operation(value1, value2) {
    return [value1+value2,value1*value2,value1/value2];

}


// --------------------------------------------------------------------------------------->

// Crear otra función startOperation que tenga 2 parámetros de entrada y hacer un log de la funcion operations por cada diferente posicion del array.
function startOperation(data1,data2) {
 let otraCosa = ['red',22,true];
 console.log(otraCosa[0]);
 
console.log(operation(1,1)[0]);//el uno coma uno hace referencia al valor de'value1'y value2 y accedemos a su poscion de array mediante corchetes[];
console.log(operation(4,3)[1]);
console.log(operation(5,2)[2]);
//  cities[1]
 //console.log(cities[1]);
 data2 = ['madrid',56,false,89]
 data2 = [3]

//  console.log(startOperation[2]);


    
}
startOperation();
//Usar el template literals para generar un alert como el de la foto.
















// alert("hola mundo")