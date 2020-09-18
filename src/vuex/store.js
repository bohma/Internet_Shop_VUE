import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions/actions'
import mutations from './mutations/mutations'
import getters from './getters/getters'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        products: [
            {
                image: "1.png",
                name: "Iphone 7",
                price: 400,
                article: "T2",
                available: true,
                category: "phone",
            },
            {
                image: "2.png",
                name: "Iphone 7 Plus",
                price: 450,
                article: "T3",
                available: false,
                category: "phone",
            },
            {
                image: "3.png",
                name: "Iphone 8",
                price: 600,
                article: "T4",
                available: true,
                category: "phone",
            },
            {
                image: "4.png",
                name: "Iphone 8 Plus",
                price: 700,
                article: "T5",
                available: false,
                category: "phone",
            },
            {
                image: "5.png",
                name: "Iphone X",
                price: 850,
                article: "T6",
                available: true,
                category: "phone",
            },
            {
                image: "6.png",
                name: "Iphone 11",
                price: 990,
                article: "T7",
                available: false,
                category: "phone",
            },
            {
                image: "7.png",
                name: "Iphone 11 Pro",
                price: 1100,
                article: "T8",
                available: false,
                category: "phone",
            }
        ],
        cart: []
    },
    mutations,
    actions,
    getters
})
export default store