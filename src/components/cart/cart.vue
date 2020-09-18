<template>
  <div id="cart" class="cart">
    <router-link :to="{name: 'catalog'}">
      <a class="back btn">
        Back to Catalog
      </a>
    </router-link>
     <p v-if="!cart_data.length">No products..</p>
    <cart-item
      v-for="(item, index) in cart_data"
      :key="item.article"
      v-bind:cart_item_data="item"
      @deleteCartItem="deleteCartItem(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    >{{item}}</cart-item>
    <div class="cart__total">
      <p class="cart__total_name">Total:</p>
      <p>{{cartTotalCost}}$</p>
    </div>
  </div>
</template>

<script>
import CartItem from "./cart-item";
import { mapActions } from "vuex";

export default {
  name: "cart",
  components: {
    CartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    cartTotalCost() {
      //Подсчет общей суммы покупки
      return this.cart_data.reduce(
        (res, item) => res + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "DECREMENT_CART_ITEM",
      "INCREMENT_CART_ITEM",
    ]),
    deleteCartItem(index) {
      this.DELETE_FROM_CART(index);
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
  },
};
</script>

<style lang="scss">
.cart {
  margin-bottom: 150px;
  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding * 3;
    display: flex;
    justify-content: center;
    background: $green-bg;
    color: #fff;
    font-size: 20px;
    &_name {
      margin-right: $margin * 2;
    }
  }
}
</style>
