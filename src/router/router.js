import Vue from 'vue'
import Router from 'vue-router'

import Catalog from '../components/catalog/catalog.vue'
import Cart from '../components/cart/cart.vue'

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/catalog',
            name: 'catalog',
            component: Catalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
            props: true
        },
        {
            path: "/catalog-item/:id",
            name: "catalog-item-view",
            component: () =>
            import(/* webpackChunkName: "post" */ "../views/catalog-item-view.vue"),
            props: true
            }
    ]
})

export default router