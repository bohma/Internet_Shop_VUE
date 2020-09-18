<template>
  <div class="catalog-item"
   id="catalog-item"
   >
    {{ $route.params.id }}
  </div>
</template>

<script>
import { mapGetters} from "vuex";

export default {
  name: "catalog-item",
  components: {},
  data() {
    return {
      item: {}
    }
  },
   computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
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
  width: 250px;
  box-shadow: 0 0 5px grey;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  &__image {
    height: 240px;
    img {
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
