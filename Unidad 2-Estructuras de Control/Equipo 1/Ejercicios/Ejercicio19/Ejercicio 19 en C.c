#include <stdio.h>

int main(int argc, char *argv[]) {
	int trono=0;
	int numero1;
	int numero2;
	int numero3;
	
	printf ("Da tres numeros\n");
	scanf ("%d", &numero1);
	scanf ("%d", &numero2);
	scanf ("%d", &numero3);
	
	if (numero1>numero2){
		if (numero1>numero3){
			printf ("El mayor es:",numero1);
		else
			printf ("El mayor es:",numero3);
		}
	}
	else
		if (numero2>numero3){
			printf("El mayor es:",numero2)
		
		else
			printf ("El mayor es:",numero3);
	}
	}
	
	
	return 0;
}

