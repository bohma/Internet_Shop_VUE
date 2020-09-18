<template>
  <div class="catalog">
    <!-- <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="catalog__link_to_cart">
        <img
          class="catalog__image-cart"
          v-bind:src="require('../../assets/images/cart.png')"
          alt="img"
        />
        {{CART.length}}
      </div>
    </router-link>-->
      <catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        v-bind:product_data="product"
        @addToCart="addToCart"
      >
      </catalog-item>
  </div>
</template>

<script>
//  @sendArticle="shpwChildArticleInConsole" Связываем ЭМИТ из ребёнка и получаем данные в указаный в родителе(здесь) метод

import CatalogItem from "./catalog-item";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "catalog",
  components: {
    CatalogItem,
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    ...mapActions(["ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.catalog {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  // &__link_to_catalog {
  //   position: absolute;
  //   top: 30px;
  //   right: 20px;
  //   padding: $padding * 2;
  //   border: solid 1px #aeaeae;
  // }
}
</style>
