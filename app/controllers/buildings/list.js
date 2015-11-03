import Ember from 'ember';

export default Ember.Controller.extend({

  init() {
    this.get('buildingsController').addObserver('filteredRooms', this, 'filteredRoomsDidChange');
  },
  
  buildingsController: Ember.inject.controller('buildings'),
  filteredRooms: null,
  
  roomCount: function() {
    return this.get('filteredRooms').get('length');
  }.property(),

  filteredRoomsDidChange() {
    this.notifyPropertyChange('packagedRooms');
  },

  packagedRooms: function() {
    var rooms = this.get('buildingsController').get('filteredRooms');
    var buildingSlugs = [];
    var buildingArray = [];

    rooms.forEach(function(item) {
      var slug = item.get('building').get('slug');
      if (buildingSlugs.indexOf(slug) < 0) {
        buildingSlugs.push(slug);
        buildingArray.push({ 
          id: item.get('building').get('id'), 
          name: item.get('building').get('name'),
          slug: item.get('building').get('slug')
        });
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
        }),
        slug: item.slug
      };

      function roomFilter(room) {
        if (room.get('building').get('slug') === item.slug) {
          return true;
        } else {
          return false;
        }
      }
      packaged.addObject(newObject);
    }

    buildings.forEach(buildingIteratorCallback, rooms);

    return packaged;
  }.property(),
});
