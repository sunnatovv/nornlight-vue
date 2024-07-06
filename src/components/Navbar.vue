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
          <button class="flex flex-col items-center">
            <img src="/korzina.png" alt="" />
            <p>Корзина</p>
          </button>
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
      class="w-[700px] h-[450px] ml-[28%] mt-[50px] mb-[400px] bg-white border rounded-md"
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
  <div class="lg:hidden bg-white w-full">
    <div class="container flex items-center justify-between py-4">
      <box-icon
        class="size-10"
        name="bar-chart-square"
        type="solid"
        rotate="270"
      ></box-icon>
      <router-link to="/home">
        <img src="/MainLogo.png" alt="" />
      </router-link>
      <div class="flex items-center gap-4 py-2">
        <div class="relative">
          <router-link to="/favorites">
            <button class="flex flex-col items-center">
              <img src="/heart.png" alt="" />
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

        <div class="relative">
          <button class="flex flex-col items-center">
            <img src="/korzina.png" alt="" />
          </button>
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
    <!-- <div class="container flex flex-col py-4">
      <div class="flex items-center justify-between">
        <router-link to="/home">
          <img src="/MainLogo.png" alt="" />
        </router-link>

        <div class="flex items-center gap-4 py-2">
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

          <div class="relative">
            <button class="flex flex-col items-center">
              <img src="/korzina.png" alt="" />
              <p>Корзина</p>
            </button>
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
      <div
        class="container flex justify-between px-6 items-center border rounded-full w-[500px]"
      >
        <input
          type="text"
          class="py-3 w-full px-2 pr-3 outline-none"
          placeholder="Поиск по товарам"
        />
        <img src="/searchIco.png" alt="" />
      </div>
    </div> -->
  </div>

  <!-- navbar for mobile -->
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { usePiniaStore } from "../store";

const store = usePiniaStore();

const router = useRouter();

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped></style>
