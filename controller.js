'use strict';

var response = require('./res');
var connection = require('./koneksi');
const conn = require('./koneksi');

exports.index = function(req, res){
    response.ok("Vehicle REST API berjalan!", res)
};

//menampilkan semua data vehicle
exports.tampilsemuavehicle = function(req, res){
    connection.query('SELECT * FROM vehicle_brand', function(error, rows, fileds){
        if(error){
            connection.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};