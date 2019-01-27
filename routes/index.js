let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', require('./login').get);
router.get('/login', require('./login').get);
router.post('/login', require('./login').post);
router.get('/register', require('./register').get);
router.post('/register', require('./register').post);

module.exports = router;
