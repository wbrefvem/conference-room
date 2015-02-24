import DS from "ember-data";

var Building = DS.Model.extend({
    name: DS.attr('string'),
    address: DS.attr('string'),
    rooms: DS.hasMany('room')
});

Building.reopenClass({
    FIXTURES: [
        {
            "id": 0,
            "name": "Raleigh Municipal Building",
            "address": "222 West Hargett St"
        },
        {
            "id": 1,
            "name": "One Exchange Plaza",
            "address": "1 Exchange Plaza"
        }
    ]
});

export default Building;
