<h2>Ejercicio 1</h2>
        <h3>Numero positivo y negativo</h3>
    <pre>
            <code>
                Algoritmo positivo_o_negativo
                    Escribir "Escribe un numero"
                    Leer number
                    //condicion
                    si number > 0 Entonces
                        Escribir "El numero es positivo"
                    FinSi
                        si number < 0 Entonces
                        Escribir "El numero es negativo"
                    FinSi
                FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 2</h2>
        <h3>Par impar</h3>
    <pre>
            <code>
                Algoritmo Par_impar
                    Escribir "Pon un numero: "
                    Leer number
                    si number % 2 = 0 Entonces
                        Escribir "El numero es par"
                    FinSi
                    si number % 2 = 1 Entonces
                        Escribir "El numero es impar"
                    FinSi
                FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 3</h2>
        <h3>Dia de la semana</h3>
    <pre>
            <code>
                Algoritmo semana
                            Escribir "Ingresa un numero"
                            Leer numer0
                    si numer0 = 1 Entonces
                        Escribir "lunes"
                    FinSi
                    si numer0 = 2 Entonces
                        Escribir "martes"
                    FinSi
                    si numer0 = 3 Entonces
                        Escribir "miercoles"
                    FinSi
                    si numer0 = 4 Entonces
                        Escribir "jueves"
                    FinSi
                    si numer0 = 5 Entonces
                        Escribir "viernes"
                    FinSi
                    si numer0 = 6 Entonces
                        Escribir "sabado"
                    FinSi
                    si numer0 = 7 Entonces
                        Escribir "domingo"
                    FinSi
                FinAlgoritmo

            </code>
    </pre>
<br>

<h2>Ejercicio 4</h2>
        <h3>Mayor de tres numeros</h3>
    <pre>
            <code>
                Algoritmo m4yor
                        Escribir "Un numero"
                        Leer number1
                        Escribir "Un numero"
                        Leer number2
                        Escribir "Un numero"
                        Leer number3
                        Definir may04 Como Entero
                        may0r <- number1
                        si number2 > may0r Entonces
                        may0r = number2
                        FinSi
                        si number3 > may0r Entonces
                            may0r = number3
                        FinSi
                        Escribir "El numero mayor:" may0r
                FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 5</h2>
        <h3>Aprobado y negativo</h3>
    <pre>
            <code>
                Algoritmo Not4
                    Escribir "Ingrese su nota "
                    Leer nota
                    si nota >= 60 Entonces
                        Escribir "Aprobado"
                    FinSi
                    si nota <= 60 Entonces
                        Escribir "Reprobado"
                    FinSi
                FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 6</h2>
        <h3>Rango de numeros</h3>
    <pre>
            <code>
            Algoritmo range
                Escribir "Pedir numero "
                Leer number
                si number = 1 Entonces
                    Escribir "Esta en el rango"
                FinSi
                si number = 2 Entonces
                    Escribir "Esta en el rango"
                FinSi
                si number = 3 Entonces
                    Escribir "Esta en el rango"
                FinSi
                si number = 4 Entonces
                    Escribir "Esta en el rango"
                FinSi
                si number = 5 Entonces
                    Escribir "Esta en el rango"
                FinSi
                si number = 6 Entonces
                    Escribir "Esta en el rango"
                FinSi
                si number = 7 Entonces
                    Escribir "Esta en el rango"
                FinSi
                si number = 8 Entonces
                    Escribir "Esta en el rango"
                FinSi
                si number = 9 Entonces
                    Escribir "Esta en el rango"
                FinSi
                si number = 10 Entonces
                    Escribir "Esta en el rango"
                FinSi
            FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 7</h2>
        <h3>Categoria de edad</h3>
    <pre>
            <code>
            Algoritmo Categoria
                    Escribir "Ingresa tu edad"
                    Leer edad
                    si edad >= 0 y edad <= 12 Entonces
                        Escribir "Niño"
                    FinSi
                    si edad >= 13 y edad <= 15 Entonces
                        Escribir "Adolescente"
                    FinSi
                    si edad >= 18 y edad <= 64 Entonces
                        Escribir "Adulto"
                    FinSi
                    si edad >= 65 
                        Escribir "Adulto mayor"
                    FinSi
            FinAlgoritmo  
            </code>
    </pre>
<br>

<h2>Ejercicio 8</h2>
        <h3>Calculadora de descuentos</h3>
    <pre>
            <code>
                Algoritmo descuento
                        Escribir "Ingresa el precio del producto"
                        Leer Precio
                        si Precio <= 100 Entonces
                            Escribir "Precio original"
                        FinSi
                        si Precio >= 100 Entonces
                            Escribir "Tu decuento es del"
                            Escribir (Precio * 0.10)
                            FinSi
                FinAlgoritmo
            </code>
    </pre>
<br>

<h2>Ejercicio 9</h2>
        <h3>Divisible entre 3 y 5</h3>
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

<h2>Ejercicio 10</h2>
        <h3>Dia habil o fin de semana</h3>
    <pre>
            <code>
                Algoritmo dia
                    Escribir "Ingresa un numero que corresponda a la semana"
                    Leer Number
                    si Number >= 1 y Number <= 5 Entonces
                        Escribir "Es un dia habil"
                    FinSi
                    si Number >= 6 y Number <= 7 Entonces
                        Escribir "Es un fin de semana"
                    FinSi
                FinAlgoritmo
            </code>
    </pre>
