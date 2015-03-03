import Ember from "ember";

export default Ember.ArrayController.extend({
    buildings: function() {
        return this.store.find('building');
    }.property('buildings')
})
