import DS from "ember-data";

var Building = DS.Model.extend({
    name: DS.attr('string'),
    address: DS.attr('string'),
    slug: DS.attr('string'),
    rooms: DS.hasMany('room')
});

export default Building;
