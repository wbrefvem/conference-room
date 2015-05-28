import Ember from "ember";

export default Ember.Checkbox.extend({
    click: function() {
        var controller = this.get('controller');
        var capacity = this.checked && parseInt(this.get('viewName'), 10);

        controller.set('capacity', capacity);
        var capacityIsDirty = controller.get('capacityIsDirty');
        controller.set('capacityIsDirty', !capacityIsDirty);
    },
    mouseEnter: function() {
        this.checked = !this.checked;
    }
});
