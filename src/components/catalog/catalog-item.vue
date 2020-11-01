<template>
  <div class="catalog-item" id="catalog-item">
    <router-link
      :to="{ name: 'catalog-item-view', params: { id: product_data.article } }"
    >
      <img
        class="catalog-item__image"
        v-bind:src="require('../../assets/images/' + product_data.image)"
        alt="img"
      />
    </router-link>
    <p class="catalog-item__name">{{ product_data.name }}</p>
    <p class="catalog-item__price">Price: {{ product_data.price }}$</p>
    <button class="catalog-item__add btn" @click="addToCart">
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "catalog-item",
  props: {
    // Что получает от родителя
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    // Метод эмит чтобы пробросить данные родителю. Первый аргумент как будет назваться в родиетеле.Второй что передаём с ребёнка.
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
  mounted() {
    //Если без $ то теряем рективность. $set - Добавляет в наш объект (cart_item_data) item новое свойство с названием 'quantity' и присваевает значение указаное в 3-ем аргументе
    this.$set(this.product_data, "quantity", 1);
  },
};
</script>

<style lang="scss">
.catalog-item {
  padding: 30px;
  width: 270px;
  box-shadow: 0 0 5px grey;
  margin: 0 15px;
  margin-bottom: 30px;

  &__image {
    height: 230px;
    margin-bottom: 10px;
    img {
      height: 100%;
      object-fit: contain;
    }
  }

  &__name {
    margin-bottom: 10px;
  }

  &__price {
    margin-bottom: 10px;
  }

  &__add {
    &:hover {
      background: $green-bg-hover;
    }
  }
}
</style>
