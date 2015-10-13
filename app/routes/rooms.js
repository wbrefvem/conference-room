import Ember from "ember";

export default Ember.Route.extend({
    beforeModel: function() {
        this.store.findAll('building');
    },
    model: function() {
        return this.store.findAll('room');
    }
});
