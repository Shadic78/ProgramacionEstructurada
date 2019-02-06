/*
Ejercicio 37 Javascript
Unidad 2 - {Programación Estructurada}
Equipo 1

Autor: Eyder Antonio Concha Moreno
Fecha: 5 de Febrero 2019
Entradas: n número de primos a sumar
Salidas: la suma del número de primos (o 0 en caso de ser un valor invalido)

---------------------------------------
Instrucción:
Determinar la suma de los primeros n números primos.
---------------------------------------

Procedimiento General:
---------------------------------------
1.-Verificamos que la cantidad de primos escrita por el usuario sea mayor a 0
2.-Iteramos através de los números naturales, comparando un contador con los números desde dos hasta su mitad
  de esta manera, determinando si es primo
3.-Si el número tiene un residuo de 0, se determina que el número no es primo, y se representa en una variable booleana
4.-Comprobamos si la variable isPrime es verdadera o falsa
5.-Si es verdadera (si es primo) sumamos ese número a la suma total, y restamos uno a la cantidad de primos
---------------------------------------
*/

/*Entradas*/

//Definimos una variable que determine la cantidad de primos a sumarr
let cantidadPrimos = prompt();

//Variable suma para almacenar toda suma
let suma = 0;

//Variable contador, usada para iterar hasta que los números primos hayan sido sumados
let numero = 1;

//Variable booleana saber si el número en la iteración es primo
let isPrime;

/*Procedimiento*/

while (cantidadPrimos > 0) {  
  numero++;
  isPrime = true;
  for(let i = 2; i <= numero/2; i++){
    if(numero%i == 0) isPrime = false;
  }
  
  if(isPrime){
    console.log(numero);
    suma += numero;
    cantidadPrimos--;
  }
}

/*Salidas*/

alert(suma);






