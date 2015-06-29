import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  coalesceFindRequests: true,
  namespace: 'api/v1',
  host: 'https://conference-room-api.herokuapp.com',

  pathForType: function(type) {
    var dasherized = Ember.String.dasherize(type);
    return Ember.String.pluralize(dasherized);
  }
});