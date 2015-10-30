import Ember from 'ember';
import $ from 'jquery';

const ENTER_KEY = 13;

export default Ember.Component.extend({
  inputElementId: null,
  $element: null,
  
  init() {
    this._super.apply(this, arguments);
    
    var elementId = this.elementId;
    this.set('inputElementId', elementId + '-input');
  },

  didInsertElement() {
    this.set('$element', $($($(this.get('element')).children('label')).children('span')));
  },

  keyPress(e) {
    if (e.charCode === ENTER_KEY) {
      e.preventDefault();
    }
  },

  keyUp() {
    this.toggleColor(this.get('$element'), this);
  },

  change() {
    this.toggleColor(this.get('$element'), this);
  },

  toggleColor($element, self) {
    if (parseInt(self.get('seating'))) {
      $element.css('color', '#fff');
    } else {
      $element.css('color', '#999');
    }
  }
});