import Ember from 'ember';

export default Ember.Component.extend({
  inputElementId: null,
  
  init: function() {
    this._super.apply(this, arguments);
    
    var elementId = this.elementId;
    this.set('inputElementId', elementId + '-input');
  },

  keyPress: function(e) {
    e.preventDefault();
  }
});