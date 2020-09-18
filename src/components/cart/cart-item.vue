<template>
  <div id="cart-item" class="cart-item">
    <img
      class="cart-item__image"
      v-bind:src="require('../../assets/images/' + cart_item_data.image)"
      alt="img"
    />
    <div class="cart-item__info">
      <div class="cart-item__title">
        Name
      </div>
      <p>{{ cart_item_data.name }}</p>
    </div>
    <div class="cart-item__info">
      <div class="cart-item__title">
        Price
      </div>
      <p>{{ cart_item_data.price }}$</p>
    </div>
    <div class="cart-item__info">
      <div class="cart-item__title">
        Quantity
      </div>
      <div class="cart-item__quantity">
        <a class="cart-item__quantity-btn minus" @click="decrementItem">
          -
        </a>
        <p class="cart-item__quantity-number">{{ cart_item_data.quantity }}</p>
        <a class="cart-item__quantity-btn " @click="incrementItem">
          +
        </a>
      </div>
    </div>
    <div class="cart-item__delete-btn">
      <button @click="deleteCartItem" class="btn">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart-item",
  components: {},
  data() {
    return {};
  },
  props: {
    // Что получает от родителя
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    deleteCartItem() {
      this.$emit("deleteCartItem");
    },
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
  },
};
</script>

<style lang="scss">
.cart-item {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  box-shadow: 0 0 5px grey;
  padding: $padding * 3;
  margin-bottom: $margin * 2;
  &__image {
    max-width: 60px;
    margin-right: 100px;
  }
  &__info {
    width: 25%;
  }
  &__title {
    font-weight: 700;
    margin-bottom: 10px;
  }
  &__quantity {
    display: flex;
    justify-content: center;
  }
  &__quantity-number {
    margin: 0 5px;
  }
  &__quantity-btn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #26ae68;
    color: #fff;
    font-size: 16px;
    line-height: 0;
    user-select: none;
    &.minus {
      padding-bottom: 4px;
    }
  }
  &__delete {
  }
}
</style>
