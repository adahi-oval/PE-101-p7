/*
Desarrolle los siguientes ejercicios en su proyecto TypeScript asociado a la práctica y empuje los cambios al repositorio GitHub correspondiente, una vez haya finalizado:

    Suponga que parte de las clases Rational y Complex de prácticas anteriores, las cuales permiten operar (suma, resta, división y multiplicación) con números racionales y complejos, respectivamente. Escriba un adaptador de racionales que le permita llevar a cabo operaciones aritméticas entre complejos y racionales.

Recuerde que deberá incluir la documentación haciendo uso de TypeDoc, así como seguir una metodología TDD/BDD utilizando el framework de pruebas Mocha y la librería de aserciones Chai. También trate de comprobar el nivel de cubrimiento de su código mediante Instanbul, así como hacer un seguimiento de dicho cubrimiento con Coveralls. Se valorará positivamente el hecho de contar con flujos de trabajo de Github para ejecutar las pruebas y enviar datos de cubrimiento a Coveralls. Como entrega de esta tarea deberá indicar, de nuevo, el enlace a dicho repositorio GitHub con los ejercicios solicitados.
*/

import { Complex } from "./complex";
import { Rational } from "./rational";

/**
 * Clase que representa un racional como un complejo
 */
export class Adapter extends Complex {
  /**
   * Constructor de la clase, se le pasa un racional y toma la división de sus partes como parte real del numero complejo, y 0 como parte imaginaria.
   */
  constructor(private rational: Rational) {
    /**
     * Tomamos la división entre el numerador y denominador como parte real, y 0 como parte imaginaria al ser un numero racional
     */
    super(rational.num/rational.denom, 0);
  }
}