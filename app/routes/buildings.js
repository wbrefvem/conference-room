import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('building');
  },
  beforeModel: function() {
    return this.store.findAll('room');
  }
});
