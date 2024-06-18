CREATE TABLE clientes (
    id INTEGER NOT NULL,
    nombre VARCHAR2(250)NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE productos(
    id INTEGER NOT NULL,
    nombre_producto VARCHAR2(250) NOT NULL,
    precio NUMBER  NULL,
    stock INTEGER NULL,
    categoria_id INTEGER NOT NULL,
    PRIMARY KEY(id) ,
 FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);
CREATE TABLE categorias(
    id  INTEGER NOT NULL,
    nombre VARCHAR2(250) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE pedidos(
id INTEGER NOT NULL,
cliente_id INTEGER NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE detalle_pedidos(
    pedido_id INTEGER NOT NULL,
    producto_id INTEGER NOT NULL,
    cantidad INTEGER NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (producto_id)REFERENCES productos(id)
);

                                                        --Procedimiento
CREATE OR REPLACE PROCEDURE insertar_categoria  (p_id INTEGER, p_nombre VARCHAR2,p_ids OUT INTEGER) 
    IS
    
BEGIN
    
    INSERT INTO categorias VALUES(p_id,p_nombre);
    p_ids := p_id + 1;
    
END insertar_categoria;
    
    EXECUTE insertar_categoria(1,'bebidas');
    
    EXECUTE insertar_categoria(2,'comida');
    
                                                    --Funcion
CREATE OR REPLACE FUNCTION insert_categoria  (p_id INTEGER, p_nombre VARCHAR2)RETURN INTEGER IS
    BEGIN
    
    INSERT INTO categorias VALUES(p_id,p_nombre);
    
    RETURN p_id + 1;
    END insert_categoria;

SET SERVEROUTPUT ON;

DECLARE
BEGIN


DBMS_OUTPUT.PUT_LINE(insert_categoria(9,'snacks'));

END;



--Bloque anonimo
SET SERVEROUT ON;
DECLARE
    ids INTEGER;
BEGIN
    insertar_categoria(10,'perfumes',ids);
    
    DBMS_OUTPUT.PUT_LINE(ids);
END;


COMMIT;


      