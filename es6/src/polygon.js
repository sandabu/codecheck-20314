//Abstract super class Polygon
export class Polygon {

  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
}

export class Rectangle extends Polygon {

  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
  }

  get area() { return this.height * this.width;}
}

export class Square extends Polygon{
  constructor(height) {
    super(height, height);
    this.name = "Square";
  }

  get area () {
    return Math.pow(this.height, 2);
  }
}

export class Circle extends Polygon{
  constructor(rad) {
    super(rad * 2, rad * 2);
    this.rad = rad;
    this.name = "Circle";
  }

  get area() {
    return Math.pow(this.rad, 2) * Math.PI;
  }
}


