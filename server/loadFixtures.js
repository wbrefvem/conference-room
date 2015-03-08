var fs = require('fs');

module.exports = function() {
    fs.readFile('./fixtures.json', {'encoding': 'utf-8'}, function(err, data) {
        if (err) throw err;

        fixtures = JSON.parse(data);
        buildings = fixtures[0].items;
        rooms = fixtures[1].items;

        for (var i = 0; i < buildings.length; i++) {
            Building.create(buildings[i]).exec(function(err, data) {
                if (err) throw err;
                console.log(data);
            });
        }

        for (var i = 0; i < rooms.length; i++) {
            Room.create(rooms[i]).exec(function(err, data) {
                if (err) throw err;
                console.log(data);
            });
        }
    });
}
