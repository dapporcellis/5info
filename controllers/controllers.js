export function helloworld(req,res){
    res.render('index')
}

export function hellonome(req,res){
    res.send("Hello Diego!")
}

export function abrecalculadora(req,res){
    res.render('calculadora')
}

export function calculadora(req,res){
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
}

export function abretabela(req,res){
    res.render('tabela')
}

export function tabela(req,res){
    console.log(req.body.linhas)
    res.render('tabela', {linhas:req.body.linhas,colunas:req.body.colunas})
}

export function qualquernome(req,res){
    res.send(req.params.nome)
}

export function nomesobrenome(req,res){
    res.send(req.params.nome+" "+req.params.sobrenome)
}

export function soma(req,res){
    const soma = parseInt(req.params.x)+parseInt(req.params.y)
    res.send("O resultado da soma é: "+soma)
}

export function pesquisar(req, res) {
    res.send("Dados recebidos: "+req.body.nome)
}

export function abrirupload(req, res) {
    res.render('upload')
}

export function upload(req, res) {
    res.send("<img src='/"+req.file.filename+"'>")
}