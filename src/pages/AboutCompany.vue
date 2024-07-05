<template>
  <div class="container flex py-10">
    <div class="w-1/2">
      <div>
        <a href="/home" class="text-[#c7c7c7]"> Главная / </a>
        <a href="/about-company">О компании</a>
      </div>
      <div>
        <h2 class="text-[60px] text-primary font-bold">О компании</h2>
      </div>

      <div class="flex flex-col gap-5 mt-4">
        <div class="w-[530px] h-[250px] bg-[#F2F2F2] rounded-md py-5 px-10">
          <h3 class="text-[60px] text-primary font-semibold">170+</h3>
          <p class="text-[24px] text-primary font-medium mt-16">Товаров</p>
        </div>
        <div class="w-[530px] h-[250px] bg-[#F2F2F2] rounded-md py-5 px-10">
          <h3 class="text-[60px] text-primary font-semibold">1000+</h3>
          <p class="text-[24px] text-primary font-medium mt-16">
            Довольных покупателей
          </p>
        </div>
        <div class="w-[530px] h-[250px] bg-[#F2F2F2] rounded-md py-5 px-10">
          <h3 class="text-[60px] text-primary font-semibold">170+</h3>
          <p class="text-[24px] text-primary font-medium mt-16">Товаров</p>
        </div>
      </div>
    </div>
    <div class="w-1/2 flex flex-col gap-12 mt-16 text-[19px]">
      <p>
        Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников
        для освещения вашего дома или офиса. У нас вы найдете разнообразные
        модели светильников, от современных и стильных до классических и
        элегантных. Мы предлагаем качественные и надежные светильники от лучших
        производителей, которые подарят вам комфорт и уют.
      </p>
      <p>
        Покупая светильники в нашем интернет-магазине, вы получаете отличное
        соотношение цены и качества. Мы осуществляем доставку по всей России,
        чтобы каждый клиент мог насладиться прекрасным светом и удобством
        покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис
        тепла и света с NORNLIGHT!
      </p>
      <p>
        Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников
        для освещения вашего дома или офиса. У нас вы найдете разнообразные
        модели светильников, от современных и стильных до классических и
        элегантных. Мы предлагаем качественные и надежные светильники от лучших
        производителей, которые подарят вам комфорт и уют.
      </p>
      <p>
        Покупая светильники в нашем интернет-магазине, вы получаете отличное
        соотношение цены и качества. Мы осуществляем доставку по всей России,
        чтобы каждый клиент мог насладиться прекрасным светом и удобством
        покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис
        тепла и света с NORNLIGHT!
      </p>
    </div>
  </div>

  <div class="container">
    <Slider/>
    <Blog/>

  </div>
</template>

<script setup>
import Slider from '../components/Slider.vue';
import Blog from '../components/Blog.vue';
</script>

<style lang="scss" scoped></style>
