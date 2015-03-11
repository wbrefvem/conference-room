"use strict";

var fs = require('fs');
var Sails = require('sails');
var async = require('async');

Sails.load({ port: 8008, debug: 'info' }, _sailsDidLoad);

function _modelIterator(fixture, next) {
    var model = Sails.models[fixture.model];
    var items = fixture.items;

    async.each(items, _instanceIterator, _iteratorFinish);

    model.create(items).exec(function(err, data) {
        if (err) next(err);
        Sails.log.info(data);
        next();
    });  
}

function _instanceIterator(instance, next) {

}

function _iteratorFinish(err) {
    if (err) throw err;
    process.exit();
}

function _reader(err, data) {
    if (err) throw err;
    console.dir(Sails);
    Sails.log.info('file read...');
    
    var fixtures = JSON.parse(data);

    async.each(fixtures, _modelIterator, _iteratorFinish);
}

function _sailsDidLoad(err, sails) {
    if (err) throw err;

    fs.readFile('./fixtures.json', {'encoding': 'utf-8'}, _reader);   
}
