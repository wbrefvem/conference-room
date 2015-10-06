import Ember from 'ember';

const ENTER_KEY = 13;

export default Ember.Component.extend({
  inputElementId: null,
  
  init: function() {
    this._super.apply(this, arguments);
    
    var elementId = this.elementId;
    this.set('inputElementId', elementId + '-input');
  },

  keyPress: function(e) {
    if (e.charCode === ENTER_KEY) {
      e.preventDefault();
    }
  }
});