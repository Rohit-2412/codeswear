import Footer from '../components/Footer'
import Nabvar from '../components/Navbar'
import { useState, useEffect } from 'react'
import '../styles/globals.css'
import { useRouter } from 'next/router'
export default function App({ Component, pageProps }) {
    const [cart, setCart] = useState({})
    const [subTotal, setSubTotal] = useState(0)
    const [user, setUser] = useState({ value: null })
    const [key, setKey] = useState()

    const router = useRouter()
    useEffect(() => {
        try {
            if (localStorage.getItem(cart) !== null) {
                setCart(JSON.parse(localStorage.getItem(cart)))
                saveCart(JSON.parse(localStorage.getItem(cart)))
            }
        }
        catch (error) {
            console.log(error)
            localStorage.clear()
        }
        const token = localStorage.getItem('token')
        if (token) {
            setUser({ value: token })
            setKey(Math.random())
        }
        else {

        }
    }, [router.query])

    const logout = () => {
        localStorage.clear()
        setUser({ value: null })
        setKey(Math.random())
        router.push('/')
    }

    const saveCart = (cart) => {
        localStorage.setItem(cart, JSON.stringify(cart))

        // calculate subtotal
        let total = 0
        let keys = Object.keys(cart)

        for (let i = 0; i < keys.length; i++) {
            total += cart[keys[i]].qty * cart[keys[i]].price
        }
        setSubTotal(total)
    }

    const addToCart = (itemCode, qty, price, name, size, variant) => {
        let newCart = cart

        if (itemCode in cart) {
            newCart[itemCode].qty += qty
        }

        else {
            newCart[itemCode] = { qty: 1, price, name, size, variant }
        }

        setCart(newCart)
        saveCart(newCart)
    }

    const clearCart = () => {
        // clear cart
        setCart({})
        // pass empty cart to saveCart, because setCart is async and we need to clear cart before saving
        saveCart({})
    }

    const buyNow = (itemCode, qty, price, name, size, variant) => {
        let myCart = { itemCode: { qty: 1, price, name, size, variant } }
        setCart(myCart)
        saveCart(myCart)
        router.push('/checkout')
    }

    const removeFromCart = (itemCode) => {
        let newCart = cart
        if (itemCode in cart) {
            // if qty is 1, remove item from cart
            if (newCart[itemCode].qty === 1) {
                delete newCart[itemCode]
            }
            else {
                newCart[itemCode].qty -= 1
            }
        }
        setCart(newCart)
        saveCart(newCart)
    }
    return <>
        <Nabvar user={user} key={key} logout={logout} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart
        } clearCart={clearCart} subTotal={subTotal} />

        <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart
        } clearCart={clearCart} subTotal={subTotal} buyNow={buyNow} {...pageProps} />
        <Footer />
    </>

}
