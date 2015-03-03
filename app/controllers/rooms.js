import Ember from "ember";

export default Ember.ArrayController.extend({
    needs: ["application", "buildings"],

    selectedBuilding: null,
    capacity: null,
    conferencephone: null,
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
                if (this !== null) {
                    return item.get('capacity') >= this;                  
                } else {
                    return true;
                }
            }, this.capacity)

            .filter(function(item) {
                if (this) {
                    return item.get('conferencephone');                    
                } else {
                    return true;
                }
            }, this.conferencephone)

            .filter(function(item) {
                if (this) {
                    return item.get('projector');
                } else {
                    return true;
                }
            }, this.projector);
    }.property('selectedBuilding', 'capacity', 'conferencephone', 'projector'),


    buildings: function() {
        return this.store.find('building');
    }.property('buildings'),
});
