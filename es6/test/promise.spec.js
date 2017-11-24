import {assert} from 'chai';
import {sleep} from '../target/promise';

describe("Q4", function() {
  this.timeout(2000);

  it("with valid time.(1000)", (done) => {
    var start = new Date().getTime();
    sleep(1000).then((value) => {
      assert.equal(value, 1000);
      var end = new Date().getTime();
      assert.ok(Math.abs(end - start - 1000) < 50);
      done();
    }).catch((value) => {
      assert.fail();
    });
  });

  it("with valid time.(0)", (done) => {
    var start = new Date().getTime();
    sleep(0).then((value) => {
      assert.equal(value, 0);
      var end = new Date().getTime();
      assert.ok(Math.abs(end - start) < 50);
      done();
    }).catch((value) => {
      assert.fail();
    });
  });

  it("with invalid time", (done) => {
    var start = new Date().getTime();
    sleep(-1).then((value) => {
      assert.fail();
    }).catch((value) => {
      assert.equal(value, -1);
      done();
    })
  });
});