import Ember from 'ember';

export default Ember.Controller.extend({
  buildingsController: Ember.inject.controller('buildings'),

  filteredRoomsForBuilding: function() {
    var rooms = this.get('buildingsController').get('filteredRooms');
    var modelId = this.get('model').get('id');
    rooms = rooms.filter(function(item) {
      var buildingId = item.get('building').get('id');
      if (buildingId === modelId) {
        return true;
      }
    }, this);
    return rooms;
  }.property()
});
