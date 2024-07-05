<template>
  <div class="container mt-10 pb-10">
    <div class="flex justify-between py-6">
      <h3 class="text-[40px] text-primary">Блог</h3>
      <button class="border rounded-full py-3 px-14 text-primary">
        Перейти в блог
      </button>
    </div>

    <div class="grid grid-cols-3 gap-5  mt-4">
      <div v-for="item in blog">
        <div class="h-[435px] border rounded-r-lg hover:shadow-md">
          <img class="border rounded-md" :src="item.image" alt="" />
          <div class="px-2 flex items-center justify-between mr-3">
            <h3 class="text-[20px] font-semibold py-4 mt-2">
              {{ item.description }}
            </h3>
            <box-icon name="up-arrow-alt" class="rotate-[45deg] mt-2"></box-icon>
          </div>
          <p class="text-primary px-2">2022.01.11</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const blog = ref([]);

onMounted(() => {
  axios
    .get("https://6686258383c983911b00f951.mockapi.io/blog")
    .then((response) => {
      blog.value = response.data;
    })
    .catch((error) => {
      console.error("There was an error fetching the blog:", error);
    });
});
</script>

<style lang="scss" scoped></style>
