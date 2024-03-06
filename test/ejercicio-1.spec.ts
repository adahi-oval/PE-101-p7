import 'mocha';
import {expect} from 'chai';
import {Rational} from '../src/rational';
import {Complex} from '../src/complex';
import {Adapter} from '../src/ejercicio-1';

describe('Adapter entre Rational y Complex tests', () => {
  const ratio1: Rational = new Rational(1,2);
  const ratio2: Rational = new Rational(1,3);
  const ratio3: Rational = new Rational(1,3);
  const ratio4: Rational = new Rational(2,3);
  const ratio5: Rational = new Rational(-1,2);
  const ratio6: Rational = new Rational(1,-2);
  const expectedRatio1: Rational = new Rational(2,3);
  const expectedRatio2: Rational = new Rational(1,6);
  const expectedRatio3: Rational = new Rational(3,2);

  const complex1: Complex = new Complex(2,1);
  const complex2: Complex = new Complex(4,2);
  const expectedComplex1: Complex = new Complex(6,3);
  const expectedComplex2: Complex = new Complex(8,2);
  const expectedComplex3: Complex = new Complex(2,2);

  const adapter1: Adapter = new Adapter(ratio1);
  const adapter2: Adapter = new Adapter(new Rational(1,1));
  const expectedComplex4: Complex = new Complex(5,2);
  const expectedComplex5: Complex = new Complex(-3/2, -1);

  describe('Rational tests', () => {
    it('Sus métodos add, sub, mult y div funcionan correctamente', () => {
      expect(ratio2.add(ratio3)).to.deep.equal(expectedRatio1);
      expect(ratio4.sub(ratio3)).to.deep.equal(ratio3);
      expect(ratio1.mult(ratio2)).to.deep.equal(expectedRatio2);
      expect(ratio1.div(ratio2)).to.deep.equal(expectedRatio3);
      expect(ratio6.abs()).to.deep.equal(ratio1);
      expect(ratio5.abs()).to.deep.equal(ratio1);
    });
  });

  describe('Complex tests', () => {
    it('Sus métodos add, sub, mult y div funcionan Correctamente', () =>{
      expect(complex1.add(complex2)).to.deep.equal(expectedComplex1);
      expect(complex2.sub(complex1)).to.deep.equal(complex1);
      expect(complex1.mult(complex2)).to.deep.equal(expectedComplex2);
      expect(complex2.div(complex1)).to.deep.equal(expectedComplex3);
    });
  });

  describe('Adapter tests', () => {
    it('Opera con racionales y complejos correctamente', () => {
      expect(adapter2.add(complex2)).to.deep.equal(expectedComplex4);
      expect(adapter1.sub(complex1)).to.deep.eq(expectedComplex5);
      expect(adapter1.mult(complex2)).to.deep.equal(new Complex(2, 0));
      expect(adapter2.div(complex1)).to.deep.equal(new Complex(1/2, 0));
      expect(complex2.add(adapter2)).to.deep.equal(expectedComplex4);
      expect(complex1.sub(adapter1)).to.deep.eq(new Complex(3/2, 1));
      expect(complex1.mult(adapter2)).to.deep.equal(new Complex(2, 0));
      expect(() => complex2.div(adapter1)).to.throw('No se puede dividir entre 0');

    });
  });

});