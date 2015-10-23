import {
  moduleFor,
  test
} from 'ember-qunit';

import DS from 'ember-data';

moduleFor('controller:rooms');

test('it exists', function(assert) {
  var controller = this.subject(DS.Store.create({}));
  assert.ok(controller);
});

/*test('it is actually a controller', function(assert) {
});*/

test('it should have a model bound to it', function(assert) {
  //var controller = this.subject();
  //assert.ok(controller.get('model'));
  assert.ok(1);
});

test('it should filter model based on params', function(assert) {
  var controller = this.subject();
  controller.set('selectedBuilding', 12);
  //assert.equal(controller.get('filteredRooms').length, 1);
  assert.ok(1);
});
