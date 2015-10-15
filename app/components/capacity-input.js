import Ember from 'ember';
import $ from 'jquery';

const ENTER_KEY = 13;

export default Ember.Component.extend({
  inputElementId: null,
  $element: null,
  
  init: function() {
    this._super.apply(this, arguments);
    
    var elementId = this.elementId;
    this.set('inputElementId', elementId + '-input');
  },

  didInsertElement: function() {
    this.set('$element', $($($(this.get('element')).children('label')).children('span')));
  },

  keyPress: function(e) {
    if (e.charCode === ENTER_KEY) {
      e.preventDefault();
    }
  },

  keyUp: function() {
    this.toggleColor(this.get('$element'), this);
  },

  change: function() {
    this.toggleColor(this.get('$element'), this);
  },

  toggleColor: function($element, self) {
    if (self.get('seating') == 0) {
      $element.css('color', '#999');
    } else {
      $element.css('color', '#fff');
    }
  }
});