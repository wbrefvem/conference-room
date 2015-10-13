import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('rooms', { 
      resetNamespace: true,
      path: '/' 
    });
});

export default Router;
