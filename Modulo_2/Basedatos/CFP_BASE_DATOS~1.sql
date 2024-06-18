INSERT INTO encargados (id,dpi,nombre,apellido,telefono,direccion,telefono_adicional,correo,ocupacion,edad)
        VALUES(1,655820101,'Jake','Long',85659525,'zona 8',54896547,'cfp@gmail.com','ingeniero');
        
INSERT INTO encargados values(2,25648740101,'Juan','Bodoque',87986525,'zona 8',63654524,'machine@gmail.com','maestro');
INSERT INTO encargados values(3,954462840101,'Armando','Hoyos',964776543,'zona 6',84269845,'cricko@gmail.com','doctor');
INSERT INTO encargados values(4,9617650451,'Spiter','Man',58433215,'zona 16',63654524,'machinefire@gmail.com','biologo');

UPDATE encargados
    SET apellido = 'Tulio', direccion= 'zona 5',ocupacion = 'psiquiatra'
    WHERE id = 2
    AND dpi = 25648740101
    AND ocupacion = 'maestro';
    


DELETE FROM encargados 
WHERE id = 3;

INSERT INTO estuadiantes(id,dpi,nombre,apellido,encargado_id,telefono,direccion,correo,edad)
                    SELECT 1,dpi,nombre,apellido,id,telefono,direccion,correo,22
                    FROM encargados
                    WHERE id = 2;

COMMIT;
ROLLBACK;

 