<h2>Ejercicio 1</h2>
        <h3>Suma de matrices</h3>
    <pre>
            <code>
                    Algoritmo Sumar_matrices
	                    Dimension m1[3,3]
	                    Dimension m2[3,3]
	                    //valores del m1
                            m1[1,1] = 1
                            m1[1,2] = 1
                            m1[1,3] = 1
                            m1[2,1] = 1
                            m1[2,2] = 1
                            m1[2,3] = 1
                            m1[3,1] = 1
                            m1[3,2] = 1
                            m1[3,3] = 1
                            //valores del m2
                            m2[1,1] = 1
                            m2[1,2] = 1
                            m2[1,3] = 1
                            m2[2,1] = 1
                            m2[2,2] = 1
                            m2[2,3] = 1
                            m2[3,1] = 1
                            m2[3,2] = 1
                            m2[3,3] = 1
	                        //bucle para la primer matrix
                                Para i = 1 Hasta 3 Con Paso 1 Hacer
                                    Para j = 1 Hasta 3 Con Paso 1 Hacer
                                        suma = suma + m1[i,j]
                                    Fin Para
                                Fin Para
                                Escribir 'suma de la primera matri: ' suma
                            //bucle para el segundo matrix
                                Para i = 1 Hasta 3 Con Paso 1 Hacer
                                    Para j = 1 Hasta 3 Con Paso 1 Hacer
                                        suma2 = suma2 + m2[i,j]
                                    Fin Para
                                Fin Para
                                Escribir 'suma de la segunda matris: ' suma2
                                Escribir 'suma de las dos matrices: ' suma + suma2
                    FinAlgoritmo
                </code>
    </pre>
<br>

<h2>Ejercicio 2</h2>
        <h3>Promedio de una lista</h3>
    <pre>
            <code>
                Algoritmo Promedio_columna
                                    Definir fila,columna,matriz,contar Como Entero
                                    Dimension matriz[3,4]
                                        matriz[1,1] = 52
                                        matriz[1,2] = 82
                                        matriz[1,3] = 96
                                        matriz[1,4] = 10
                                        matriz[2,1] = 36
                                        matriz[2,2] = 45
                                        matriz[2,3] = 78
                                        matriz[2,4] = 22
                                        matriz[3,1] = 74
                                        matriz[3,2] = 25
                                        matriz[3,3] = 45
                                        matriz[3,4] = 5
                    Para fila=1 Hasta 3 Con Paso 1 Hacer
                        Para columna = 1 Hasta 4 Con Paso 1 Hacer
                            //Para la columna 1 
                            si matriz[fila,columna] = matriz[fila,1] Entonces
                                suma1 = suma1 + matriz[fila,columna]
                                division1 = suma1/fila
                            FinSi
                                    //Para la columna 2
                                        si matriz[fila,columna] = matriz[fila,2] Entonces
                                            suma2 = suma2 + matriz[fila,columna]
                                            division2 = suma2/fila
                                        FinSi
                                        //Para la columna 3
                                        si matriz[fila,columna] = matriz[fila,3] Entonces
                                            suma3 = suma3 + matriz[fila,columna]
                                            division3 = suma3/fila
                                        FinSi
                                        //Para la columna 4
                                        si matriz[fila,columna] = matriz[fila,4] Entonces
                                            suma4 = suma4 + matriz[fila,columna]
                                            division4 = suma4/fila
                                        FinSi
                                        Escribir matriz[fila,columna] '  ' Sin Saltar
                                    Fin Para
                                    Escribir ' '
                                Fin Para
                                Escribir 'Suma de las columnas'
                                Escribir suma1 ' ',suma2 ' ',suma3 ' ',suma4 
                                Escribir 'Promedio de la columna 1 ' division1
                                Escribir 'Promedio de la columna 2 ' division2
                                Escribir 'Promedio de la columna 3 ' division3
                                Escribir 'Promedio de la columna 4 ' division4
                FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejecicio 3</h2>
        <h3>Suma de diagonales</h3>
    <pre>
            <code>
                    Algoritmo Sumar_diagonales
	                            Definir sumar,diagonal Como Entero
	                        Dimension diagonal[5,5]
                                diagonal[1,1] = 1
                                diagonal[1,2] = 6
                                diagonal[1,3] = 7
                                diagonal[1,4] = 9
                                diagonal[1,5] = 1
                                diagonal[2,1] = 6
                                diagonal[2,2] = 9
                                diagonal[2,3] = 7
                                diagonal[2,4] = 1
                                diagonal[2,5] = 9
                                diagonal[3,1] = 2
                                diagonal[3,2] = 7
                                diagonal[3,3] = 1
                                diagonal[3,4] = 4
                                diagonal[3,5] = 3
                                diagonal[4,1] = 8
                                diagonal[4,2] = 1
                                diagonal[4,3] = 7
                                diagonal[4,4] = 2
                                diagonal[4,5] = 8
                                diagonal[5,1] = 1
                                diagonal[5,2] = 6
                                diagonal[5,3] = 4
                                diagonal[5,4] = 8
                                diagonal[5,5] = 7
                                sumar = 0
                        Para fila=1 Hasta 5 Con Paso 1 Hacer
                            Para columna=1 Hasta 5 Con Paso 1 Hacer
                                Escribir diagonal[fila,columna] ' || ' Sin Saltar 
                            Fin Para
                            Escribir ' '
                        Fin Para
                        //Suma de diagonal principal
                        Para i=1 Hasta 5 Con Paso 1 Hacer
                            sumar = sumar + diagonal[i,i]
                        Fin Para
                        Escribir 'Suma de la primera diagonal ' sumar
                        suma_secundario = 0
                        //Suma de la diagonal secundario
                        Para i=1 Hasta 5 Con Paso 1 Hacer
                            suma_secundario = suma_secundario + diagonal[i,6-i]
                        Fin Para
                        Escribir 'Suma de la diagonal secundario ' suma_secundario
                FinAlgoritmo    
            </code>
    </pre>
