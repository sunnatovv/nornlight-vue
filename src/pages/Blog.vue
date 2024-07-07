<template>
  <div class="container py-7">
    <div>
      <div>
        <a href="/home" class="text-[#c7c7c7]"> Главная / </a>
        <a href="/blog">Блог</a>
      </div>
      <div>
        <h2 class="lg:text-[60px] text-[45px] text-primary font-bold">Блог</h2>
      </div>
    </div>

    <div>
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-4">
        <div v-for="item in blog">
          <div class="h-[435px] border rounded-r-lg hover:shadow-md">
            <img class="border rounded-md" :src="item.image" alt="" />
            <div class="px-2 flex items-center justify-between mr-3">
              <h3 class="text-[20px] font-semibold py-4 mt-2">
                {{ item.description }}
              </h3>
              <box-icon
                name="up-arrow-alt"
                class="rotate-[45deg] mt-2"
              ></box-icon>
            </div>
            <p class="text-primary px-2">2022.01.11</p>
          </div>
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
