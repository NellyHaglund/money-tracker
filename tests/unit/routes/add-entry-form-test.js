import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | add-entry-form', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:add-entry-form');
    assert.ok(route);
  });
});
