<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<template>
  <div class="header-info">
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />
    <h1 class="header-info__title">{{ title }}</h1>
    <h3 class="header-info__subtitle">{{ subtitle }}</h3>
  </div>
</template>

<style lang="scss">
.header-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  &__title {
    font-weight: 500;
    font-size: 2.6rem;
  }

  &__subtitle {
    font-size: 1.2rem;
  }
}
</style>
