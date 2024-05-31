<h2>Ejercicio 1</h2>
        <h3>Suma de numeros</h3>
    <pre>
            <code>
                    Algoritmo Suma_numeros
	                    Definir resultado Como Entero
	                            Para num = 1 Hasta 10 con paso 1 Hacer
		                                resultado = resultado + num
	                            FinPara
		                    Escribir resultado
	                FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 2</h2>
        <h3>Tabla de multiplicar</h3>
    <pre>
            <code>
                Algoritmo Tabla_multiplicar
	                Definir num Como Entero
	                    Escribir "Ingrese un numero"
	                        Leer num
	                Para n = 0 Hasta 10 Con paso 1 Hacer
		                    Escribir num 'x' n "=" num * n
	                Fin Para
                FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 3</h2>
        <h3>Factorial</h3>
    <pre>
            <code>
                Algoritmo calcular_factoarial 
	                    resultado = 1
	                Definir factor Como Entero
	                Escribir "ingresa un numero"
	                    Leer factor
	                    Para a = 1 Hasta factor Con paso 1 Hacer
		                    resultado = resultado * a
	                    Fin Para
	                        Escribir resultado
                FinAlgoritmo
        </code>
    </pre>
<br>

<h2>Ejercicio 4</h2>
        <h3>Contador regresivo</h3>
    <pre>
            <code>
                Algoritmo contar_atras
	                Para a=10 Hasta 1 Con Paso -1 Hacer
		                Escribir a
	                Fin Para
                FinAlgoritmo
             </code>
    </pre>
<br>

<h2>Ejercicio 5 </h2>
        <h3>Impresion de caracteres</h3>
    <pre>
            <code>
                Algoritmo Caracteres
	                    var = '*'
	                Para i=1 Hasta 5 Con Paso 1 Hacer
		                text0 = text0 + var
		                Escribir text0
	                Fin Para
                FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 6</h2>
        <h3>Potencias de **2</h3>
    <pre>
            <code>
                Algoritmo Potencias
	                definir num, resultado Como Entero
	                    Leer num
	                Para potencia = 0 hasta 100 con paso 1 hacer
		                si(potencia=0)
			                resultado=1
		                SiNo
			                resultado= resultado*num
		                FinSi
		                        Escribir num ' elevado ' 'al ' potencia ' = ' resultado
	                FinPara
            FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 7</h2>
        <h3>Suma pares</h3>
    <pre>
            <code>
                Algoritmo suma_pares
	                Para i=2 Hasta 20 Con Paso 2 Hacer
		                suma = suma + i
	                Fin Para
	                E   scribir suma
                FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 8</h2>
        <h3>Contar digitos</h3>
    <pre>
            <code>
                Algoritmo numer
	                Definir num Como entero
	                    Escribir "Ingrese un numero"
	                        Leer num
	                    cadena_num <- ConvertirATexto(num)
	                        contador = 0
                        Para i=1 Hasta Longitud(cadena_num) Con Paso 1 Hacer
		                    contador <- contador + 1
                        Fin Para
	                Escribir contador
                    FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 9</h2>
        <h3>Secuencia Fibonacci</h3>
    <pre>
            <code>
                Algoritmo Fibonazi
	                Definir anterior,actual,resultado Como Entero
	                    Para i = 0 Hasta 10 Con Paso 1 Hacer
                            Escribir actual
		            Si (i = 0) Entonces
			            anterior = 0
			            actual = 1
		            SiNo
			            resultado = anterior + actual
			            anterior = actual
			            actual = resultado
		            Fin Si
	                    FinPara
            FinAlgoritmo
        </code>
    </pre>
<br>

<h2>Ejercicio 10</h2>
        <h3>Patron de numeros</h3>
    <pre>
            <code>
                Algoritmo Patron_numerico
	                Definir number,contar Como Entero
	                Escribir 'Ingresa hasta donde quieras que se detenga el ciclo'
	                Leer number
	                    Para i = 1 Hasta number Con Paso 1 Hacer
		                Fin Para
                FinAlgoritmo
            </code>
    </pre>



