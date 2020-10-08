<template>
  <div class="catalog">
    <!-- <catalog-item-view 
    @addToCart="addToCartFromItemView"
    /> -->
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
// import CatalogItemView from "../../views/catalog-item-view";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "catalog",
  components: {
    CatalogItem,
    // CatalogItemView
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
}
</style>
