<template>
  <div class="container mt-10">
    <div class="flex justify-between py-6">
      <h3 class="text-[40px]">Каталог</h3>
      <button class="border rounded-full py-2 px-10 flex items-center gap-3 hover:bg-primary hover:text-white duration-500">
        Весь каталог
        <box-icon name='right-arrow-alt' color='' ></box-icon>
      </button>
    </div>

    <!--  -->

    <div class="grid grid-cols-3 gap-6">
      <div
        v-for="item in prods"
        class="bg-[rgb(242,242,242)] border rounded-2xl relative h-[260px] py-6 pl-10"
      >
        <h3 class="text-[20px] text-primary w-[100px]">{{ item.title }}</h3>
        <img :src="item.icon" alt="" class="absolute right-4 top-5" />
        <div class="absolute bottom-6 flex items-center gap-4">
          <h3 class="text-primary">{{ item.price }}</h3>
          <img src="/grayArrov.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import 'boxicons' 

const prods = ref([
  {
    icon: "lyustra1.png", // replace with your actual icon class
    title: "Люстры",
    price: "От 540₽",
  },
  {
    icon: "lyustra2.png", // replace with your actual icon class
    title: "Светильники",
    price: "От 540₽",
  },
  {
    icon: "lyustra3.png", // replace with your actual icon class
    title: "Бра",
    price: "От 540₽",
  },
  {
    icon: "lyustra4.png", // replace with your actual icon class
    title: "Торшеры",
    price: "От 540₽",
  },
  {
    icon: "lyustra5.png", // replace with your actual icon class
    title: "Настольные лампы",
    price: "От 540₽",
  },
  {
    icon: "lyustra6.png", // replace with your actual icon class
    title: "Споты",
    price: "От 540₽",
  },
]);
</script>

<style lang="scss" scoped></style>
