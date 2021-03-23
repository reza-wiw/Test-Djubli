const Penjual = require('../models').Penjual;

module.exports = {
  list(req, res) {
    return Penjual
      .findAll({
        include: [],
        order: [
          ['createdAt', 'ASC'],
        ],
      })
      .then((Penjuals) => res.status(200).send(Penjuals))
      .catch((error) => { res.status(400).send(error); });
  },


  add(req, res) {
    return Penjual
      .create({
        id: req.body.id,
        nama: req.body.nama,
        jenis_penjual: req.body.jenis_penjual,
        alamat: req.body.alamat,
        tanggal: req.body.tanggal,
      })
      .then((Penjual) => res.status(201).send(Penjual))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Penjual
      .findByPk(req.params.id)      
      .then(Penjual => {
        if (!Penjual) {
          return res.status(404).send({
            message: 'Penjual Tidak Ditemukan',
          });
        }
        return Penjual
          .update({
            nama: req.body.nama || Penjual.nama,
            jenis_penjual: req.body.jenis_penjual || Penjual.jenis_penjual,
            alamat: req.body.alamat || Penjual.alamat,
            tanggal: req.body.tanggal || Penjual.tanggal,
          })
          .then(() => res.status(200).send(Penjual))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Penjual
      .findByPk(req.params.id)
      .then(Penjual => {
        if (!Penjual) {
          return res.status(400).send({
            message: 'Penjual Not Found',
          });
        }
        return Penjual
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};