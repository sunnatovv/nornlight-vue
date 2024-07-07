<template>
  <div class="container my-16">
    <div class="flex justify-between py-6">
      <h3 class="lg:text-[40px] text-[24px] font-semibold">
        Популярные товары
      </h3>
      <router-link to="/all-products">
        <button
        class="max-sm:hidden border rounded-full lg:py-3 lg:px-10 flex items-center gap-3 hover:bg-primary hover:text-white duration-500"
      >
        Все товары
        <box-icon name="right-arrow-alt" color=""></box-icon>
      </button>
      </router-link>
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
