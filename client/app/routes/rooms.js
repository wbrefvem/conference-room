import Ember from "ember";

export default Ember.Route.extend({
    beforeModel: function() {
        this.store.find('building');
    },
    model: function() {
        return this.store.find('room');
    }
});
