const { Router } = require('express');
const router = new Router();

const mysqlConnection = require('../config/database.js');

router.get('/view', (req, res) => {


    loading.query('SELECT * FROM user', (err, rows, fields) => {
        if (!err) {
            res.render('viewUsers.ejs', {
                rows
            });
        } else {
            console.log(err);
        }
    });


});

router.post('/login', (req, res) => {
    const user = req.body.IDUSER;
    const passwrd = req.body.PASSWORD;
    const query = `SELECT * FROM user WHERE IDUSER = ? AND PASSWORD = ? `;
    mysqlConnection.query(query, [user, passwrd], (err, rows, fields) => {
        // if (err) throw err
        if (rows.length <= 0) {
            var aux = 0;
            res.render('html/Login.ejs', {
                aux
            });
        } else {
            res.redirect('/api/products/view');
        }
    })

});


router.get('/register', (req, res) => {
    var aux = 0;
    res.render('html/createAccount.ejs', {
        aux
    });
});



router.get('/iniciar', (req, res) => {
    var aux = 1;
    res.render('html/Login.ejs', {
        aux
    });
});

router.get('/:IdUser', (req, res) => {
    const { IdUser } = req.params;
    mysqlConnection.query('SELECT * FROM user WHERE IdUser = ?', [IdUser], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/registerUser', (req, res) => {
    const IDUSER = req.body.IDUSER;
    const FIRSTNAME = req.body.FIRSTNAME;
    const LASTNAME = req.body.LASTNAME;
    const EMAIL = req.body.EMAIL;
    const PASSWORD = req.body.PASSWORD;
    console.log(IDUSER);
    console.log(FIRSTNAME);
    console.log(LASTNAME);
    console.log(EMAIL);
    console.log(PASSWORD);


    mysqlConnection.query('INSERT INTO user (IDUSER,FIRSTNAME,LASTNAME,EMAIL,PASSWORD) VALUES (?,?,?,?,?)', [IDUSER, FIRSTNAME, LASTNAME, EMAIL, PASSWORD], (err, rows) => {
        if (!err) {
            res.redirect('/api/users/iniciar');
            var aux = 1;
            res.render('html/createAccount.ejs', {
                aux
            });
        }
        var aux = 1;
        res.render('html/createAccount.ejs', {
            aux
        });
    })

});

router.post('/', (req, res) => {
    const { IdUser, FirstName, LastName, Email, Password } = req.body;
    const query = `INSERT INTO user VALUE(${IdUser},${FirstName},${LastName},${Email},${Password})`;
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json({ status: 200 });
        } else {
            console.log(err)
        }
    });
});

module.exports = router;