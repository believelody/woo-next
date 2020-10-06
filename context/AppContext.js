import React, { useState, useEffect, useContext } from 'react'
import { getCart } from '../utils/cart.util'
import { compare2Obj } from '../utils/obj.util'

export const AppContext = React.createContext()

export const AppProvider = props => {
    const [cart, setCart] = useState(null)
    const [modal, setModal] = useState(null)
    const [toast, setToast] = useState(null)

    useEffect(() => {
        if (!cart || (getCart() && !compare2Obj(cart, getCart()))) {
            setCart(getCart())
        }
    }, [])

    return (
        <AppContext.Provider
            value={{
                useCart: [cart, setCart],
                useModal: [modal, setModal],
                useToast: [toast, setToast],
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export const useAppHooks = () => useContext(AppContext)