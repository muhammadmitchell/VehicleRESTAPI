'use strict';

exports.ok = function(values, res){
    var data = {
        'status':200,
        'values':values
    };

    res.json(data);
    res.end();
};

//response untuk nested model vehicle
exports.oknested = function(values, res){
    //lakukan akumulasi
    const hasil = values.reduce((akumulasikan, item)=>{
        //tentukan key group
        if(akumulasikan[item.name]){
            //buat variable group nama vehicle
            const group = akumulasikan[item.name];
            //cek jika isi array adalah model vehicle
            if(Array.isArray(group.vehicle_model)){
                //tambahkan value ke dalam group model vehicle
                group.vehicle_model.push(item.vehicle_model);
            } else {
                group.vehicle_model = [group.vehicle_model, item.vehicle_model];
            }
        } else {
            akumulasikan[item.name] = item;
        }
        return akumulasikan;
    }, {});

    var data = {
        'status':200,
        'values':hasil
    };

    res.json(data);
    res.end();
    
}