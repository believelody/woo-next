import { productRawPrice } from "./product.util"

export const productInCart = (cart, product, variation) => {
    return cart.items.findIndex(item => item.variation === variation && item.productVariation.id === product.id)
}

export const getCart = () => {
    if (localStorage) {
        return JSON.parse(localStorage.getItem("woo-next-cart"))
    }
    return null
}

export const createCart = (product, quantity, variationValue) => {
    let rawPrice = productRawPrice(product.price)
    let indexVariation = product.variations.nodes.findIndex(variation => variation.attributes.nodes[0].value === variationValue)
    if (indexVariation > -1) {
        const newProduct = {
            quantity,
            totalPrice: parseFloat(quantity * rawPrice),
            variation: variationValue,
            productVariation: product
        }
        const items = [newProduct]
        const newCart = {
            items,
            totalProductsCount: 1,
            totalProductsPrice: newProduct.totalPrice,
        }
        localStorage.setItem("woo-next-cart", JSON.stringify(newCart))
        return newCart
    }
    return null
}

export const updateCartByIndex = (cart, index, quantity) => {
    const rawPrice = productRawPrice(cart.items[index].productVariation.price)
    cart.items[index].quantity = quantity
    cart.items[index].totalPrice = parseFloat(rawPrice * cart.items[index].quantity)
    cart.totalProductsPrice = cart.items.reduce((acc, item) => acc + item.totalPrice, 0)
    localStorage.setItem("woo-next-cart", JSON.stringify(cart))
    return cart
}

export const updateCartItemByIndex = (cart, index, quantity) => {
    const rawPrice = productRawPrice(cart.items[index].productVariation.price)
    cart.items[index].quantity = quantity
    cart.items[index].totalPrice = parseFloat(rawPrice * cart.items[index].quantity)
    cart.totalProductsPrice = cart.items.reduce((acc, item) => acc + item.totalPrice, 0)
    localStorage.setItem("woo-next-cart", JSON.stringify(cart))
    return cart
}

export const updateCartWithNewProduct = (cart, product,quantity, variationValue) => {
    const rawPrice = productRawPrice(product.price)
    let items = [
        ...cart.items,
        {
            quantity,
            totalPrice: parseFloat(quantity * rawPrice),
            productVariation: product,
            variation: variationValue
        }                           
    ]

    const updatedCart = {
        totalProductsPrice: items.reduce((acc, item) => acc + item.totalPrice, 0),
        totalProductsCount: cart.totalProductsCount + 1,
        items
    }
    localStorage.setItem("woo-next-cart", JSON.stringify(updatedCart))
    return updatedCart
}

export const removeItemFromCart = (cart, indexProduct) => {
    if (cart.totalProductsCount === 1) {
        localStorage.removeItem("woo-next-cart")
        return null
    }
    const updatedCart = {
        items: cart.items.filter((item, index) => index !== indexProduct),
        totalProductsCount: cart.totalProductsCount - 1,
        totalProductsPrice: cart.totalProductsPrice - cart.items[indexProduct].totalPrice
    }
    localStorage.setItem("woo-next-cart", JSON.stringify(updatedCart))
    return updatedCart
}

export const removeCart = () => {
    localStorage.removeItem("woo-next-cart")
    return null
}