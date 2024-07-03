<template>
  <div class="container mt-10 ">
    <div class="flex justify-between py-6">
      <h3 class="text-[40px]">Каталог</h3>
      <button class="border rounded-full py-3 px-14">Весь каталог</button>
    </div>

    <!--  -->

    <div class="grid grid-cols-3 gap-6">
      <div v-for="item in 6"
        class="bg-[rgb(242,242,242)] border rounded-2xl relative h-[260px] py-6 pl-10"
      >
        <h3 class="text-[20px] text-primaru">Люстры</h3>
        <img src="/lyustra1.png" alt="" class="absolute right-4 top-8" />
        <div class="absolute bottom-6 flex items-center gap-4">
          <h3 class="text-primary">От 540₽</h3>
          <img src="/grayArrov.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
