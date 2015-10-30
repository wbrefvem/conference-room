import Ember from 'ember';

export default Ember.Controller.extend({

  init() {
    this.get('buildingsController').addObserver('filteredRooms', this, 'filteredRoomsDidChange');
  },

  buildingsController: Ember.inject.controller('buildings'),

  roomCount: function() {
    return this.get('filteredRoomsForBuilding').get('length');
  }.property(),


  filteredRoomsDidChange() {
    this.notifyPropertyChange('filteredRoomsForBuilding');
    this.notifyPropertyChange('roomCount');
  },

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
