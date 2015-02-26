import Ember from "ember";

export default Ember.ArrayController.extend({
    needs: "application",

    count: function() {
        return this.filter(function() {
            return true;
        }).length;
    }.property('rooms')
});
