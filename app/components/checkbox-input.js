import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  inputElementId: null,
  inactiveColor: null,
  $element: null,
  
  init: function() {
    this._super.apply(this, arguments);
    
    var elementId = this.elementId;
    this.set('inputElementId', elementId + '-input');
  },

  didInsertElement: function() {
    this.set('$element', $(this.get('element')));
    this.set('inactiveColor', $(this.get('$element').children('label')).css('color'));
  },

  mouseEnter: function() {
    if (!this.checked) {
      $($(this.element).children('label')).css('color', this.get('activeColor'));      
    }
  },

  mouseLeave: function() {
    if (!this.checked) {
      $($(this.element).children('label')).css('color', this.get('inactiveColor'));
    }
  }
});
