"use strict";

var fs = require('fs');

module.exports = function() {

    function createModel(model, items) {
        model.create(items).exec(function(err, data) {
            if (err) throw err;
            sails.log(data);
        });
    }

    fs.readFile('./fixtures.json', {'encoding': 'utf-8'}, function(err, data) {
        if (err) throw err;

        var fixtures = JSON.parse(data);

        for (var fixture of fixtures) {
            var model = sails.models[fixture.model];
            var items = fixture.items;
            createModel(model, items);
        }
    });
};
