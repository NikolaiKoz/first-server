const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index', {
        title: "My web store"
    });
});

router.get('/products', (req, res, next) => {
    res.render('products', {
        title: "list of Products"
    });
});

module.exports = router;