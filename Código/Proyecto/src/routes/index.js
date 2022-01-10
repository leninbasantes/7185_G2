const express = require('express');
const router = express.Router();
const Task = require('../models/taskProduct');
const TaskAceites = require('../models/taskAceites');
const TaskBujias = require('../models/taskBujias');
const TaskCorreas = require('../models/taskCorreas');
const TaskFiltros = require('../models/taskFiltros');
const TaskTapas = require('../models/taskTapas');
const TaskVentiladores = require('../models/taskVentiladores');


router.get('/products', async (req, res) => {
    const productos = await Task.find();
    res.render('index', {
        productos
    });
});

router.get('/aceites', async (req, res) => {
    const productos = await TaskAceites.find();
    res.render('index', {
        productos
    });
});

router.get('/bujias', async (req, res) => {
    const productos = await TaskBujias.find();
    res.render('index', {
        productos
    });
});

router.get('/correas', async (req, res) => {
    const productos = await TaskCorreas.find();
    res.render('index', {
        productos
    });
});

router.get('/filtros', async (req, res) => {
    const productos = await TaskFiltros.find();
    res.render('index', {
        productos
    });
});

router.get('/tapas', async (req, res) => {
    const productos = await TaskTapas.find();
    res.render('index', {
        productos
    });
});

router.get('/ventiladores', async (req, res) => {
    const productos = await TaskVentiladores.find();
    res.render('index', {
        productos
    });
});

module.exports = router;