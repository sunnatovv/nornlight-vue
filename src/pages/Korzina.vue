<template>
  <div class="container mb-16">
    <div class="py-6">
      <div>
        <a href="/home" class="text-[#c7c7c7]"> Главная / </a>
        <a href="/catalog" class="text-[#c7c7c7]"> Каталог / </a>
        <a href="/korzina">Корзина</a>
      </div>
      <div>
        <h2 class="text-[60px] text-primary font-bold">Корзина</h2>
      </div>
    </div>

    <div class="w-full bg-[#F2F2F2] rounded-md py-6 px-8">
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
            <td class="py-3 px-">
              <p>{{ item.description }}</p>
            </td>
            <td class="py-3 px-4 flex items-center">
              <p>RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS</p>
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
  </div>
</template>

<script setup>
import { usePiniaStore } from "../store";
import "boxicons";

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
</script>
