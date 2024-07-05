<template>
  <div v-if="product" class="container">
    <div>
      <a href="/home" class="text-[#c7c7c7]"> Главная ></a>
    </div>
    <div class="flex">
      <div class="w-1/2">
        <img :src="product.image" class="w-full h-[550px]" alt="Product Image" />
      </div>
      <div class="w-1/2">
        <h3 class="text-[40px] text-primary font-medium">
          {{ product.title }}
        </h3>
        <div>
          <h3 class="text-[#B3B3B3] text-sm">Scott</h3>
          <div>
            <h3 class="text-[#B3B3B3] text-sm">Артикул : 7655-188</h3>
          </div>
          <h3 class="text-[#4D932C]">В наличии</h3>
        </div>

        <div class="flex items-center gap-4">
          <h3 class="text-[40px] font-semibold">{{ product.price }}₽</h3>
          <h3 class="text-[18px] text-[#B3B3B3]">{{ product.oldPrice }}₽</h3>
        </div>
        <p class="text-primary">{{ product.description }}</p>
        <div class="flex items-center gap-4">
          <div
            class="flex items-center justify-between border rounded-md w-[123px] h-[52px] py-3 px-3"
          >
            <button class="text-2xl py-2 px-3">-</button>
            <p>1</p>
            <button class="text-xl py-2 px-3">+</button>
          </div>
          <button class="bg-primary py-3 px-8 border rounded-lg">
            В корзину
          </button>
          <button @click="store.addProductLiked(product)">
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
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { usePiniaStore } from "../store";
import 'boxicons'

const store = usePiniaStore();

const route = useRoute();
const product = ref(null);

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
</script>

<style lang="scss" scoped></style>
