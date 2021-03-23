const Pembayaran = require('../models').Pembayaran;
const Iklan = require('../controllers').Iklan;

module.exports = {
  list(req, res) {
    return Pembayaran
      .findAll({
        include: [],
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((Pembayarans) => res.status(200).send(Pembayarans))
      .catch((error) => { res.status(400).send(error); });
  },

  add(req, res) {
    return Pembayaran
      .create({
        id: req.body.id,
        finance: req.body.finance,
        jenis_pembayaran: req.body.jenis_pembayaran,
        harga: req.body.harga,
        angsuran: req.body.angsuran,
        lama_bulan: req.body.lama_bulan,
      })
      .then((Pembayaran) => res.status(201).send(Pembayaran))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Pembayaran
      .findByPk(req.params.id)      
      .then(Pembayaran => {
        if (!Pembayaran) {
          return res.status(404).send({
            message: 'Pembayaran Tidak Ditemukan',
          });
        }
        return Pembayaran
          .update({
            finance: req.body.finance || Pembayaran.finance,
            jenis_pembayaran: req.body.jenis_pembayaran || Pembayaran.jenis_pembayaran,
            harga: req.body.harga || Pembayaran.harga,
            angsuran: req.body.angsuran || Pembayaran.angsuran,
            lama_bulan: req.body.lama_bulan || Pembayaran.lama_bulan,
          })
          .then(() => res.status(200).send(Pembayaran))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Pembayaran
      .findByPk(req.params.id)
      .then(Pembayaran => {
        if (!Pembayaran) {
          return res.status(400).send({
            message: 'Pembayaran Not Found',
          });
        }
        return Pembayaran
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};