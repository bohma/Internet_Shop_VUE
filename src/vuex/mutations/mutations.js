export default {
    SET_CART: (state, product) => { //Если добавляется несколько одинаковых товаров- добавляется количество -quantity
        if (state.cart.length) {
            let isProductsExist = false
            state.cart.map(item => {
                if (item.article === product.article) {
                    isProductsExist = true
                    item.quantity++
                }
            })
            if (!isProductsExist) {
                state.cart.push(product)
            }
        } else {
            state.cart.push(product)
        }
    },
    REMOVE_FROM_CART: (state, index) => {
        state.cart.splice(index, 1)
    },
    INCREMENT: (state, index) => {
        state.cart[index].quantity++
    },
    DECREMENT: (state, index) => {
        if (state.cart[index].quantity > 1) {
            state.cart[index].quantity--
        }
    },
}