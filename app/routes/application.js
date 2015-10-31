import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition) {
    if (transition.targetName === 'buildings.index') {
      this.transitionTo('buildings.list');
    }
  }
});