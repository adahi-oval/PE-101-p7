export class Complex {
  constructor(public body: number, public imaginary: number) {}
  /**
   * Suma dos números complejos.
   * @param otherComplex el otro numero complejo
   * @returns El resultado de la suma como un nuevo número complejo.
  */
  public add(otherComplex: Complex): Complex {
    return new Complex(this.body + otherComplex.body, this.imaginary + otherComplex.imaginary);
  }

  /**
   * Resta dos números complejos.
   * @param otherComplex El otro número complejo.
   * @returns El resultado de la resta como un nuevo número complejo.
  */
  public sub(otherComplex: Complex): Complex {
    let aux: Complex = new Complex(otherComplex.body * -1, otherComplex.imaginary * -1);

    return this.add(aux);
  }

  /**
   * Multiplica dos números complejos.
   * @param otherComplex El otro numero complejo
   * @returns El resultado de la multiplicación como un nuevo número complejo.
  */
  public mult(otherComplex: Complex): Complex {
    return new Complex(this.body * otherComplex.body, this.imaginary * otherComplex.imaginary);
  }

  /**
   * Divide dos números complejos.
   * @param otherComplex El otro número complejo.
   * @returns El resultado de la división como un nuevo número complejo.
  */
  public div(otherComplex: Complex): Complex {
    if (otherComplex.imaginary === 0) {
      throw new Error('No se puede dividir entre 0');
    }
    return new Complex(this.body / otherComplex.body, this.imaginary / otherComplex.imaginary);
  }
}