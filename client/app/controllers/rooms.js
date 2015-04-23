import Ember from "ember";

export default Ember.ArrayController.extend({
  needs: ["application", "buildings"],

  selectedBuilding: null,
  capacityIsDirty: null,
  capacity: null,
  conferencePhone: null,
  projector: null,

  filteredRooms: function() {
    return this.filter(function(item) {
        if (this !== null) {
          return item.get('building').id === this.get('id');     
        } else {
          return true;
        }
      }, this.selectedBuilding)

      .filter(function(item) {
        var capacity = this.get('capacity');
        if (capacity) {
          return item.get('capacity') >= capacity;
        } else {
          return true;
        }
      }, this)

      .filter(function(item) {
        if (this) {
          return item.get('conferencePhone');
        } else {
          return true;
        }
      }, this.conferencePhone)

      .filter(function(item) {
        if (this) {
          return item.get('projector');
        } else {
          return true;
        }
      }, this.projector);
  }.property(
    'selectedBuilding',
    'capacity',
    'conferencePhone',
    'projector',
    'capacityIsDirty'
  ),

  packagedRooms: function() {
    var rooms = this.get('filteredRooms');


    var buildingIds = [];
    var buildingArray = [];

    rooms.forEach(function(item) {
      var id = item.get('building').get('id');
      if (buildingIds.indexOf(id) < 0) {
        buildingIds.push(id);
        buildingArray.push({ id: item.get('building').get('id'), name: item.get('building').get('name') });
      }
    });

    var buildings = Ember.ArrayProxy.create({ content: Ember.A(buildingArray) });
    var packaged = Ember.ArrayProxy.create({ content: [] });


    function buildingIteratorCallback(item) {

      var newObject = {
        id: item.id,
        name: item.name,
        rooms: this.filter(roomFilter)
      };

      function roomFilter(room) {
        if (room.get('building').get('id') === item.id) {
          return true;
        } else {
          return false;
        }
      }
      packaged.addObject(newObject);
    }

    buildings.forEach(buildingIteratorCallback, this);

    return packaged;
  }.property('filteredRooms'),

  buildings: function() {
    return this.store.find('building');
  }.property(),
});