<br>

<h2>Ejercicio 4</h2>
        <h3>Mayor elemento de una fila</h3>
    <pre>
            <code>
                Algoritmo Mayor_elemento
                        Definir matriz Como Entero
                        Dimension matriz[4,3]
                                    matriz[1,1] =  94
                                    matriz[1,2] =  10
                                    matriz[1,3] =  87
                                    matriz[2,1] =  32
                                    matriz[2,2] =  100
                                    matriz[2,3] =  9
                                    matriz[3,1] =  8
                                    matriz[3,2] =  75
                                    matriz[3,3] =  97
                                    matriz[4,1] =  85
                                    matriz[4,2] =  41
                                    matriz[4,3] =  87
                                        Para fila=1 Hasta 4 Con Paso 1 Hacer
                                            Para columna=1 Hasta 3 Con Paso 1 Hacer
                                                Escribir matriz[fila,columna] ' || ' Sin Saltar
                                            Fin Para
                                            Escribir ' '
                                        Fin Para
                                        //Mayor de la primera fila
                                        Para i=1 Hasta 4 Con Paso 1 Hacer
                                            Si matriz[i,1] > mayor Entonces
                                                mayor = matriz[i,i]
                                            Fin Si
                                        Fin Para
                                        //Mayor de la segunda fila
                                        Para i=1 Hasta 4 Con Paso 1 Hacer
                                            Si matriz[i,2] > mayor Entonces
                                                mayor1 = matriz[i,i]
                                            Fin Si
                                        FinPara
                                        //Mayor de la segunda fila
                                            Para i=1 Hasta 4 Con Paso 1 Hacer
                                                Si matriz[i,3] > mayor Entonces
                                                    mayor2 = matriz[i,i]
                                                Fin Si	
                                        Fin Para
                                        Escribir 'El mayor de cada fila 1 es ' mayor
                                        Escribir 'El mayor de cada fila 2 es ' mayor1
                                        Escribir 'El mayor de cada fila 3 es ' mayor2 
                        FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 5 </h2>
        <h3>Rotacion de matriz</h3>
    <pre>
            <code>
                Algoritmo Rotar_matriz
                    Definir matrix Como Entero
                    Dimension matrix[4,4]
                        matrix[1,1] = 1
                        matrix[1,2] = 2
                        matrix[1,3] = 3
                        matrix[1,4] = 4
                        matrix[2,1] = 5
                        matrix[2,2] = 6
                        matrix[2,3] = 7
                        matrix[2,4] = 8
                        matrix[3,1] = 9
                        matrix[3,2] = 10
                        matrix[3,3] = 11
                        matrix[3,4] = 12
                        matrix[4,1] = 13
                        matrix[4,2] = 14
                        matrix[4,3] = 15
                        matrix[4,4] = 16
                        //Matriz normal
                        Escribir 'Matriz normal'
                        Para fila = 1 Hasta 4 Con Paso 1 Hacer
                            Para columna = 1 Hasta 4 Con Paso 1 Hacer
                                Escribir matrix[fila,columna] ' || ' Sin Saltar
                            Fin Para
                            Escribir ' '
                        Fin Para
                        //Matriz rotada al sentido del reloj
                        Escribir 'Matriz rotada al sentido del reloj ' 
                        Para fila = 1 Hasta 4 Con Paso 1 Hacer
                            Para columna = 4 Hasta 1 Con Paso -1 Hacer
                                Escribir matrix[fila,columna] ' || ' Sin Saltar
                            Fin Para
                            Escribir ' '
                        Fin Para
                FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejecicio 6</h2>
        <h3>Laberinto</h3>
    <pre>
            <code>
            </code>
    </pre>
