import Link from 'next/link'
import { useState } from 'react'
import { useAppHooks } from '../../context/AppContext'
import { updateCartByIndex, removeItemFromCart } from '../../utils/cart.util'
import { productRawPrice } from '../../utils/product.util'

const CartItem = ({ item, index }) => {
    const {
        useCart: [cart, setCart],
        useToast: [toast, setToast],
        useModal: [modal, setModal]
    } = useAppHooks()
    const [quantity, setQuantity] = useState(item.quantity)

    const handleClick = index => {
        const updatedCart = removeItemFromCart(cart, index)
        setCart(updatedCart)
        setToast({
            title: "Notification",
            body: "You successfully removed this product from your cart",
            role: "success"
        })
    }

    const handleQuantity = (index, method) => {
        let newQuantity = method === "dec" ? quantity - 1 : quantity + 1
        setQuantity(newQuantity)
        const updatedCart = updateCartByIndex(cart, index, newQuantity)
        setCart(updatedCart)
    }

  return (
    <tr>
        <th scope="row">
            <span
                className="badge badge-danger"
                onClick={() => setModal({
                    dismiss: "Cancel",
                    title: "Confirm action",
                    body: "Do you really want to remove this item ?",
                    action: {
                        method: () => handleClick(index),
                        text: "Remove",
                        role: "danger"
                    }
                })}
            >
                x
            </span>
        </th>
        <th>
            <Link as={`/product/${item.productVariation.id}`} href="/product/[id]">
                <a className="text-white">{item.productVariation.name}</a>
            </Link>
        </th>
        <th>
            <strong>{item.variation}</strong>
        </th>
        <th>{productRawPrice(item.productVariation.price)} €</th>
        <th>
            <button className={`btn btn-light btn-sm`} onClick={() => handleQuantity(index, "dec")}>-</button>
            <span className={`px-3`}>{quantity}</span>
            <button className={`btn btn-light btn-sm`} onClick={() => handleQuantity(index, "inc")}>+</button>
        </th>
        <th>{item.totalPrice} €</th>
    </tr>
  )
}

export default CartItem
