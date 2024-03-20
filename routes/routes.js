import express from 'express';
const router = express.Router();

//import { upload,helloworld,hellonome,abrecalculadora,calculadora,abretabela,tabela,qualquernome,nomesobrenome,soma,pesquisar, abrirupload } from '../controllers/controllers.js';

import {abretela,mostradados} from '../controllers/controllers.js';

import multer from 'multer';
const foto = multer({dest:'./public'})

router.get('/usuario', abretela)
router.post('/usuario', foto.single('foto'), mostradados)

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
