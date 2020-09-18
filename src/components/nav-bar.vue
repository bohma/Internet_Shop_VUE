<template>
  <div class="nav">
    <div class="container">
      <nav class="nav__container">
        <div class="nav__item">
          <router-link to="/main" class="nav__link">Главная</router-link>
        </div>
        <div class="nav__item">
          <router-link to="/catalog" class="nav__link">Каталог</router-link>
        </div>
        <div class="nav__item">
          <router-link to="/blog" class="nav__link">Блог</router-link>
        </div>
        <div class="nav__item">
          <router-link to="/contacts" class="nav__link">Контакты</router-link>
        </div>
        <div class="nav__item">
          <router-link to="/about" class="nav__link">О нас</router-link>
        </div>
        <div class="nav__item">
          <router-link
            :to="{ name: 'cart', params: { cart_data: CART } }"
            class="nav__cart"
          >
            <img v-bind:src="require('../assets/images/cart.svg')" alt="img" />
            <!-- <p>{{CART.length}}</p> -->
            <p class="nav__cart-quantity">
              {{ CART.reduce((res, item) => res + item.quantity, 0) }}
            </p>
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "navigation",
  computed: {
    ...mapGetters(["PRODUCTS", "CART", "CART_TOTAL_QUANTITY"]),
  },
  methods: {
    ...mapActions(["ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
};
</script>
<style lang="scss">
.nav {
  background: #26ae68;

  &__container {
    display: flex;
    justify-content: space-between;
  }
  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 100%;
    height: 100%;
    padding: 20px 35px;
    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }
  &__cart {
    display: block;
    width: 30px;
    height: 100%;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    &-quantity {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      position: absolute;
      top: 7px;
      right: -10px;
      font-size: 12px;
      color: #fff;
      background-color: #f00;
      border-radius: 50%;
    }
  }
}
</style>
