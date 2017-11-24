import {assert} from 'chai';
import {hello} from '../target/hello';

describe("Q1", () => {

  it("test1", () => {
    var ret = hello("world");
    assert.equal(ret, "Hello world!");
  });

  it("test2", () => {
    var ret = hello("code-check");
    assert.equal(ret, "Hello code-check!");
  });
});