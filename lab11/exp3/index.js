const express = require('express');
const jwt = require ('jsonwebtoken');
const app = express();

app.get('/api' ,(req,res)=>{
    res.json({
        mensaje: "Esta es la Data de Clientes"
    });
});

app.post('/api/posts',(req,res)=>{
    res.json({
        mensaje:"Post Creado..."
    });
});

app.post('/api/login',(req,res)=>{
    const user = {
        id: 1,
        username: "aruiz",
        email: "aruiz@gmail.com"
    }

    jwt.sign({user},'secretkey',{expiresIn:'30s'},(err,token) =>{
        res.json({
            token
        });
    });
});

app.listen(5000,() =>console.log("Servidor esta ejecutandose en el puerto 5000"));