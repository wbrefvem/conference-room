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

    buildings: function() {
        return this.store.find('building');
    }.property('buildings'),
});
