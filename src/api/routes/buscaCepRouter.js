const  express = require('express');
const router = express.Router();

console.log("teste");

const buscaCepControllers = require('../controllers/buscaCepControllers');

router.get('/buscaCep', buscaCepControllers.index);

module.exports = router;