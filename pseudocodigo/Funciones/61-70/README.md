<h2>Ejercicio 1</h2>
        <h3>Suma de dos numeros</h3>
    <pre>
            <code>
                Funcion suma <- num(a,b)
                    resultado = a + b
                Fin Funcion
                Algoritmo Suma_num
                    resultado = 5+5
                        Escribir 'El resultado es ' resultado
                FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 2</h2>
        <h3>Factorial de un numero</h3>
    <pre>
            <code>
                Funcion resultado <- factorial( x )
	                resultado = 1
	                    Para i=1 Hasta x Con Paso 1 Hacer
		                    resultado= resultado*i
	                    Fin Para
                Fin Funcion
                Algoritmo Factor_de_num
	                resultado=factorial(4)
	                Escribir 'El factorial es ' resultado
	        FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 3</h2>
        <h3>Mayor de numeros</h3>
    <pre>
            <code>
                Funcion resultado <- numero_alto ( numer1,numer2,numer3 )
	                    Escribir 'Escribe el primer numero'
	                    Leer numer1
	                    Escribir 'Escribe el segundo numero'
	                    Leer numer2
	                    Escribir 'Escribe el tercer numero'
	                    Leer numer3
	                        Si numer1 > numer2 y numer1 > numer3 Entonces
		                        Escribir numer1
	                        FinSi
	                        Si numer2 > numer3 y numer2 > numer1 Entonces
		                        Escribir 'El numero ' numer2 ' es el mayor'
	                        FinSi
                            Si numer3 > numer2 y numer3 > numer1 Entonces
			                        Escribir 'El numero ' numer3 ' es el mayor'
	                        Fin Si
                Fin Funcion
                Algoritmo numero_mayor
	                resultado = numero_alto(numer1,numer2,numer3)
                FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 4</h2>
        <h3>Area del circulo</h3>
    <pre>
            <code>
                Funcion resultado <- area ( x )
	                operar = x*x
	                num_pi= 3.14
	                resultado = num_pi * operar^2 
                Fin Funcion
            Algoritmo Area_circulo
	                resultado = area(1)
	                    Escribir 'El area es ' resultado
	        FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 5</h2>
        <h3>Potencia de un numero</h3>
    <pre>
            <code>
                Funcion resultado (base,exponente,almacenar)
	                si exponente > 0 Entonces
		                almacenar = almacenar * base
		                exponente = exponente - 1
		                Escribir almacenar
		                resultado(base,exponente,almacenar)
	                FinSi
                Fin Funcion
            Algoritmo potencia
	            resultado(5,4,1)
            FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 6</h2>
        <h3>Orden de lista</h3>
    <pre>
            <code>
                Funcion resultado ( lista_num )
	                Dimension lista_nu[5]
	                lista_nu[1] = 99
	                lista_nu[2] = 74
	                lista_nu[3] = 100
	                lista_nu[4] = 10
	                lista_nu[5] = 55
	                    Para i=1 Hasta 5 Con Paso 1 Hacer
		                    num = lista_nu[i]
		                Para p=i + 1 Hasta 5 Con Paso 1 Hacer
			        Si lista_nu[i] > lista_nu[p]
				        lista_nu[i] = lista_nu[p]
				        lista_nu[p] = num
				        num = lista_nu[i]
			        FinSi
			FinPara
		Escribir lista_nu[i]
	FinPara
Fin Funcion
        Algoritmo orden 
	    //Mostrar lista y asignarle valores
            resultado(lista_num)
	    FinAlgoritmo
	    </code>
    </pre>
<br>

<h2>Ejercicio 7</h2>
        <h3>Promedio de lista</h3>
    <pre>
            <code>
                
            </code>
    </pre>
<br>

<h2>Ejercicio 8</h2>
        <h3>Inversion de una cadena</h3>
    <pre>
            <code>
            
            </code>
    </pre>
<br>

<h2>Ejercicio 9</h2>
        <h3>Verificar numero primo</h3>
    <pre>
            <code>

            </code>
    </pre>
<br>

<h2>Ejercicio 10</h2>
        <h3>Conversor de grados</h3>
    <pre>
            <code>
            
            </code>
    </pre>
