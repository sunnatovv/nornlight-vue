<template>
  <div class="container pb-12">
    <div class="flex items-center justify-between py-6">
      <h3 class="lg:text-[40px] text-[24px] font-semibold max-sm:w-[300px]">Только проверенные бренды</h3>
      <div class="max-sm:hidden flex gap-2">
        <button class="border rounded-full py-2 px-6 flex items-center">
          <img src="/arrowleft.png" alt="" />
        </button>
        <button class="border rounded-full py-2 px-6">
          <img src="/arrowright1.png" alt="" />
        </button>
      </div>
    </div>

    <Vue3Marquee class="my-8">
      <img class="px-4" src="/carousel1.png" alt="Image" />
      <img class="px-4" src="/carousel2.png" alt="Image" />
      <img class="px-4" src="/carousel3.png" alt="Image" />
      <img class="px-4" src="/carousel1.png" alt="Image" />
      <img class="px-4" src="/carousel2.png" alt="Image" />
    </Vue3Marquee>
  </div>
</template>

<script setup></script>
