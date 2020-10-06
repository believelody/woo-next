import { useAppHooks } from "../../context/AppContext"
import { createCart, productInCart, updateCartByIndex, updateCartWithNewProduct } from "../../utils/cart.util"

const AddToCartBtn = ({ product, variationValue, quantity, setQuantity, setVariationValue }) => {
    const {
        useCart: [cart, setCart],
        useToast: [toast, setToast]
    } = useAppHooks()

    const updateBtnColor = () => {
        if (variationValue && quantity > 0) {
            let indexProductFound = cart && productInCart(cart, product, variationValue)
            return cart && cart.items[indexProductFound] ? "primary" : "success"
        }
        return "dark"
    }

    const updateBtnText = () => {
        if (variationValue && quantity > 0) {
            let indexProductFound = cart && productInCart(cart, product, variationValue)
            return cart && cart.items[indexProductFound] ? "UPDATE PRODUCT" : "ADD TO CART"
        }
        return "CHOOSE A VARIATION"
    }

    const handleAddToCart = () => {
        if (cart) {
            let updatedCart
            const indexProduct = productInCart(cart, product, variationValue)
            if (indexProduct > -1) {
                updatedCart = updateCartByIndex(cart, indexProduct, quantity)
                setCart(updatedCart)
                setToast({
                    title: "Notification",
                    body: `You successfully updated ${product.name} quantity`,
                    role: "success"
                })
            }
            else {
                updatedCart = updateCartWithNewProduct(cart, product, quantity, variationValue)
                setCart(updatedCart)
                setToast({
                    title: "Notification",
                    body: `You successfully added ${product.name}-${variationValue} in your cart`,
                    role: "success"
                })
            }
        }
        else {
            const newCart = createCart(product, quantity, variationValue)
            setCart(newCart)
            setToast({
                title: "Notification",
                body: `You successfully added ${product.name}-${variationValue} in your cart`,
                role: "success"
            })
        }
        setQuantity(0)
        setVariationValue("")
    }

  return (
      <>
        <button
            disabled={!variationValue || quantity === 0}
            className={`btn btn-${updateBtnColor()} w-100 block`}
            onClick={handleAddToCart}
        >
              {updateBtnText()}
        </button>
      </>
  )
}

export default AddToCartBtn