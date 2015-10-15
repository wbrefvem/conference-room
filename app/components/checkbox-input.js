import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  inputElementId: null,
  
  init: function() {
    this._super.apply(this, arguments);
    
    var elementId = this.elementId;
    this.set('inputElementId', elementId + '-input');
  },

  mouseEnter: function() {
    if (!this.checked) {
      $($(this.element).children('label')).css('color', this.activeColor);      
    }
  },

  mouseLeave: function() {
    if (!this.checked) {
      $($(this.element).children('label')).css('color', this.inactiveColor);
    }
  }
});
