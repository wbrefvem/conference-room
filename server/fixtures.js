"use strict";

var fs = require('fs');
var Sails = require('sails');
var async = require('async');

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

Sails.load({ port: 8008, debug: 'info' }, _sailsDidLoad);

function createObjects(fixture, next) {
    var model = Sails.models[fixture.model];
    var items = fixture.items;

    Sails.log.info('Destroying existing objects...');

    model.destroy().exec(function (err, data) {
        if (err) throw err;

        Sails.log.info(data.length + ' objects of type ' + fixture.model.capitalizeFirstLetter() + ' destroyed.');
        Sails.log.info('Creating new objects from fixtures...');

        model.create(items).exec(function(err, data) {
            if (err) next(err);
            Sails.log.info(data.length + ' new objects of type ' + fixture.model.capitalizeFirstLetter() + ' created');
            next();
        });
    });
}

function exit(err) {
    if (err) throw err;
    process.exit();
}

function parseFile(err, data) {
    if (err) throw err;
    Sails.log.info('Fixtures file read successfully...');
    Sails.log.info('Parsing fixtures file...');
    
    var fixtures = JSON.parse(data);

    async.each(fixtures, createObjects, exit);
}

function _sailsDidLoad(err, sails) {
    if (err) throw err;

    fs.readFile('./fixtures.json', {'encoding': 'utf-8'}, parseFile);   
}
