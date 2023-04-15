'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuavehicle);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);

    app.route('/tambah')
        .post(jsonku.tambahVehicle);

    app.route('/ubah')
        .put(jsonku.ubahVehicle);

    app.route('/hapus')
        .delete(jsonku.hapusVehicle);

    app.route('/tampilmodelvehicle')
        .get(jsonku.tampilgroupmodelvehicle)
}