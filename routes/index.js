var express = require('express');
var router = express.Router();

const Penjual = require('../controllers').Penjual;
const Pembayaran = require('../controllers').Pembayaran;
const Iklan = require('../controllers').Iklan;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Penjual Router */
router.get('/api/Penjual', Penjual.list);
router.post('/api/Penjual', Penjual.add);
router.put('/api/Penjual/:id', Penjual.update);
router.delete('/api/Penjual/:id', Penjual.delete);

/* Pembayaran Router */
router.get('/api/Pembayaran', Pembayaran.list);
router.post('/api/Pembayaran', Pembayaran.add);
router.put('/api/Pembayaran/:id', Pembayaran.update);
router.delete('/api/Pembayaran/:id', Pembayaran.delete);

/* Iklan Router */
router.get('/api/Iklan', Iklan.list);
router.get('/api/Iklan/:id', Iklan.getById);
router.post('/api/Iklan', Iklan.add);
router.put('/api/Iklan/:id', Iklan.update);
router.delete('/api/Iklan/:id', Iklan.delete);

module.exports = router; 