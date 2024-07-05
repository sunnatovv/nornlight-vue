<template>
  <div class="container mb-16 py-6">
    <div>
      <div>
        <a href="/home" class="text-[#c7c7c7]"> Главная > </a>
      </div>
      <div>
        <h2 class="text-[50px] text-primary font-bold pt-3">
          Популярные товары
        </h2>
      </div>
    </div>
    <div class="flex justify-between pb-6"></div>

    <div>
      <Cart />
    </div>
  </div>
</template>

<script setup>
import Cart from "../components/Cart.vue";
</script>

<style lang="scss" scoped></style>
