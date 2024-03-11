import express from 'express';
const router = express.Router();
import { soma, nomesobrenome, hellonome, 
    helloworld, calculadora, abrecalculadora, 
    abretabela, tabela, qualquernome, pesquisar } from '../controllers/controllers';

router.get('/', helloworld)

router.get('/diego', hellonome)

//rota para abrir a página calculadora.ejs
router.get('/calculadora', abrecalculadora)

//rota para receber dados da calculadora e mostrar o resultado final
router.post('/calculadora', calculadora)

router.get('/tabela', abretabela)

router.post('/tabela', tabela)

router.get('/:nome', qualquernome)

router.get('/:nome/:sobrenome', nomesobrenome)

router.get('/soma/:x/:y', soma)

router.post('/pesquisar', pesquisar)

export default router;
