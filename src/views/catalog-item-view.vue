<template>
  <div class="page__item">
    <div class="page__item-image">
      <img
        class="catalog-item__image"
        v-bind:src="require('../assets/images/' + cartItemPage.image)"
        alt="img"
      />
    </div>
    <div class="page__item-info">
      {{ cartItemPage.name }}
      {{ cartItemPage.price }}
      {{ cartItemPage.quantity }}
      <button class="catalog-item__add btn" @click="addToCart">
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "catalog-item",
  components: {},
  data() {
    return {
      item: {},
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
    cartItemPage() {
      return this.PRODUCTS.find(
        (item) => item.article === this.$route.params.id
      );
    },
  },
  methods: {
    // Метод эмит чтобы пробросить данные родителю. Первый аргумент как будет назваться в родиетеле.Второй что передаём с ребёнка.
    addToCart() {
      this.$emit("addToCartFromItemView", this.product_data);
    },
  },
  mounted() {
    //Если без $ то теряем рективность. $set - Добавляет в наш объект (cart_item_data) item новое свойство с названием 'quantity' и присваевает значение указаное в 3-ем аргументе
    // this.$set(this.product_data, 'quantity', 1);
  },
  created: function () {
    return this.$route.params.id;
  },
};
</script>


<style lang="scss" scoped>
.catalog-item__image {
  height: 500px;
  img {
    height: 100%;
    object-fit: contain;
  }
}
.page__item {
  display: flex;
  justify-content: space-between;

  &-image {
  }
  &-info {
  }
}
</style>
