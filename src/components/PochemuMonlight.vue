<template>
  <div class="container mt-10">
    <div class="flex justify-between py-6">
      <h3 class="lg:text-[40px] text-[24px]">Почему NORNLIGHT?</h3>
      <button class="max-sm:hidden border rounded-full py-3 px-14">О компании</button>
    </div>

    <div class="grid lg:grid-cols-4 grid-cols-2  gap-5">
      <div v-for="feature in features" :key="feature.title" class="lg:px-8 px-4  lg:py-10 py-5 border rounded hover:shadow-lg">
        <div>
          <img :src="feature.icon" class="max-sm:ml-9" alt="" />
          <h3 class="font-semibold lg:pt-14 pt-4 lg:text-[18px] max-sm:text-center">{{ feature.title }}</h3>
          <p class="lg:pt-4 pt-2 text-[#a0a0a0]  max-sm:text-[12px] max-sm:text-center">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const features = ref([
  {
    icon: "pochemu1.png", // replace with your actual icon class
    title: "Только проверенные бренды",
    description: "Бренды, проверенные временем и качеством",
  },
  {
    icon: "pochemu4.png", // replace with your actual icon class
    title: "Самые низкие цены",
    description: "Ниже не будет нигде",
  },
  {
    icon: "pochemu1.png", // replace with your actual icon class
    title: "Быстрая доставка",
    description: "Доставляем по всей РФ за 1-10 дней",
  },
  {
    icon: "pochemu4.png", // replace with your actual icon class
    title: "Большой ассортимент",
    description: "Более 1000 товаров",
  },
]);
</script>

<style lang="scss" scoped></style>
