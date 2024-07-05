import { defineStore } from "pinia";

export const usePiniaStore = defineStore("pinia", {
  state() {
    return {
      likedProducts: [],
      basket: [],
    };
  },
  actions: {
    addProductLiked(product) {
      const index = this.likedProducts.findIndex(
        (item) => product.id == item.id
      );

      console.log("ds", product);
      if (index == -1) {
        this.likedProducts.push(product);
      } else {
        this.likedProducts.splice(index, 1);
      }
    },
    addProductBasket(product) {
      const index = this.basket.findIndex((item) => product.id == item.id);
      console.log("basket" ,index);
      if (index == -1) {
        this.basket.push(product);
      } else {
        this.basket.splice(index, 1);
      }
    },
  },
  persist: true,
});
