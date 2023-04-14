'use strict';

var response = require('./res');
var connection = require('./koneksi');
const conn = require('./koneksi');

exports.index = function(req, res){
    response.ok("Vehicle REST API berjalan!", res)
};

//menampilkan semua data vehicle
exports.tampilsemuavehicle = function(req, res){
    connection.query('SELECT * FROM vehicle_brand', 
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok(rows, res)
        }
    });
};

//menampilkan semua data vehicle berdasarkan vehicle
exports.tampilberdasarkanid = function(req, res){
    let id = req.params.id;
    connection.query("SELECT * FROM vehicle_brand WHERE id = ?", [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};