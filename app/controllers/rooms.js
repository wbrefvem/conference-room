
import Ember from "ember";

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  //buildings: Ember.inject.controller(),

  selectedBuilding: null,
  seating: null,
  phone: null,
  display: null,

  filteredRooms: function() {
    return this.model.filter(function(item) {
        if (this !== null) {
          return item.get('building').id === this;     
        } else {
          return true;
        }
      }, this.selectedBuilding)

      .filter(function(item) {
        var seating = this.get('seating');

        if (seating) {
          return item.get('seating') >= seating;
        } else {
          return true;
        }
      }, this)

      .filter(function(item) {
        if (this) {
          return item.get('phone');
        } else {
          return true;
        }
      }, this.phone)

      .filter(function(item) {
        if (this) {
          return item.get('display');
        } else {
          return true;
        }
      }, this.display);
  }.property(
    'selectedBuilding',
    'seating',
    'phone',
    'display'
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
        rooms: this.filter(roomFilter).sort(function(a, b) {
          var _a = parseInt(a.get('roomNumber'));
          var _b = parseInt(b.get('roomNumber'));
          return _a - _b;
        })
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

    buildings.forEach(buildingIteratorCallback, rooms);

    return packaged;
  }.property('filteredRooms'),

  buildings: function() {
    return this.store.findAll('building');
  }.property(),
});
