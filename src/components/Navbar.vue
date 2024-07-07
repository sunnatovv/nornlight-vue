<template>
  <div class="max-sm:hidden sticky top-[-40px] z-40 shadow-lg">
    <!-- First component started -->
    <div class="flex justify-between py-2 container">
      <div class="flex gap-6">
        <a
          href="/about-company"
          class="text-[#a2a2a2] text-sm font-semibold hover:text-primary"
          >О компании</a
        >
        <a
          href="/payment"
          class="text-[#a2a2a2] text-sm font-semibold hover:text-primary"
          >Доставка и оплата</a
        >
        <a
          href="/return"
          class="text-[#a2a2a2] text-sm font-semibold hover:text-primary"
          >Возврат</a
        >
        <a
          href="/garant"
          class="text-[#a2a2a2] hover:text-primary text-sm font-semibold"
          >Гарантии</a
        >
        <a
          href="/contact"
          class="text-[#a2a2a2] hover:text-primary text-sm font-semibold"
          >Контакты</a
        >
        <a
          href="/blog"
          class="text-[#a2a2a2] hover:text-primary text-sm font-semibold"
          >Блог</a
        >
      </div>
      <div class="flex gap-6">
        <p class="cursor-pointer">8 (800) 890-46-56</p>
        <button
          @click="toggleMenu"
          class="text-[#a2a2a2] text-sm font-semibold hover:text-primary"
        >
          Заказать звонок
        </button>
      </div>
    </div>
    <!-- First component ended -->

    <!-- second component started -->
    <div class="bg-white w-full">
      <div class="container flex items-center justify-between py-4">
        <router-link to="/home">
          <img src="/MainLogo.png" alt="" />
        </router-link>

        <!-- kategory -->
        <router-link to="/catalog">
          <button
            class="bg-primary text-white flex py-3 px-8 border rounded-full gap-3 items-center"
          >
            <img class="" src="/cateIco.png" alt="" />
            <p>Каталог</p>
          </button>
        </router-link>

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
        <div class="relative">
          <router-link to="/favorites">
            <button class="flex flex-col items-center">
              <img src="/heart.png" alt="" />
              <p>Избранное</p>
            </button>
          </router-link>
          <div
            v-if="store.likedProducts.length > 0"
            class="absolute top-[-9px] right-6 text-center"
          >
            <p
              class="w-[15px] h-[15px] bg-red-600 text-white border rounded-full text-[9px]"
            >
              {{ store.likedProducts.length }}
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center">
          <img src="/antena.png" alt="" />
          <p>Сравнение</p>
        </div>
        <div class="relative">
          <router-link to="/korzina">
            <button class="flex flex-col items-center">
              <img src="/korzina.png" alt="" />
              <p>Корзина</p>
            </button>
          </router-link>
          <div
            v-if="store.basket.length > 0"
            class="absolute top-[-4px] right-3 text-center"
          >
            <p
              class="w-[15px] h-[15px] bg-red-600 text-white border rounded-full text-[9px]"
            >
              {{ store.basket.length }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- second component ended -->
  </div>

  <div v-if="isMenuOpen" class="absolute z-50 mx-auto backdrop-blur-sm w-full">
    <div
      class="lg:w-[700px] lg:h-[450px] lg:ml-[28%] mt-[50px] mb-[400px] bg-white border rounded-md"
    >
      <div class="flex flex-col py-10 px-12 gap-3">
        <div class="flex items-center justify-end">
          <img @click="toggleMenu" class="cursor-pointer" src="/x.png" alt="" />
        </div>
        <h3 class="text-[50px] font-semibold">Заполните, и мы перезвоним</h3>
        <input
          class="px-3 py-3 outline-none border rounded-md borer-primary"
          type="text"
          placeholder="Ваше имя"
        />
        <input
          class="px-3 py-3 outline-none border rounded-md borer-primary"
          type="text"
          placeholder="Ваш телефон"
        />

        <button class="py-3 px-8 rounded-full bg-primary text-white mt-4">
          Отправить
        </button>
      </div>
    </div>
  </div>

  <!-- navbar for mobile -->
  <div class="sticky top-[0px] z-40 shadow-lg">
    <div class="lg:hidden bg-white w-full py-4">
      <div class="container flex items-center justify-between pb-2">
        <div class="flex items-center gap-8">
          <img @click="hamburgerMenu"  src="/hamburger.png" alt="" />
          <router-link to="/home">
            <img v-if="!isHambOpen" src="/MainLogo.png" alt="" />
          </router-link>
        </div>

        <div class="flex items-center gap-4 py-2">
          <div class="relative">
            <router-link to="/favorites">
              <button class="flex items-center">
                <img src="/heart.png" alt="" />
              </button>
            </router-link>
            <div
              v-if="store.likedProducts.length > 0"
              class="absolute top-[-9px] lg:right-6 right-[-5px] text-center"
            >
              <p
                class="w-[15px] h-[15px] bg-red-600 text-white border rounded-full text-[9px]"
              >
                {{ store.likedProducts.length }}
              </p>
            </div>
          </div>

          <div class="relative">
            <router-link to="/korzina">
              <button class="flex items-center">
              <img src="/korzina.png" alt="" />
            </button>
            </router-link>
            <div
              v-if="store.basket.length > 0"
              class="absolute top-[-4px] lg:right-3 right-[-5px] text-center"
            >
              <p
                class="w-[15px] h-[15px] bg-red-600 text-white border rounded-full text-[9px]"
              >
                {{ store.basket.length }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container flex justify-between px-6 items-center border rounded-full"
      >
        <input
          type="text"
          class="py-3 w-full px-2 pr-3 outline-none"
          placeholder="Поиск по товарам"
        />
        <img src="/searchIco.png" alt="" />
      </div>
    </div>
  </div>
  <div
    v-if="isHambOpen" @click="hamburgerMenu"
    class="w-full h-full backdrop-blur-sm fixed z-30 bg-[#454545] bg-opacity-50"
  ></div>

  <div v-if="isHambOpen" class="h-[519px] w-full fixed z-40 bg-white pt-2">
    <div class="flex flex-col">
      <router-link
        @click="hamburgerMenu"
        class="shadow-sm py-4 text-center text-[#a2a2a2]"
        to="/about-company"
        >О компании</router-link
      >
      <router-link
        @click="hamburgerMenu"
        class="shadow-sm py-4 text-center text-[#a2a2a2]"
        to="/payment"
        >Доставка и оплата</router-link
      >
      <router-link
        @click="hamburgerMenu"
        class="shadow-sm py-4 text-center text-[#a2a2a2]"
        to="/return"
        >Возврат</router-link
      >
      <router-link
        @click="hamburgerMenu"
        class="shadow-sm py-4 text-center text-[#a2a2a2]"
        to="/garant"
        >Гарантии</router-link
      >
      <router-link
        @click="hamburgerMenu"
        class="shadow-sm py-4 text-center text-[#a2a2a2]"
        to="/contact"
        >Контакты</router-link
      >
      <router-link
        @click="hamburgerMenu"
        class="shadow-sm py-4 text-center text-[#a2a2a2]"
        to="/blog"
        >Блог</router-link
      >
    </div>
    <router-link class="flex justify-center my-4" to="/catalog">
      <button
        class="bg-primary text-white flex py-3 px-8 w-full justify-center border rounded-full mx-9 gap-3 items-center"
      >
        <img class="" src="/cateIco.png" alt="" />
        <p>Каталог</p>
      </button>
    </router-link>

    <div class="flex flex-col gap-6 items-center justify-center">
      <p class="cursor-pointer text-[16px]">8 (800) 890-46-56</p>
      <button
        @click="toggleMenu"
        class="text-[#a2a2a2] text-sm font-semibold hover:text-primary"
      >
        Заказать звонок
      </button>
    </div>
  </div>

  <!-- navbar for mobile -->
</template>

<script setup>
import { ref } from "vue";
import { usePiniaStore } from "../store";

const store = usePiniaStore();

const isMenuOpen = ref(false);
const isHambOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const hamburgerMenu = () => {
  isHambOpen.value = !isHambOpen.value;
};
</script>

<style scoped></style>
