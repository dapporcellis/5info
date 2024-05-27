import express from 'express';
const router = express.Router();
import autenticacao from '../config/autenticacao.js'

import passport from '../config/passport.js';

//import { upload,helloworld,hellonome,abrecalculadora,calculadora,abretabela,tabela,qualquernome,nomesobrenome,soma,pesquisar, abrirupload } from '../controllers/controllers.js';

import {
    abretela,
    cadastrausuario,
    deletarusuario,
    mostrausuarios,
    buscarusuarios,
    abretelaeditar,
    editarusuario,
    abrelogin,
    abrepostadd,
    postadd,
    postlist,
    postfiltro,
    postdelete,
    abrepostedit,
    postedit
} from '../controllers/controllers.js';

import multer from 'multer';
const foto = multer({
    dest: './public'
})

router.get('/usuario',autenticacao, abretela)
router.post('/usuario',autenticacao, foto.single('foto'), cadastrausuario)

router.get('/mostrausuarios',autenticacao, mostrausuarios)
router.post('/mostrausuarios',autenticacao, buscarusuarios)

router.get('/editarusuario/:id',autenticacao, abretelaeditar)
router.post('/editarusuario/:id',autenticacao, editarusuario)

router.get('/deletarusuario/:id',autenticacao, deletarusuario)

//rota para abrir a tela de login
router.get('/', abrelogin)

router.post('/', passport.authenticate('local', {
    successRedirect: '/usuario',
    failureRedirect: '/'
}));

//abre a tela de post add
router.get('/postadd',autenticacao, abrepostadd)
//recebe dados de post add
router.post('/postadd',autenticacao, foto.single('foto'), postadd)

//rota para listar os posts
router.get('/postlist',autenticacao, postlist)
//rota para listar os posts com filtro
router.post('/postlist',autenticacao, postfiltro)

//rota para deletar post
router.get('/postdelete/:id',autenticacao, postdelete)

//rota de abrir tela de edit do post
router.get('/postedit/:id',autenticacao, abrepostedit)
//rota para editar dados do post
router.post('/postedit/:id',autenticacao, foto.single('foto'), postedit)


/*
router.get('/', helloworld)

router.get('/diego', hellonome)

//rota para abrir a página calculadora.ejs
router.get('/calculadora', abrecalculadora)

//rota para receber dados da calculadora e mostrar o resultado final
router.post('/calculadora', calculadora)

router.get('/tabela', abretabela)

router.post('/tabela', tabela)

router.get('/upload', abrirupload)
router.post('/upload', foto.single('foto') , upload)

router.get('/:nome', qualquernome)

router.get('/:nome/:sobrenome', nomesobrenome)

router.get('/soma/:x/:y', soma)

router.post('/pesquisar', pesquisar)

*/

export default router;