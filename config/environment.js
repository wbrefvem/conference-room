/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.contentSecurityPolicyHeader = 'Content-Security-Policy-Report-Only';

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' http://www.google-analytics.com https://www.google-analytics.com",
    'font-src': "'self' http://fonts.gstatic.com https://fonts.gstatic.com",
    'connect-src': "'self' http://localhost:8008 http://mapststarcsrv3:8008 https://conference-room-api.herokuapp.com",
    'img-src': "'self'",
    'style-src': "'self' http://fonts.googleapis.com https://fonts.googleapis.com",
    'media-src': "'self'",
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.API_SERVER_URL = 'https://conference-room-api.herokuapp.com';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.googleAnalytics = {
      webPropertyId: 'UA-XXXX-Y'
    };
    ENV.APP.API_SERVER_URL = 'http://mapststarcsrv3:8008';
  }

  return ENV;
};
