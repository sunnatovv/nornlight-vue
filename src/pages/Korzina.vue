<template>
  <div class="container mb-16">
    <div class="py-6">
      <div>
        <a href="/home" class="text-[#c7c7c7]"> Главная / </a>
        <a href="/catalog" class="text-[#c7c7c7]"> Каталог / </a>
        <a href="/korzina">Корзина</a>
      </div>
      <div>
        <h2 class="lg:text-[60px] text-[24px] text-primary font-bold">
          Корзина
        </h2>
      </div>
    </div>

    <div class="w-full bg-[#F2F2F2] rounded-md py-6 px-8 max-sm:hidden">
      <table class="">
        <thead class="shadow-sm">
          <tr>
            <th class="w-1/6 py-3 px-4 text-left">Фото</th>
            <th class="w-1/4 py-3 px-4 text-left">Товары</th>
            <th class="w-1/2 py-3 px-4 text-left">Описание</th>
            <th class="w-1/6 py-3 px-4 text-left">Артикул</th>
            <th class="w-1/6 py-3 px-4 text-center">Количество</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in store.basket"
            :key="index"
            class="border-b"
          >
            <td class="py-3 px-4">
              <img
                :src="item.image"
                alt="Product Image"
                class="w-16 h-16 object-cover"
              />
            </td>
            <td class="py-3 px-4">
              <p class="py-3">{{ item.title }}</p>
              <p class="text-[#454545] font-semibold">{{ item.price }} ₽</p>
            </td>
            <td class="py-3 px-4">
              <p>{{ item.description }}</p>
            </td>
            <td class="py-3 px-4 flex items-center">
              <p>{{ item.article }}</p>
            </td>
            <td class="py-3 px-4 text-center">
              <div class="flex items-center justify-center">
                <button @click="decreaseQuantity(index)" class="px-3 py-2">
                  -
                </button>
                <p class="px-3 border rounded-md py-2">{{ item.quantity }}</p>
                <button @click="increaseQuantity(index)" class="px-3 py-2">
                  +
                </button>
                <button
                  @click="removeItem(index)"
                  class="ml-2 flex items-center"
                >
                  <box-icon name="box" type="solid" color="#f80707"></box-icon>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- shop for mobile -->

    <div class="lg:hidden">
      <div v-for="(item, index) in store.basket" class="flex gap-6 mb-5 bg-[#F2F2F2] py-6 px-3 rounded-md">
        <div class="w-1/4">
          <img :src="item.image" alt="" />
        </div>
        <div class="w-full">
          <h2 class="font-semibold text-primary text-[18px] ">{{item.title}}</h2>
          <p class="text-primary font-bold py-3 text-[20px]">{{ item.price }} ₽</p>
          <p class="py-1">{{ item.description }}</p>
          <p class="py-2">
            RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS
          </p>
          <div class="flex items-center justify-start">
                <button @click="decreaseQuantity(index)" class="px-4 py-3">
                  -
                </button>
                <p class="px-4 border rounded-md py-3">{{ item.quantity }}</p>
                <button @click="increaseQuantity(index)" class="px-4 py-3">
                  +
                </button>
                <button
                  @click="removeItem(index)"
                  class="ml-2 flex items-center"
                >
                  <box-icon name="box" type="solid" color="#f80707" class="ml-20"></box-icon>
                </button>
              </div>
        </div>
      </div>
    </div>
    <!-- shop for mobile -->

    <form
      @submit.prevent="clearBasket"
      class="w-full bg-[#F2F2F2] rounded-md py-10 lg:px-8 px-4 mt-4"
    >
      <h2 class="text-[32px] text-primary font-semibold pb-6">Оформление</h2>
      <div class="flex max-sm:flex-col lg:gap-6 gap-3">
        <input
          type="text"
          placeholder="ФИО"
          class="lg:w-1/3 border border-primary rounded-full py-3 outline-none px-5"
          v-model="clientName"
          required
        />
        <input
          type="tel"
          placeholder="телефон"
          class="lg:w-1/3 border border-primary rounded-full py-3 outline-none px-5"
          v-model="clientPhone"
          required
        />
        <input
          type="email"
          placeholder="Электронная почта"
          class="lg:w-1/3 border border-primary rounded-full py-3 outline-none px-5"
          required
        />
      </div>
      <hr class="mt-8" />

      <div>
        <h2 class="text-[32px] text-primary font-semibold lg:py-6 py-3">Доставка</h2>
        <div class="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Адрес доставки"
            class="lg:w-2/3 border border-primary rounded-full py-3 outline-none px-5"
          />
          <textarea
            name="comment"
            id="comment"
            placeholder="Комментарий"
            class="lg:w-2/3 border border-primary rounded-2xl py-3 px-3 resize-none outline-none h-[150px]"
          ></textarea>
        </div>
      </div>

      <div class="w-full bg-[#F2F2F2] rounded-md py-10 lg:px-8 mt-4">
        <h2 class="lg:text-[32px] text-[24px] text-primary font-semibold lg:pb-6 pb-4">Оплата</h2>
        <div class="lg:flex gap-2 text-[#9c9c9c]">
          <div class="flex">
            <h3>Товары.............................................</h3>
            <p>{{ totalProductsPrice }} ₽</p>
          </div>
          <div class="flex">
            <h3>Доставка..............................................</h3>
            <p>560 ₽</p>
          </div>
        </div>

        <div class="mt-10">
          <p class="text-24px font-bold">{{ totalProductsPrice + 560 }} ₽</p>
        </div>

        <div class="mt-6 max-sm:flex max-sm:justify-center">
          <button
            type="submit"
            class="w-[324px] max-sm:w-[330px] py-3 bg-primary text-white rounded-full"
          >
            Купить
          </button>
        </div>
      </div>
    </form>
    <!-- purchase section -->
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { usePiniaStore } from "../store";
import "boxicons";

const clientName = ref("");
const clientPhone = ref("");

const store = usePiniaStore();

const increaseQuantity = (index) => {
  store.basket[index].quantity++;
};

const decreaseQuantity = (index) => {
  if (store.basket[index].quantity > 1) {
    store.basket[index].quantity--;
  }
};

const removeItem = (index) => {
  store.basket.splice(index, 1);
};

const clearBasket = () => {
  if (!clientName.value || !clientPhone.value) {
    alert("Please fill your name and phone number");
    return;
  } else {
    alert("Thank you for your purchase.");
    clientName.value = "";
    clientPhone.value = "";
    store.basket = [];
  }
};

const totalProductsPrice = computed(() =>
  store.basket.reduce((total, item) => total + item.price * item.quantity, 0)
);
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
