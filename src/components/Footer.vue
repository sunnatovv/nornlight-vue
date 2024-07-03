<template>
  <div class="bg-[#f8f8f8]">
    <div class="container flex justify-between py-12">
      <div>
        <img src="/MainLogo.png" alt="" />
        <h3 class="py-3">8 (800) 890-46-56</h3>
        <img src="/visa.png" class="py-2" alt="" />
        <p class="py-2 text-[#a0a0a0]">Политика конфидециальности</p>
        <p class="py-2 text-[#a0a0a0]">Пользовательское соглашение</p>
        <div class="flex gap-3 pt-4">
          <img v-for="item in 3" src="/footervk.png" alt="" />
        </div>
      </div>

      <!-- col 2 -->

      <div>
        <h2 class="font-semibold text-[22px]">Покупателям</h2>
        <p class="text-[#a0a0a0] py-2">О компании</p>
        <p class="text-[#a0a0a0] py-2">Доставка и оплата</p>
        <p class="text-[#a0a0a0] py-2">Возврат</p>
        <p class="text-[#a0a0a0] py-2">Гарантии</p>
        <p class="text-[#a0a0a0] py-2">Контакты</p>
        <p class="text-[#a0a0a0] py-2">Блог</p>
      </div>
      <!-- col 2 -->

      <!-- col3 -->
      <div>
        <h2 class="font-semibold text-[22px]">Товары</h2>
        <p class="text-[#a0a0a0] py-2">Люстры</p>
        <p class="text-[#a0a0a0] py-2">Светильники</p>
        <p class="text-[#a0a0a0] py-2">Бра</p>
        <p class="text-[#a0a0a0] py-2">Торшеры</p>
        <p class="text-[#a0a0a0] py-2">Комплектуюшие</p>
        <p class="text-[#a0a0a0] py-2">Настольные лампы</p>
      </div>
      <!-- col3 -->

      <!-- col4 -->

      <div class="mt-10">
        <p class="text-[#a0a0a0] py-2">Споты</p>
        <p class="text-[#a0a0a0] py-2">Трековые светильники</p>
        <p class="text-[#a0a0a0] py-2">Уличные светильники</p>
        <p class="text-[#a0a0a0] py-2">Технические светильники</p>
        <p class="text-[#a0a0a0] py-2">Светодиодные ленты</p>
      </div>
      <!-- col4 -->
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
