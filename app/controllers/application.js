import Ember from "ember";

export default Ember.ObjectController.extend({
    buildings: [
        {
            "id": 0,
            "name": "Raleigh Municipal Building",
            "address": "222 West Hargett St"
        },
        {
            "id": 1,
            "name": "One Exchange Plaza",
            "address": "1 Exchange Plaza"
        }
    ]
});
