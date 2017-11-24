import {assert} from 'chai';
import {Person} from '../target/person';

describe("Q2", () => {

  it("test1", () => {
    var ret = new Person("undefined").hello();
    assert.equal(ret, "Hello! My name is undefined");
  });

  it("test2", () => {
    var ret = new Person("Cody").hello();
    assert.equal(ret, "Hello! My name is Cody");
  });

  it("test3", () => {
    var ret = new Person().hello();
    assert.equal(ret, "Hello! My name is undefined");
  });
});