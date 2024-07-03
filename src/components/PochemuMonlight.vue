<template>
  <div class="container mt-10">
    <div class="flex justify-between py-6">
      <h3 class="text-[40px]">Почему NORNLIGHT?</h3>
      <button class="border rounded-full py-3 px-14">О компании</button>
    </div>

    <div class="grid grid-cols-4 shadow-lg gap-5">
      <div v-for="feature in features" :key="feature.title" class="px-8 py-10 border rounded">
        <div>
          <img :src="feature.icon" alt="" />
          <h3 class="font-semibold pt-14 text-[18px]">{{ feature.title }}</h3>
          <p class="pt-4 text-[#a0a0a0]">{{ feature.description }}</p>
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
