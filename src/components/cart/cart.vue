<template>
  <div class="wrapper__cart">
    <div class="backToCatalog">
      <router-link :to="{ name: 'catalog' }">
        <a class="back btn"> Back to Catalog </a>
      </router-link>
    </div>
    <div id="cart" class="cart">
      <p v-if="!cart_data.length">No products..</p>
      <div class="cart__content" v-if="cart_data.length">
        <div class="cart__title">ваш заказ</div>
        <hr />
        <br />
        <div class="cart__item">
          <cart-item
            v-for="(item, index) in cart_data"
            :key="item.article"
            v-bind:cart_item_data="item"
            @deleteCartItem="deleteCartItem(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
            >{{ item }}</cart-item
          >
        </div>
        <br />
        <hr />
        <div class="cart__total">сумма: {{ cartTotalCost }}$</div>
      </div>
    </div>
    <div class="lead" v-if="cart_data.length">
      <form id="form" class="form" @click.prevent="checkForm">
        <div class="inputs">
          <div class="inputs__input">
            <input
              id="company"
              class="inputs__input-item"
              placeholder="Ваше имя"
              :class="$v.form.company.$error ? 'is-invalid' : ''"
              v-model.trim="$v.form.company.$model"
            />
            <p
              v-if="$v.form.company.$dirty && !$v.form.company.required"
              class="invalid-feedback"
            >
              *Обязательное поле
            </p>
            <p
              v-if="$v.form.company.$dirty && !$v.form.company.minLength"
              class="invalid-feedback"
            >
              *Введите больше одного символа
            </p>
          </div>
          <div class="inputs__input">
            <input
              id="email"
              type="email"
              class="inputs__input-item"
              placeholder="Email"
              :class="$v.form.email.$error ? 'is-invalid' : ''"
              v-model.trim="$v.form.email.$model"
            />
            <p
              v-if="$v.form.email.$dirty && !$v.form.email.required"
              class="invalid-feedback"
            >
              *Обязательное поле
            </p>
            <p
              v-if="$v.form.email.$dirty && !$v.form.email.email"
              class="invalid-feedback"
            >
              *Введите корректно Email
            </p>
          </div>
          <div class="inputs__input">
            <input
              v-mask="'+38 (0##) ###-##-##'"
              id="tel"
              class="inputs__input-item"
              placeholder="Номер телефона"
              :class="$v.form.tel.$error ? 'is-invalid' : ''"
              v-model.trim="$v.form.tel.$model"
            />
            <p
              v-if="$v.form.tel.$dirty && !$v.form.tel.required"
              class="invalid-feedback"
            >
              *Обязательное поле
            </p>
            <p
              v-if="$v.form.tel.$dirty && !$v.form.tel.minLength"
              class="invalid-feedback"
            >
              *Введите корректно номер
            </p>
          </div>
        </div>
        <button type="submit" class="send_order">Попробовать бесплатно</button>
      </form>
    </div>
  </div>
</template>

<script>
import CartItem from "./cart-item";
import { mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import axios from "axios";
import {
  required,
  minLength,
  email,
  maxLength,
} from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
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
    return {
      chatId: "-402256735",
      token: "1175499824:AAH4B34VTAFZgEjM2toceA9wtubGH1wrCrI",
      form: {
        company: "",
        email: "",
        tel: "",
      },
      toSend: "",
    };
  },
  validations: {
    form: {
      company: { required, minLength: minLength(2) },
      email: { required, email },
      tel: { required, minLength: minLength(19), maxLength: maxLength(19) },
    },
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
    checkForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        let titles = this.cart_data.map(item => "%0A" + item.name + " - " + item.quantity + " шт.")
        this.toSend = `name: ${this.form.company}%0Atel: ${this.form.email}%0Acountry: ${this.form.tel}%0Aorder: %0A${titles}%0A`;
        axios({
          method: "post",
          url: `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${this.toSend}`,
          data: {},
        });
        alert("Ваша заявка оставлена!");
        this.form.company = "";
        this.form.email = "";
        this.form.tel = "";
      }
    },
  },
};
</script>

<style lang="scss">
.wrapper__cart {
  position: relative;
  max-width: 100%;
}
.backToCatalog {
  position: absolute;
  top: 0;
  left: 0;
}
.cart {
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 50px;

  &__content {
  }
  &__title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #000000;
  }

  &__item {
  }
  &__total {
    text-align: right;
    color: #000000;
    font-weight: 700;
    font-size: 18px;
    margin-top: 30px;
  }
}

.inputs {
  display: flex;
  flex-wrap: wrap;
  &__input {
    position: relative;
    margin-bottom: 50px;
    padding-right: 24px;
    &-item {
      border: .5px solid #000000;
      width: 260px;
      height: 55px;
      border-radius: 0;
      padding-left: 18px;
      &:focus {
        outline: none;
      }
      &::placeholder {
        font-family: "Gilroy", sans-serif;
        font-size: 16px;
      }
    }
    & p {
      position: absolute;
      margin-top: 2px;
      font-size: 14px;
      color: rgb(255, 21, 21);
    }
  }
}
.send_order {
  width: 330px;
  height: 55px;
  border-radius: 5px;
  border: none;
  background: #000000;
  color: #ffffff;
  font-family: "Gilroy", sans-serif;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.4s;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #3b69ff;
    color: #ffffff;
  }
}
.is-invalid {
  border: 1px red solid;
}
</style>
