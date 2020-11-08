<template>
  <div class="item">
    <div class="item__content">
      <div class="">
        <img
          class="item__image"
          v-bind:src="require('../assets/images/' + cartItemPage.image)"
          alt="img"
        />
      </div>
      <div class="item__info">
        <div class="item__title">
          {{ cartItemPage.name }}
        </div>
        <div class="item__price">{{ cartItemPage.price }} usd</div>
        <div class="item__buy">
          {{ cartItemPage.quantity }}
          <button class="btn buy-item" @click="addToCart">Добавить в корзину</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "catalog-item",
  components: {},
  data() {
    return {};
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
    ...mapActions(["ADD_TO_CART"]),
    addToCart() {
      this.ADD_TO_CART(this.cartItemPage);
    },
  },
  mounted() {
    //Если без $ то теряем рективность. $set - Добавляет в наш объект (cart_item_data) item новое свойство с названием 'quantity' и присваевает значение указаное в 3-ем аргументе
    this.$set(this.cartItemPage, "quantity", 1);
  },
  created: function () {
    return this.$route.params.id;
  },
};
</script>


<style lang="scss" scoped>
.item {
  &__content {
    display: flex;
    justify-content: space-between;
    margin: 0 70px;
  }
  &__image {
    height: 400px;
  }
  &__info {
    margin-right: 180px;
  }
  &__title {
    font-size: 26px;
    // text-transform: uppercase;
    color: #302f2f;
    margin-bottom: 40px;
  }
  &__price {
    font-size: 26px;
    text-transform: uppercase;
    color: #302f2f;
    margin-bottom: 40px;
  }
}
.buy-item{
  padding: 20px 60px;
  font-size: 20px;
}
</style>
