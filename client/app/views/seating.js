import Ember from "ember";

export default Ember.Checkbox.extend({
    click: function() {
        console.log('firing seating');
        var controller = this.get('controller');
        var seating = this.checked && parseInt(this.get('viewName'), 10);

        controller.set('seating', seating);
        var seatingIsDirty = controller.get('seatingIsDirty');
        controller.set('seatingIsDirty', !seatingIsDirty);
    },
    mouseEnter: function() {
        this.checked = !this.checked;
    }
});
