import Ember from 'ember';

export default Ember.Controller.extend({

  init() {
    this.get('buildingsController').addObserver('filteredRooms', this, 'filteredRoomsDidChange');
  },

  buildingsController: Ember.inject.controller('buildings'),

  roomCount: function() {
    return this.get('filteredRoomsForBuilding').get('length');
  }.property('filteredRoomsForBuilding'),


  filteredRoomsDidChange() {
    this.notifyPropertyChange('filteredRoomsForBuilding');
  },

  filteredRoomsForBuilding: function() {
    var rooms = this.get('buildingsController').get('filteredRooms');
    var modelSlug = this.get('model').get('slug');

    rooms = rooms.filter(function(item) {
      var buildingSlug = item.get('building').get('slug');
      if (buildingSlug === modelSlug) {
        return true;
      }
    }, this);
    return rooms;
  }.property()
});
