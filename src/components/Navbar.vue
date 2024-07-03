<template>
  <div class="sticky top-[-40px]">
    <!-- First component started -->
    <div class="flex justify-between py-2 container">
      <div class="flex gap-6">
        <a href="#" class="text-[#a2a2a2] text-sm font-semibold">О компании</a>
        <a href="#" class="text-[#a2a2a2] text-sm font-semibold"
          >Доставка и оплата</a
        >
        <a href="#" class="text-[#a2a2a2] text-sm font-semibold">Возврат</a>
        <a href="#" class="text-[#a2a2a2] text-sm font-semibold">Гарантии</a>
        <a href="#" class="text-[#a2a2a2] text-sm font-semibold">Контакты</a>
        <a href="#" class="text-[#a2a2a2] text-sm font-semibold">Блог</a>
      </div>
      <div class="flex gap-6">
        <p>8 (800) 890-46-56</p>
        <a href="#" class="text-[#a2a2a2] text-sm font-semibold"
          >Заказать звонок</a
        >
      </div>
    </div>
    <!-- First component ended -->

    <!-- second component started -->
    <div class="bg-white w-full">
      <div class="container flex justify-between py-4">
        <img src="/MainLogo.png" class="flex items-center" alt="" />

        <!-- kategory -->
        <button
          class="bg-primary text-white flex py-3 px-8 border rounded-full gap-3 items-center"
        >
          <img class="" src="/cateIco.png" alt="" />
          <p>Каталог</p>
        </button>
        <!-- kategory -->

        <div
          class="flex justify-between px-6 items-center border rounded-full w-[500px]"
        >
          <input
            type="text"
            class="py-3 w-full px-2 pr-3 outline-none"
            placeholder="Поиск по товарам"
          />
          <img src="/searchIco.png" alt="" />
        </div>
        <div class="flex flex-col items-center">
          <img src="/heart.png" alt="" />
          <p>Избранное</p>
        </div>
        <div class="flex flex-col items-center">
          <img src="/antena.png" alt="" />
          <p>Сравнение</p>
        </div>
        <div class="flex flex-col items-center">
          <img src="/korzina.png" alt="" />
          <p>Корзина</p>
        </div>
      </div>
    </div>

    <!-- second component ended -->
  </div>
</template>

<script setup></script>

<style scoped></style>
