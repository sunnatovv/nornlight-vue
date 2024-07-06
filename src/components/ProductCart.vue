<template>
  <div class="container my-16">
    <div class="flex justify-between py-6">
      <h3 class="lg:text-[40px] text-[24px] font-semibold">
        Популярные товары
      </h3>
      <button class="max-sm:hidden border rounded-full py-3 px-14">
        Все товары
      </button>
    </div>

    <div>
      <Cart />
    </div>
  </div>
</template>

<script setup>
import Cart from "./Cart.vue";
</script>

<style lang="scss" scoped></style>
