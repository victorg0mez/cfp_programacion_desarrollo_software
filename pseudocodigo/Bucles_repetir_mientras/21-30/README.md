<h2>Ejercicio 1</h2>
        <h3>Contador ascendente</h3>
    <pre>
            <code>
                Algoritmo contar
	                Definir contador Como Entero
	                    contador <- 0
	                Mientras (contador < 10)
		                contador <- contador +1
		                    Escribir contador
	                FinMientras
	            FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 2</h2>
        <h3>Contador descendente</h3>
    <pre>
            <code>
                Algoritmo contar
	                definir contador Como Entero
	                    contador <- 0
	                     Mientras (contador < 10)
		                    contador <- contador - 1
		                        Escribir contador
	                    FinMientras
	            FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 3</h2>
        <h3>Numeros positivo</h3>
    <pre>
            <code>
                Algoritmo sumar
	                Definir valor1,numer Como Entero
	                    //Sumar con el bucle
                    Mientras valor1 = valor1 + numer Hacer
		                Escribir "Ingresa un numero positivo"
		                Leer numer
	                Fin Mientras
	                    Escribir valor1
                FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 4</h2>
        <h3>Adivina</h3>
    <pre>
            <code>
                Algoritmo Adivina
	                    Definir num_ingresado,num_secreto Como Entero
	                        num_secreto = Aleatorio(1,100)
	                            Leer num_secreto
	                    Escribir "Adivine el numero (de 1 a 100):"
	                        Leer num_ingresado
	            Mientras num_ingresado <> num_secreto Hacer
		                    Escribir 'numero incorrecto'
		                        Leer num_ingresado
	            Fin Mientras
	                    Escribir 'numero correcto'
                FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 5</h2>
        <h3>Validar contraseña</h3>
    <pre>
            <code>
                Algoritmo validar
	                contraseña = 'progra23'
	                    Definir contra Como Caracter
	            //bucle
	                Repetir
		                Escribir 'Escribir contraseña'
		                Leer contra
	                Hasta Que contraseña = contra
	                        Escribir 'Contraseña correcta, felicidades'
                FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 6</h2>
        <h3>Numero positivo</h3>
    <pre>
            <code>
                Algoritmo Num_positivo
	                    //Variables
	                Definir anterir,num Como Entero
	                    //pedir numero
	                    Escribir 'Ingresar, positivos '
	                        Leer num
	        //Bucle
	                Mientras num > 0 Hacer
		                anterior <- num
		                    Escribir 'Ingresa otro numero (si ingresas un valor negativo se detiene todo)'
		                    Leer num
	                Fin Mientras
	                        Escribir 'El ultimo positivo que ingresaste es ' anterior
                FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejecicio 7</h2>
        <h3>Suma pares</h3>
    <pre>
            <code>
                Algoritmo Suma_pares
	                //Variables
	                Definir num, valor1 Como Entero
	        //Contador
	                contar <- 0
	        //Bucle
	                Mientras num < 0 Hacer
		                Escribir 'Escribe un numero (ingresa negativi para detener la suma)'
		                Leer num
		    //Sumar los pares
		            contar <- contar + num
	                        Fin Mientras
	                            Escribir 'El total de la suma es ' contar
                FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 8</h2>
        <h3>Adivina repetir</h3>
    <pre>
            <code>
                Algoritmo adivinar_numero
	                //Definir valores
	                    Definir num_azar,intentos,num_adivinado Como Entero
	                //Generar
	                    num_azar <- azar(1,50)
	                //iniciar intentos
	                intento <- 0
	                //Bucle
                        Repetir
		                    Escribir 'Adivinar el numero del numero (1,50) '
		                    Leer num_adivinado
		                //Contar sumar
		                    intento <- intento + 1
		            //Condicion
		                    Si num_adivinado = num_azar Entonces
			                    Escribir 'Has adivinado en ' intento 'intento'
		                    SiNo
			                    Escribir 'Intento incorrecto sigue intentando'
		                    Fin Si
	                    Hasta Que num_azar = num_adivinado
	            FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 9</h2>
        <h3> Calcular factorial</h3>
    <pre>
            <code>
            </code>
    </pre>
<br>

<h2>Ejecicio 10</h2>
        <h3>Validar contraseña</h3>
    <pre>
            <code>
                    Algoritmo Contraseñ4
                                    //validar
                                Definir contraseña Como Caracter
                                    //bucle
                                    Repetir
                                        Escribir 'Ingresa contraseña'
                                        Leer contraseña
                                    Hasta Que Longitud(contraseña) >= 8
                                    Escribir 'Contraseña valida'
                    FinAlgoritmo
			</code>
    </pre>
