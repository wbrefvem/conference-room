import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['seating', 'phone', 'display', 'network'],

  seating: 0,
  phone: false,
  display: false,
  network: false,

  selectedBuilding: null,

  filteredRooms: function() {

    function concat(a, b) {
      return a.toArray().concat(b.toArray());
    }
    
    var rooms = this.model.reduce(function(previous, current) {
      return concat(previous, Ember.ArrayProxy.create({ content: current.get('rooms').toArray() }));
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
      this.transitionToRoute('buildings.list', {
        queryParams: {
          seating: this.get('seating'),
          phone: this.get('phone'),
          display: this.get('display'),
          network: this.get('network')
        }
      });
    } else {
      this.transitionToRoute('buildings.detail', parseInt(model), {
        queryParams: {
          seating: this.get('seating'),
          phone: this.get('phone'),
          display: this.get('display'),
          network: this.get('network')
        }
      });
      this.notifyPropertyChange('filteredRooms');
    }
  }  
});
