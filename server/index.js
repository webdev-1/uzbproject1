const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "user"
}); 

const port = (process.env.port || 8080);

app.use(bodyParser());

app.use(cors());  

// app.use(function(req,res,next){
//     res.setHeader("Allow-Cross-Origin", "*")
//     next();
// })

app.get('/', (req,res) => {
    res.send(`Let's see if the server is up and running`);
});

app.get('/user', (req,res) => {
    const USER_QUERY = `SELECT * FROM user_table`;
    connection.query(USER_QUERY, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.send(results);
        }
    });
});


app.post('/auth', (req, res) => {
    const { email , password } = req.body;
    const USER_QUERY = `SELECT * FROM user_table WHERE user_email = "${email}"`;
    connection.query(USER_QUERY, (error, results) => {
        if (error) {
            console.log(error);
        }  else {
            const userPassword = results[0].user_password;
            if (password === userPassword) {
                res.send(email);
            } else {
                res.send('Error, password did not match');
            }
        }
    }) 
})

connection.connect((err) => {
    if(err) {
        return err;
    } else {
        console.log(`Database user is successfully connected!`);
        app.listen(port, () => {
            console.log(`The server is listening on Port: ${port}`);
        });
    }
});

