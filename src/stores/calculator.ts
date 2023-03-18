import { defineStore } from 'pinia';
import { Operator } from '@/enums/operator';

export interface CalculatorState {
  displayValue: string;
  currentValue: string;
  operator: string | null;
  previousValue: string;
}

export const useCalculatorStore = defineStore({
  id: 'calculator',
  state: (): CalculatorState => ({
    displayValue: '0',
    currentValue: '',
    previousValue: '',
    operator: null
  }),
  actions: {
    addValue(value: number | string): void {
      this.currentValue += value.toString();
      this.displayValue = this.currentValue;
    },
    reset(): void {
      this.currentValue = '';
      this.previousValue = '';
      this.operator = null;
    },
    clear(): void {
      this.displayValue = '0';
      this.reset();
    },
    setOperator(operator: string): void {
      if (this.operator !== null) {
        try {
          this.calculate();
        } catch (err) {
          console.error(err);
        }
      }

      // If there is a previousValue but not currentValue, then just update operator
      if (this.previousValue !== '' && this.currentValue === '') {
        this.operator = operator;
        return;
      }

      this.previousValue = this.currentValue;
      this.currentValue = '';
      this.operator = operator;
    },
    calculate(): void {
      if (this.currentValue !== '' && this.previousValue !== '') {
        let result = 0;

        if (this.operator === Operator.ADD) {
          result = parseFloat(this.previousValue) + parseFloat(this.currentValue);
        } else if (this.operator === Operator.SUBTRACT) {
          result = parseFloat(this.previousValue) - parseFloat(this.currentValue);
        } else if (this.operator === Operator.MULTIPLY) {
          result = parseFloat(this.previousValue) * parseFloat(this.currentValue);
        } else if (this.operator === Operator.DIVIDE) {
          if (this.currentValue === '0') {
            this.displayValue = 'Error';
            this.reset();

            throw new Error('Cannot divide by zero');
          }

          result = parseFloat(this.previousValue) / parseFloat(this.currentValue);
        }
        this.currentValue = result.toString();
        this.displayValue = this.currentValue;
        this.previousValue = '';
        this.operator = null;
      }
    }
  }
});
