const express = require('express');
const sanphamRoutes = express.Router();
const AWS = require('aws-sdk');
const configDB = require('./configDB');
var uuid = require('node-uuid');

AWS.config.update(configDB.aws_remote_config);
const docClient = new AWS.DynamoDB.DocumentClient();

sanphamRoutes.route('/').get(function (req, res) {
    const params = {
        TableName: configDB.aws_table_name
    };

    docClient.scan(params,function(err,data){
        if(err){
            console.log(err);
            res.send({
                success : false,
                message : err
            });
        }else{
            const {Items} = data;
            res.json(Items);
        }
    });
    
});

sanphamRoutes.route('/delete/:id').get(function (req, res) {
    const id = req.params.id;
    var params = {
        TableName : configDB.aws_table_name,
        Key : {
            "maSP" : id 
        }
    };

    docClient.delete(params,function(err,data){
        if(err)
            res.json(err);
        else 
            res.json('Successfully removed');
    });
});


module.exports = sanphamRoutes;