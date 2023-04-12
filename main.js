

//ej1//

    
   for(let i=0; i<30;i++){
        if(i % 2 == 0){
            console.log(`el numero ${i} es par`);
            continue;
       }else
       console.log(`el numero ${i} es impar`);
        }
       
//ej2
// Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.//

 function numMayor(num1,num2){
    for(let i=4; i>2; i--)
    console.log(`El numero ${num2} es mayor que ${num1}`);
 }
 console.log(`Ninguno lo es, son iguales`);

 numMayor(2,4)

// ej3
// Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.


function multiploDe5(num){
    for(let i=1; i<num;i++ )
    if(i*num==60 ){
        console.log(`Si es múltiplo de 5`);
    }

}
multiploDe5(20)


//ej4//
//Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.


for(let i=0; i<=15; i++){
    console.log(`El numero de i es ${i}`);
}


//ej5//
// Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function palabraRepetida(palabra,repeticiones){
    for (let i = 0 ; i< repeticiones ; i++){
        console.log(palabra);
    }
}
palabraRepetida("aguanteBoca",10)


// ej6
// Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.


const colores = [
    "azul",
    "amarillo",
    "rojo",
    "bordo",
    "naranja",
    "blanco",
    "negro",
    "gris",
    "verde",
    "lila"
];
for(let i = 0 ; i< colores.length;i++){
    console.log(colores[i]);
}
console.log(colores
    );

// ej7
// Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const numeros= [1,2,3,4,5,6,7,8,9,10];

for(let i=0; i < numeros.length;i++){
    if(numeros[i] === 6){
        continue;
    }
    console.log(numeros[i]);
}
   



// ej8
// Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const numeross =[1,2,3,4,5,6,7,8,9,10];
for(let i = 1; i<=numeros.length; i++)
for(let h=0; h<10;h++){
    console.log(`${numeross[h]} multiplicado por ${i} es igual a ${numeross[h]* i}`);
}
