'use strict';

var response = require('./res');
var connection = require('./koneksi');
const conn = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Vehicle REST API berjalan!", res)
};

//menampilkan semua data vehicle
exports.tampilsemuavehicle = function (req, res) {
    connection.query('SELECT * FROM vehicle_brand',
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res)
            }
        });
};

//menampilkan semua data vehicle berdasarkan id vehicle
exports.tampilberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query("SELECT * FROM vehicle_brand WHERE id = ?", [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menambahkan data vehicle 
exports.tambahVehicle = function (req, res) {
    var name = req.body.name;

    connection.query("INSERT INTO vehicle_brand (name) VALUES(?)",
        [name],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

//mengubah data berdasarkan id
exports.ubahVehicle = function (req, res) {
    var id = req.body.id;
    var name = req.body.name;

    connection.query("UPDATE vehicle_brand SET name=? WHERE id=?",
        [name, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
};

//menghapus data berdasarkan id
exports.hapusVehicle = function (req, res) {
    var id = req.body.id;

    connection.query("DELETE from vehicle_brand WHERE id=?",
        [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil hapus Data", res)
            }
        });
};

//menampilkan model vehicle group 
exports.tampilgroupmodelvehicle = function (req, res) {
    connection.query("SELECT vehicle_model.id, vehicle_model.name, vehicle_model.variant, vehicle_model.fuel_type, vehicle_model.transmission_type, vehicle_year.year FROM price_list JOIN vehicle_model JOIN vehicle_year WHERE price_list.model_id = vehicle_model.id AND price_list.year_id = vehicle_year.id ORDER BY vehicle_model.id;",
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.oknested(rows, res);
            }
        }
    )
}