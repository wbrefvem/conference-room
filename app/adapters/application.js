import DS from 'ember-data';
import Ember from 'ember';
import ENV from 'client/config/environment';

export default DS.RESTAdapter.extend({
  coalesceFindRequests: true,
  namespace: 'api/v1',
  host: ENV.APP.API_SERVER_URL,

  pathForType: function(type) {
    var dasherized = Ember.String.dasherize(type);
    return Ember.String.pluralize(dasherized);
  },

  shouldReloadAll: function() {
    return true;
  }
});