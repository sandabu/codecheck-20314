import {assert} from 'chai';
import {Rectangle, Square, Circle} from '../target/polygon';

describe("Q3", () => {

  it("test1", () => {
    const polygon = new Rectangle(5, 10);
    assert.equal(polygon.name, "Rectangle");
    assert.equal(polygon.height, 5);
    assert.equal(polygon.width, 10);
    assert.equal(polygon.area, 50);
  });

  it("test2", () => {
    const polygon = new Square(10);
    assert.equal(polygon.name, "Square");
    assert.equal(polygon.height, 10);
    assert.equal(polygon.width, 10);
    assert.equal(polygon.area, 100);
  });

  it("test3", () => {
    const polygon = new Circle(5);
    assert.equal(polygon.name, "Circle");
    assert.equal(polygon.height, 10);
    assert.equal(polygon.width, 10);
    assert.equal(polygon.area, Math.PI * 25);
  });
});