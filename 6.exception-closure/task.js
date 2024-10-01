function parseCount(count) {
    let parseCount = Number.parseFloat(count);
    // console.log(parseC);

    if (Number.isNaN(parseCount)) {
        throw new Error("Невалидное значение");
    }
    return parseCount;
}

function validateCount(count) {
    try {
        return parseCount(count);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;
    }

    get perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }
    get area() {
        let p = this.perimeter / 2;
        return +Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)).toFixed(3);
        // return parseFloat(Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)).toFixed(3));
        
    }

}
function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    let errorGetTriangle = "Ошибка! Треугольник не существует";
    return {
      get area() {
        return errorGetTriangle;
      },
      get perimeter() {
        return errorGetTriangle;
      }
    };
  }
}