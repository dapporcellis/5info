import express from 'express';
const app = express();
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/diego', (req,res)=>{
    res.send("Hello Diego!")
})

//rota para abrir a página calculadora.ejs
app.get('/calculadora', (req,res)=>{
    res.render('calculadora')
})

//rota para receber dados da calculadora e mostrar o resultado final
app.post('/calculadora', (req,res)=>{
    const operacao = req.body.operacao;
    const valor1 = parseInt(req.body.valor1)
    const valor2 = parseInt(req.body.valor2)
    let resultado;
    switch(operacao){
        case 'soma': 
            resultado = valor1+valor2; 
            break;
        case 'subtracao': 
            resultado = valor1-valor2; 
            break;
        case 'divisao': 
            resultado = valor1/valor2; 
            break;
        case 'multiplicacao': 
            resultado = valor1*valor2; 
            break;
    }
    res.render('calculadora',{operacao:operacao, resultado:resultado})
    
    //res.send("O resultado da "+operacao+" é "+resultado);

})

app.get('/tabela',(req,res)=>{
    res.render('tabela')
})

app.post('/tabela',(req,res)=>{
    console.log(req.body.linhas)
    res.render('tabela', {linhas:req.body.linhas})
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

app.post('/pesquisar', (req, res) => {
    res.send("Dados recebidos: "+req.body.nome)
})

app.listen(port)