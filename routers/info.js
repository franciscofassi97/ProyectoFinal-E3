const express = require('express');
const router = express.Router();
const { recuperarInfo, test } = require('../controllers/infoController');


router.get('/', recuperarInfo);

router.get('/testCambio', test)

module.exports = router;