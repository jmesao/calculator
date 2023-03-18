<template>
  <div class="calculator">
    <div class="calculator__header">
      <button class="calculator__header__clear" @click="handleClear()">C</button>
      <div class="calculator__header__content">
        <span>{{ displayValue }}</span>
      </div>
    </div>
    <div class="calculator__keys">
      <button
        v-for="calculatorKey in calculatorKeys"
        :key="calculatorKey.value"
        class="calculator__keys__item"
        :class="[
          `calculator__keys__item--${calculatorKey.type}`,
          { 'calculator__keys__item--operator--active': isOperatorActive(calculatorKey.value) }
        ]"
        @click="handleKey(calculatorKey)"
      >
        {{ calculatorKey.value }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCalculatorStore } from '@/stores/calculator';
import { storeToRefs } from 'pinia';
import { CalculatorKeyType } from '@/enums/calculator-key-type';

interface CalculatorKey {
  value: number | string;
  type: CalculatorKeyType;
}

export default defineComponent({
  name: 'BasicCalculator',
  setup() {
    const calculatorStore = useCalculatorStore();
    const { displayValue } = storeToRefs(calculatorStore);

    function handleClear(): void {
      calculatorStore.clear();
    }

    const calculatorKeys: CalculatorKey[] = [
      { value: 7, type: CalculatorKeyType.NUMBER },
      { value: 8, type: CalculatorKeyType.NUMBER },
      { value: 9, type: CalculatorKeyType.NUMBER },
      { value: '/', type: CalculatorKeyType.OPERATOR },

      { value: 4, type: CalculatorKeyType.NUMBER },
      { value: 5, type: CalculatorKeyType.NUMBER },
      { value: 6, type: CalculatorKeyType.NUMBER },
      { value: '*', type: CalculatorKeyType.OPERATOR },

      { value: 1, type: CalculatorKeyType.NUMBER },
      { value: 2, type: CalculatorKeyType.NUMBER },
      { value: 3, type: CalculatorKeyType.NUMBER },
      { value: '-', type: CalculatorKeyType.OPERATOR },

      { value: 0, type: CalculatorKeyType.NUMBER },
      { value: '.', type: CalculatorKeyType.NUMBER },
      { value: '=', type: CalculatorKeyType.OPERATOR },
      { value: '+', type: CalculatorKeyType.OPERATOR }
    ];

    function handleKey(key: CalculatorKey): void {
      if (key.type === CalculatorKeyType.NUMBER) {
        const num = key.value;
        calculatorStore.addValue(num);
      } else {
        const operator = key.value as string;
        calculatorStore.setOperator(operator);
      }
    }

    function isOperatorActive(value: number | string): boolean {
      return calculatorStore.currentValue === '' && value === calculatorStore.operator;
    }

    return {
      handleClear,
      displayValue,
      isOperatorActive,
      calculatorKeys,
      handleKey
    };
  }
});
</script>

<style lang="scss">
.calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  font-size: 2rem;

  &__header {
    display: flex;
    margin-bottom: 1rem;

    &__clear {
      height: 4rem;
      width: 4rem;
      font-size: 2rem;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      margin-right: 0.5rem;
      background-color: #eee;
      color: #525252;

      &:hover {
        background-color: #c2c2c2;
      }
    }

    &__content {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 4rem;
      width: 16rem;
      padding: 0.5rem;
      border: 1px solid #fff;
      border-radius: 1rem;
      color: #fff;

      span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  &__keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;

    &__item {
      height: 4rem;
      width: 4rem;
      font-size: 2rem;
      border: none;
      border-radius: 50%;
      cursor: pointer;

      &--operator {
        background-color: #ff9500;
        color: #fff;

        &:hover {
          background-color: #ffc067;
          color: #fff;
        }

        &--active {
          background-color: #f4f4f4;
          color: #ff9500;
        }
      }

      &--number {
        background-color: #646464;
        color: #fff;

        &:hover {
          background-color: #c2c2c2;
        }
      }
    }
  }
}
</style>
