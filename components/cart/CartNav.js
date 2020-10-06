import { useAppHooks } from "../../context/AppContext"

const CartNav = () => {
    const {useCart: [cart, setCart]} = useAppHooks()
    console.log(cart && cart.totalProductsPrice)

  return (
      <>
        <span>
            Cart
        </span>
        <span className="ml-2 px-2 py-1 bg-dark rounded-circle">
            {cart && cart.totalProductsCount ? cart.totalProductsCount : 0}
        </span>
        <span className="ml-2">
            {cart && (cart.totalProductsPrice).toFixed(2) + " €"}
        </span>
      </>
  )
}

export default CartNav