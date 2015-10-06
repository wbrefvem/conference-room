import Ember from "ember";

export default Ember.Component.extend({
  content: null,
  selectedValue: null,

  didInitAttrs() {
    this._super(...arguments);
    var content = this.get('content');

    if (!content) {
      this.set('content', []);
    }
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
      changeAction(selectedValue);
    }
  }
});