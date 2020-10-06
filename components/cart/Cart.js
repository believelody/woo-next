import Link from "next/link"
import { useAppHooks } from "../../context/AppContext"
import { removeCart } from "../../utils/cart.util"
import CartItem from "./CartItem"

const Cart = () => {
  const {useCart: [cart, setCart]} = useAppHooks()

  const deleteCart = () => {
    const removedCart = removeCart()
    setCart(removedCart)
  }

  return cart ?
      <div className="container">
        <div className="d-flex justify-content-between">
          <h2>Cart</h2>
          <h3>
            <label>Total :</label>
            <span className="badge badge-secondary ml-2">
              {(cart.totalProductsPrice).toFixed(2)} €
            </span>
          </h3>
        </div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Product name</th>
              <th scope="col">Product Variant</th>
              <th scope="col">Product Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.items && cart.items.map((item, i) => (
                <CartItem
                  item={item}
                  index={i}
                  key={i}
                />
              ))
            }
          </tbody>
        </table>
        <div>
          <button onClick={deleteCart}>Remove cart</button>
        </div>
      </div>
      :
    <h3>
      There is no product here,
      <Link href="/"><a>Start shopping</a></Link>
    </h3>
}

export default Cart