import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  content: null,
  selectedValue: null,
  $element: null,

  didInitAttrs() {
    this._super(...arguments);
    var content = this.get('content');

    if (!content) {
      this.set('content', []);
    }
  },

  didInsertElement() {
    this.set('$element', $(this.get('element')).parent().siblings('span'));
  },

  actions: {
    change() {

      const changeAction = this.get('action');
      const selectedValueId = this.$('select').val();
      const content = this.get('content');
      const querySet = content.filter(function(item) {
        return item.id === selectedValueId;
      });
      var selectedValue;
      try {
        selectedValue = querySet[0].get('id');
      } catch (e) {
        selectedValue = null;
      }

      this.set('selectedValue', selectedValue);

      function toggleColor(color, $element, self) {
        if (self.get('selectedValue') === null) {
          $element.css('color', '#999');
        } else {
          $element.css('color', '#fff');
        }
      }
      toggleColor(this.get('$element').css('color'), this.get('$element'), this);
      changeAction(selectedValue);
      this.sendAction('triggerTransitionToRoute', selectedValue || null);
    }
  }
});