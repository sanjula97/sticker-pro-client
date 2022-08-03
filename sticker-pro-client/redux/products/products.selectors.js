export const selectCartItems = (state) => {
   const { cartItems, cart } = state.products
   return {
    cartItems,
    cart
   }
}