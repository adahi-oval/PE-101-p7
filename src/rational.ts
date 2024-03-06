export class Rational {
  constructor(public num: number, public denom: number) {
  }

  /**
   * Calcula el máximo común divisor (MCD) de el numerador y denominador de un número racional para encontrar la fracción indivisible.
   * @param num El numerador del número racional.
   * @param denom El denominador del número racional.
   * @returns El máximo común divisor (MCD) de los dos números.
  */
  public mcd(num: number, denom: number): number {
    while(denom !== 0) {
      let temp = denom;
      denom = num % denom;
      num = temp;
    }

    return num;
  }
  /**
   * Calcula el mínimo común múltiplo de los denominadores de dos número racionales.
   * @param denom1 El denominador del primer número.
   * @param denom2 El denominador del segundo número.
   * @returns El mínimo común multiplo de los dos.
  */
  public mcm(denom1: number, denom2: number): number {

    return (denom1 * denom2) / this.mcd(denom1, denom2);

  }


  /**
   * Calcula el valor absoluto del numero tipo Rational dado.
   * @returns Nuevo número con su numerador y denominador siendo positivos.
  */
  public abs(): Rational {

    let result: Rational = new Rational(this.num, this.denom);

    if(this.num < 0) { result.num *= -1 }
    if(this.denom < 0) { result.denom *= -1 }

    return result;
  }

  /**
   * Calcula el inverso multiplicativo del número tipo Rational dado.
   * @returns El mismo número con su numerador y denominador intercambiados.
  */
  public inv(): Rational {
    return new Rational(this.denom, this.num);
  }

  /**
   * Suma dos números racionales.
   * @param otherRatio el otro numero racional
   * @returns El resultado de la suma como un nuevo número racional.
  */
  public add(otherRatio: Rational): Rational {

    const minmul = this.mcm(this.denom, otherRatio.denom);
    const num1 = this.num * (minmul / this.denom);
    const num2 = otherRatio.num * (minmul / otherRatio.denom);

    const numResult = num1 + num2;

    // Simplificamos con el maximo comun divisor para la fraccion indivisible.
    const maxdiv = this.mcd(numResult, minmul);

    return new Rational(numResult / maxdiv, minmul / maxdiv);;
  }

  /**
   * Resta dos números racionales.
   * @param otherRatio El otro número Racional.
   * @returns El resultado de la resta como un nuevo número racional.
  */
  public sub(otherRatio: Rational): Rational {
    // Multiplicar el segundo número por -1 y luego sumar
    let aux: Rational = new Rational(otherRatio.num * -1, otherRatio.denom)
    return this.add(aux);
  }

  /**
   * Multiplica dos números racionales.
   * @param otherRatio El otro numero racional
   * @returns El resultado de la multiplicación como un nuevo número racional.
  */
  public mult(otherRatio: Rational): Rational{
    return new Rational(this.num * otherRatio.num, this.denom * otherRatio.denom)    
  };

  /**
   * Divide dos números racionales.
   * @param otherRatio el otro numero racional
   * @returns El resultado de la división como un nuevo número racional.
  */
  public div(otherRatio: Rational): Rational {
    // Invertir el segundo número racional y luego multiplicar
    return this.mult(otherRatio.inv());
  }

};