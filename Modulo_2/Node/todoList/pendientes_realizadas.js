const express = require('express')
const run = require('./cosultas')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', async (req, res) => {
    let result = await run(`SELECT 'Hola' AS saludo, :id AS id
        FROM dual

        UNION

        SELECT 'Hola' AS saludo, 109 AS id 
        FROM dual`,[103]);
    res.send(result)
})

app.get('/api/user', async (req, res) => {
    console.log(req.query)
    let result = await run(`SELECT id, name_user, password
        FROM users_todolist
        WHERE id = :id
        `,[req.query.id]);
    res.send(result)
})


app.post('/api/user', async (req,res) => {
    console.log(req.body)

    let result = await run(
        `BEGIN
            INSERT INTO users_todolist VALUES(:id,:name_user,:password);
            COMMIT;
        END;`,
        [req.body.id, req.body.name_user,req.body.password]
    );
    res.send(result)
}); 


app.put('/api/user', async (req,res) => {

    let result = await run(
        `BEGIN
             UPDATE users_todolist
                SET name_user = :name_user, password = :password
            WHERE id = :id; 
                COMMIT;
            END;`,
        [req.body.id, req.body.name_user,req.body.password]
    );
    res.send(result)
}); 


app.patch('/api/user', async (req,res) => {

    let result = await run(
        `BEGIN
             UPDATE users_todolist
                SET name_user = :name_user
            WHERE id = :id; 
                COMMIT;
            END;`,
            [req.body.name_user, req.body.id_user]
    );
    res.send(result)
}); 

app.delete('/api/user', async (req,res) => {

    let result = await run(
        ` BEGIN
                DELETE FROM users_todolist
                WHERE id = :id; 
                COMMIT;
            END;`,
        [req.body.id]
    );
    res.send(result)
}); 

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
