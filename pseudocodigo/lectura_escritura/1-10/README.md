<h2>Ejercicio 1</h2>
<h3>Calculadora simple:</h3>
<pre>
    <code>
        Algoritmo Calculadora
	        Escribir " Primer numero "
	        Leer numero_1
	        Escribir " Segundo numero "
	        Leer numero_2
	        definir suma Como Entero
	        suma <- numero_1 + numero_2
	        Definir resta Como Entero
	        resta <- numero_1 - numero_2
	        Definir multilplicacion Como Entero
	        multilplicacion <- numero_1 * numero_2
	        Definir division Como Real
	        division <- numero_1 / numero_2
	        Escribir "El resultado de la suma es " suma
	        Escribir "El resultado de la resta es " resta
	        Escribir "El resultado de la multiplicacion es " multilplicacion
	        Escribir "El resultado de la division es " division
        FinAlgoritmo
    </code>
</pre>

<br>

<h2>Ejercicio 2</h2>
<h3>Area y perimetro del rectangulo</h3>
    <pre>
        <code>
            Algoritmo Area_perimetro
	            Escribir "Escribe la base"
	            Leer Base
	            Escribir "Escribe la altura"
	            Leer Altura
	            Definir area Como Real
	            resultado_area <- Base * Altura
	            Escribir "El area el igual al: " resultado_area
	            Definir perimetro Como logico
	            resultado_perimetro <-  (Base + Altura) * 2
	            Escribir "El perimetro es igual a " resultado_perimetro
            FinAlgoritmo
        </code>
    </pre>

<br>

<h2>Ejercicios 3</h2>
<h3>Promedio de tres numeros</h3>
    <pre>
        <code>
            Algoritmo pr0medio
	            Escribir "Escribe el primer numero"
	            Leer number_1
	            Escribir "Escribe el segundo numero"
	            Leer number_2
	            Escribir "Escribe el tercer numero"
	            Leer number_3
	            Definir promedio Como Entero
	            media <- (number_1 + number_2 + number_3) /3
	            Escribir 'El resultado es ' media
            FinAlgoritmo
        </code>
    </pre>

<br>


<h2>Ejercicios 4</h2>
<h3>Conversor de temperatura</h3>
    <pre>
        <code>
            Algoritmo conversior_grados
	            Escribir "Grados en °C"
	                Leer grados_Celsius
	                Definir celsus Como Real
	                convertidor <- grados_Celsius *(9/5)+32
	                Escribir  "grados °F " convertidor
            FinAlgoritmo
        </code>
    </pre>

<br>

<h2>Ejercicios 5</h2>
<h3>Edad en dias</h3>
    <pre>
        <code>
            Algoritmo edad_en_dias
	            Escribir "Ingresa tu edad Edad"
	            Leer edad
	            Definir edad_en_dia Como Entero
	            dias <- edad * 365
	            Escribir 'Los dias que has vivido son ' dias
            FinAlgoritmo
        </code>
    </pre>

<br>

<h2>Ejercicios 6</h2>
<h3>Costo de llamada telefonica</h3>
    <pre>
        <code>
            Algoritmo Costo_de_llamada
	            Escribir "Cuantos minutos duro tu llamada?"
	            Leer c
	            Definir llamada Como real
	            costo <- c * 0.50
	            Escribir  costo
            FinAlgoritmo
        </code>
    </pre>

<br>


<h2>Ejercicios 7</h2>
<h3>Calculo de descuento</h3>
    <pre>
        <code>
        Algoritmo descuento 
	        Definir precio Como Real
	        Escribir "Precio del producto"
	        leer precio
	        descuent0 <- (precio *10) /100 
	        Escribir " Precio original " precio, " Descuento 10% ", " Precio total " precio - descuent0
        FinAlgoritmo
    </code>

</pre>

<br>

<h2>Ejercicios 8</h2>
<h3>Dias en segundos</h3>
    <pre>
        <code>
            Algoritmo dias
	            Escribir "Escribir los dias: "
	            Leer d1as
	            Definir segund0s Como Real
	            segunfos <- d1as*24*3600
	            Escribir "Los segundos totales son: " segunfos
            FinAlgoritmo
        </code>
    </pre>

<br>

<h2>Ejercicios 9</h2>
<h3>Divisibilidad</h3>
    <pre>
        <code>
    Algoritmo divisibilidad
	    Escribir "Ingresa numero"
	    Leer number
	    si number % 5 = 0 Entonces
	    Escribir "Numero divisible en 5"
	    FinSi
        si number % 3 = 0 Entonces
		Escribir "Numero divisible en 3"
	    FinSi
    FinAlgoritmo
        </code>
    </pre>
<br>

<h2>Ejercicios 10</h2>
<h3>Minutos a horas y minutos</h3>
    <pre>
        <code>
            Algoritmo dias_horas
	            Escribir "numero de minutos: "
	            Leer numer0
	            Definir horas Como Real
	            hora <- numer0 / 60
	            minutos <- numer0 * 60
	            Escribir "Horas en total " hora " Minutos en total " minutos
            FinAlgoritmo
        </code>
    </pre>
<br>