import Usuario from '../models/usuario.js'

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

export function abretela(req,res){
    res.render('usuario')
}

export async function cadastrausuario(req,res){
    const usuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        foto: req.file.filename,
        datanasc: req.body.datanasc
    })

    console.log(usuario)

    await usuario.save()
    res.render('usuario')

}

export async function mostrausuarios(req, res) {
    let usuarios = await Usuario.find({})
    res.render('mostrausuarios',{Usuarios:usuarios})
}

export async function buscarusuarios(req, res) {
    let usuarios = await Usuario.find({nome: req.body.pesquisar})
    res.render('mostrausuarios',{Usuarios:usuarios})
}

export async function abretelaeditar(req, res) {
    let usuario = await Usuario.findById(req.params.id)
    res.render('editausuario',{Usuario:usuario})
}

export async function editarusuario(req, res) {
    let usuario = await Usuario.findById(req.params.id)
    usuario.nome = req.body.nome;
    usuario.email = req.body.email;
    usuario.senha = req.body.senha;
    usuario.datanasc = req.body.datanasc;
    await usuario.save()
    res.redirect('/mostrausuarios')
}