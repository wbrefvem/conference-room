import DS from "ember-data";

var Room = DS.Model.extend({
    building: DS.belongsTo('building'),
    name: DS.attr('string'),
    manager: DS.attr('string'),
    generalUsage: DS.attr('boolean'),
    capacity: DS.attr('number'),
    projector: DS.attr('boolean'),
    conferencePhone: DS.attr('boolean'),
    equipment: DS.attr('string'),
    hasUsageRestrictions: DS.attr('boolean')
});

export default Room;
