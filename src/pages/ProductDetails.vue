<template>
  <div class="container mt-5">
    <a href="/home" class="text-[#c7c7c7]"> Главная ></a>
    <div v-if="product" class="mt-10">
      <div class="lg:flex gap-10">
        <div class="lg:w-1/2">
          <img
            :src="product.image"
            class="lg:w-[550px] lg:h-[500px]"
            alt="Product Image"
          />
        </div>
        <div class="lg:w-1/2">
          <h3 class="text-[40px] text-primary font-medium">
            {{ product.title }}
          </h3>
          <div class="lg:py-8">
            <h3 class="text-[#B3B3B3] text-sm">Scott</h3>
            <div>
              <h3 class="text-[#B3B3B3] text-sm">Артикул : 7655-188</h3>
            </div>
            <h3 class="text-[#4D932C]">В наличии</h3>
          </div>

          <div class="flex items-center gap-4">
            <h3 class="text-[40px] font-semibold">{{ product.price }}₽</h3>
            <h3 class="text-[18px] text-[#B3B3B3] line-through">
              {{ product.oldPrice }}₽
            </h3>
          </div>
          <p class="text-primary py-6">{{ product.description }}</p>
          <div class="flex items-center gap-4 mt-3">
            <div
              class="flex items-center justify-between border rounded-md w-[123px] h-[52px] py-3 px-3"
            >
              <button class="text-2xl py-2 px-3" @click="decrementProduct">
                -
              </button>
              <p>{{ countProduct }}</p>
              <button class="text-xl py-2 px-3" @click="incrementProduct">
                +
              </button>
            </div>
            <button
              @click="addToBasket(product, countProduct)"
              class="bg-primary py-3 px-8 border rounded-lg text-white"
            >
              В корзину
            </button>
            <button class="ml-2" @click="store.addProductLiked(product)">
              <box-icon
                v-if="isLiked(product)"
                name="heart"
                type="solid"
                color="#ff0004"
              ></box-icon>
              <box-icon v-else name="heart"></box-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>

    <div class="py-20">
      <h2 class="text-[40px] text-primary font-semibold py-4">
        Характеристика
      </h2>

      <div class="border">
        <div class="flex justify-between items-center py-3 px-6">
          <h3 class="font-semibold">Цвет</h3>
          <p class="text-[#4C4C4C] max-sm:w-1/2 max-sm:text-end">Жёлтый</p>
        </div>
        <div class="flex justify-between items-center py-3 px-6 bg-[#F8F8F8]">
          <h3 class="font-semibold">Год</h3>
          <p class="text-[#4C4C4C] max-sm:w-1/2 max-sm:text-end">2016</p>
        </div>
        <div class="flex justify-between items-center py-3 px-6">
          <h3 class="font-semibold">Диаметр колеса</h3>
          <p class="text-[#4C4C4C]">27.5</p>
        </div>
        <div class="flex justify-between items-center py-3 px-6 bg-[#F8F8F8]">
          <h3 class="font-semibold">Материал рамы</h3>
          <p class="text-[#4C4C4C]">Карбон</p>
        </div>
        <div class="flex justify-between items-center py-3 px-6">
          <h3 class="font-semibold">Размер</h3>
          <p class="text-[#4C4C4C]">L</p>
        </div>
        <div class="flex justify-between items-center py-3 px-6 bg-[#F8F8F8]">
          <h3 class="font-semibold">Страна</h3>
          <p class="text-[#4C4C4C]">Швейцария</p>
        </div>
        <div class="flex justify-between items-center py-3 px-6">
          <h3 class="font-semibold">Производитель</h3>
          <p class="text-[#4C4C4C]">Scott</p>
        </div>
        <div class="flex justify-between items-center py-3 px-6 bg-[#F8F8F8]">
          <h3 class="font-semibold">Покрышки</h3>
          <p class="text-[#4C4C4C] max-sm:w-1/2 max-sm:text-end">
            Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy /
            <br />
            PaceStar compound
          </p>
        </div>
        <div class="flex justify-between items-center py-3 px-6">
          <h3 class="font-semibold">Подседельный Штырь</h3>
          <p class="text-[#4C4C4C] max-sm:w-1/2 max-sm:text-end">
            Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series:
            <br />
            Carbon 2B SDS / 34.9mm
          </p>
        </div>
        <div class="flex justify-between items-center py-3 px-6 bg-[#F8F8F8]">
          <h3 class="font-semibold">Седло</h3>
          <p class="text-[#4C4C4C] max-sm:w-1/2 max-sm:text-end">
            Ritchey WCS Streem V3 Titanium rails
          </p>
        </div>
        <div class="flex justify-between items-center py-3 px-6">
          <h3 class="font-semibold">Вилка</h3>
          <p class="text-[#4C4C4C] max-sm:w-1/2 max-sm:text-end">
            Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle <br />
            / коническая рулевая труба / Удалённая блокировка, регулировка
            <br />
            отскока / ход 100mm
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { usePiniaStore } from "../store";
import "boxicons";

const store = usePiniaStore();

const route = useRoute();
const product = ref(null);
const countProduct = ref(1);

const incrementProduct = () => {
  countProduct.value++;
};
const decrementProduct = () => {
  if (countProduct.value > 1) countProduct.value--;
};

const isLiked = (product) => {
  return store.likedProducts.some((p) => p.id === product.id);
};

const fetchProduct = async (id) => {
  try {
    const response = await axios.get(
      `https://6686258383c983911b00f951.mockapi.io/products/${id}`
    );
    product.value = response.data;
    console.log("Product data:", product.value);
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

onMounted(() => {
  const productId = route.params.id;
  if (productId) {
    fetchProduct(productId);
  }
});

const addToBasket = (product, quantity) => {
  store.addProductBasket(product, quantity);
};
</script>

<style lang="scss" scoped></style>
