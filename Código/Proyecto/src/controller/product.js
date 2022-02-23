const { Router, response } = require('express');
const router = new Router();

const mysqlConnection = require('../config/database.js');

router.get('/view', (req, res) => {

    mysqlConnection.query('SELECT * FROM product', (err, rows, fields) => {
        if (!err) {
            res.render('html/inventory.ejs', {
                rows
            });
        } else {
            console.log(err);
        }
    })
});

router.get('/listProduct', (req, res) => {
    mysqlConnection.query('SELECT * FROM product', (err, rows, fields) => {
        if (!err) {
            res.render('html/product.ejs', {
                rows
            });
        } else {
            console.log(err);
        }
    })
});


router.get('/register', (req, res) => {
    res.redirect('/html/addProduct.html');
});


router.post('/ver', (req, res) => {
    const IDPRODUCT = req.body.IDPRODUCT;
    console.log('ID:', req.body.IDPRODUCT);

    mysqlConnection.query('SELECT * FROM product WHERE IDPRODUCT = ?', [IDPRODUCT], (err, row) => {
        if (err) throw err
        if (row != IDPRODUCT) {
            // var rows = 0;
            res.render('html/searchProduct.ejs', {
                row
            });

        } else {
            res.render('html/searchProduct.ejs', {
                row
            });
        }
    })
});

router.post('/registerProduct', (req, res) => {
    const IDPRODUCT = req.body.IDPRODUCT;
    const NAMEPRODUCT = req.body.NAMEPRODUCT;
    const DESCRIPTIONPRODUCT = req.body.DESCRIPTIONPRODUCT;
    const IMAGEPRODUCT = req.body.IMAGEPRODUCT;
    const PRICE = req.body.PRICE;
    const AMOUNTPRODUCT = req.body.AMOUNTPRODUCT;
    const CATEGORY = req.body.OFERTA;
    mysqlConnection.query('INSERT INTO product (IDPRODUCT,NAMEPRODUCT,DESCRIPTIONPRODUCT,IMAGEPRODUCT,PRICE,AMOUNTPRODUCT,OFERTA) VALUES (?,?,?,?,?,?,?)', [IDPRODUCT, NAMEPRODUCT, DESCRIPTIONPRODUCT, IMAGEPRODUCT, PRICE, AMOUNTPRODUCT, CATEGORY], (err, rows) => {
        if (err) return res.send(err)
        res.redirect('/html/addProduct.html');
    })

});

router.put('update/:IdProduct', (req, res) => {
    const { IdProduct } = req.params;
    const { NameProduct, DescriptionProduct, ImageProduct, Price, AmountProduct, Category } = req.body;
    const query = `UPDATE product SET ${FirstName}, ${NameProduct},${DescriptionProduct},${ImageProduct},${Price},${AmountProduct},${Category} WHERE IdProduct = ${IdProduct}`;
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json({ status: 200 });
        } else {
            console.log(err);
        }
    });
});

router.get('/delete/:IdProduct', (req, res) => {
    console.log("ENtro");
    const id = req.params.IdProduct;
    mysqlConnection.query('DELETE FROM product WHERE IdProduct=?', [id], (err, rows, fields) => {
        if (err) return res.send(err)
        res.redirect(req.get('referer'));
    });
});

router.get('/edit/:IdProduct', (req, res) => {
    console.log("ENtro");
    const id = req.params.IdProduct;
    mysqlConnection.query('SELECT * FROM product WHERE IdProduct=?', [id], (err, rows, fields) => {
        if (err) return res.send(err)
        res.render('html/edit.ejs', {
            rows
        });
    });
});


router.post('/updatePro', (req, res) => {
    const IDPRODUCT = req.body.IDPRODUCT;
    const NAMEPRODUCT = req.body.NAMEPRODUCT;
    const DESCRIPTIONPRODUCT = req.body.DESCRIPTIONPRODUCT;
    const PRICE = req.body.PRICE;
    const AMOUNTPRODUCT = req.body.AMOUNTPRODUCT;
    const CATEGORY = req.body.OFERTA;
    console.log(IDPRODUCT);
    console.log(NAMEPRODUCT);
    console.log(DESCRIPTIONPRODUCT);
    console.log(PRICE);
    console.log(AMOUNTPRODUCT);
    console.log(CATEGORY);
    mysqlConnection.query('UPDATE product SET NAMEPRODUCT=?, DESCRIPTIONPRODUCT=?,PRICE=?,AMOUNTPRODUCT=?,OFERTA=? WHERE IdProduct = ?', [NAMEPRODUCT, DESCRIPTIONPRODUCT, PRICE, AMOUNTPRODUCT, CATEGORY, IDPRODUCT], (err, rows, fields) => {
        if (err) return res.send(err)
        res.redirect('/api/products/view');
    });
});

module.exports = router;