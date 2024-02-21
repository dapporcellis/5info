import express from 'express';
const app = express();
const port = 3000

app.get('/', (req,res)=>{
    res.send('Hello World!')
})

app.get('/diego', (req,res)=>{
    res.send("Hello Diego!")
})

app.get('/:nome', (req,res)=>{
    res.send(req.params.nome)
})

app.get('/:nome/:sobrenome', (req,res)=>{
    res.send(req.params.nome+" "+req.params.sobrenome)
})

app.get('/soma/:x/:y', (req,res)=>{
    const soma = parseInt(req.params.x)+parseInt(req.params.y)
    res.send("O resultado da soma é: "+soma)
})

app.listen(port)