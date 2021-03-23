const Iklan = require('../models').Iklan;
const Penjual = require('../models').Penjual;
const Pembayaran = require('../models').Pembayaran;

module.exports = {
    list(req, res) {
        return Iklan
            .findAll({
                include: [],
                order: [
                    ['createdAt', 'DESC'],
                ],
            })
            .then((Iklans) => res.status(200).send(Iklans))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        return Iklan
            .findByPk(req.params.id, {
                include: [{
                    model: Penjual,
                    as :'Penjual'
                },{
                    model: Pembayaran,
                    as :'Pembayaran'
                }],
            })
            .then((Iklan) => {
                if (!Iklan) {
                    return res.status(404).send({
                        message: 'Iklan Tidak Ditemukan',
                    });
                }
                return res.status(200).send(Iklan);
            })
            .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        return Iklan
            .create({
                nama_mobil: req.body.nama_mobil,
                id_pembayaran: req.body.id_pembayaran,
                id_penjual: req.body.id_penjual,
                kondisi: req.body.kondisi,
                spesifikasi: req.body.spesifikasi,
            })
            .then((Iklan) => res.status(201).send(Iklan))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return Iklan
            .findByPk(req.params.id)
            .then(Iklan => {
                if (!Iklan) {
                    return res.status(404).send({
                        message: 'Iklan Not Found',
                    });
                }
                return Iklan
                    .update({
                        nama_mobil: req.body.nama_mobil || Iklan.nama_mobil,
                        id_pembayaran: req.body.id_pembayaran || Iklan.id_pembayaran,
                        id_penjual: req.body.id_penjual || Iklan.id_penjual,
                        kondisi: req.body.kondisi || Iklan.kondisi,
                        spesifikasi: req.body.spesifikasi || Iklan.spesifikasi,
                    })
                    .then(() => res.status(200).send(Iklan))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return Iklan
            .findByPk(req.params.id)
            .then(Iklan => {
                if (!Iklan) {
                    return res.status(400).send({
                        message: 'Iklan Not Found',
                    });
                }
                return Iklan
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
};