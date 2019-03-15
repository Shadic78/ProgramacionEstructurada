//autor: Jorge Alberto Chi leon
//Algoritmo que lee una cadena de texto y un parrafo.
//verificar cuantas veces aparece la cadena en el parrafo.
//nota:sin espacios
//Entradas: Ambas cadenas
package main

import "fmt"
import "strings"

func main() {
	var inputCadena string
	var inputParrafo string
	inputParrafo = "lolololalalo"
	fmt.Println("Dame la cadena: ")
	fmt.Scanf("%s", &inputCadena)
	fmt.Println("Dame el parrafo: ")
	fmt.Scanf("%s", &inputParrafo)
	fmt.Println("Veces que se repite: ")
	fmt.Println(strings.Count(inputParrafo, inputCadena))
}

/*
QA: Amilcar A. Ramírez Patròn

Main()
El algoritmo presenta la opción de leer ambos string, sin embargo, al momento de ejecución sólo deja leer uno y luego se imprime (no
importa lo que se ponga) 0
*/


