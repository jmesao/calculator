export enum Operator {
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = '*',
  DIVIDE = '/',
  EQUAL = '='
}

export const operators: { [key: string]: (a: number, b: number) => number } = {
  [Operator.ADD]: (a, b) => a + b,
  [Operator.SUBTRACT]: (a, b) => a - b,
  [Operator.MULTIPLY]: (a, b) => a * b,
  [Operator.DIVIDE]: (a, b) => a / b
};
