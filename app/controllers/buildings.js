import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['seating', 'phone', 'display', 'network'],

  seating: null,
  phone: null,
  display: null,
  network: null,

  filteredRooms: function() {
    console.log('filtered rooms...');
    var rooms = this.model.reduce(function(previous, current) {
      return Ember.computed.union(previous,Ember.ArrayProxy.create({ content: current.get('rooms').toArray() }));
    }, Ember.ArrayProxy.create({ content: [] }));
    return rooms.filter(function(item) {
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
    }, this.display)

    .filter(function(item) {
      if (this) {
        return item.get('network');
      } else {
        return true;
      }
    }, this.network);
  }.property(
    'seating',
    'phone',
    'display',
    'network'
  ),

  triggerTransitionToRoute(model) {
    if (!model) {
      this.transitionToRoute('buildings.list');
    } else {
      this.transitionToRoute('buildings.detail', parseInt(model));
    }
  }  
});