<br>

<h2>Ejercicio 7</h2>
        <h3>Juego de la vida</h3>
    <pre>
            <code>
            </code>
    </pre>
<br>

<h2>Ejercicio 8</h2>
        <h3>Laberinto con obstaculos</h3>
    <pre>
            <code>
            </code>
    </pre>
<br>

<h2>Ejercicio 9</h2>
        <h3>Rompecabezas del 15</h3>
    <pre>
            <code>
            </code>
    </pre>
<br>

<h2>Ejercicio 10</h2>
        <h3>Sudoku Solver</h3>
    <pre>
            <code>
                Algoritmo sin_titulo
	                Definir sudoku Como Entero
	                Definir separador Como Caracter
	                Definir repetir_num Como Logico
	                Dimension sudoku[9,9]
	                    Para fila=1 Hasta 9 Con Paso 1 Hacer
		                    Para columna=1 Hasta 9 Con Paso 1 Hacer
			                    Escribir sudoku[fila,columna] ' | ' Sin Saltar
		                    Fin Para
	                    Fin Para
	                Escribir ' ' 
                        Para fila <- 1 Hasta 9 Hacer
                            Para columna <- 1 Hasta 9 Hacer
                                Escribir sudoku[fila, columna] , " "
                            FinPara
                        FinPara
	                    Si columna == 3  o columna == 6  entonces
                            Escribir(" | ")
                        FinSi
                            Escribir(" ")
                            Si fila == 3 O fila == 6 entonces
                                Escribir("---------------------")
                            FinSi
	                            inicioColumna <- ((columna - 1) / 3) * 3 + 1
                                inicioColumna <- ((columna))
	                                Para i <- inicioFila Hasta inicioFila + 2 Hacer
                                        Para j <- inicioColumna Hasta inicioColumna + 2 Hacer
			                                Si sudoku[i, j] = numer entonces
                                                existe = Falso
                                            FinSi
		                                FinPara
	                                FinPara
	            FinAlgoritmo
            </code>
    </pre>
