import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('building', params.building_slug);
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.get('buildingsController').set('selectedBuilding', model);
  }
});
