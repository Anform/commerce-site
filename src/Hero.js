import React from 'react';
import { useState, useEffect } from "react"
import StripeCheckout from "react-stripe-checkout"
import ItemList from './ItemList';
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Hero ({user,logout}) {


    const [total, setTotal] = useState(0)
    const [numCart, setNumCart] = useState(0)

    return (
        <section className = "hero">
            <nav className>
                <div>
                    <h2>AutoParts E-commerce</h2>
                </div>
                <div>
                    <h2>Current User: {user.email}</h2>
                </div>
            </nav>
            <ItemList
            user= {user}
            logout = {logout}
            total = {total}
            setTotal = {setTotal}
            numCart = {numCart}
            setNumCart = {setNumCart}
            ></ItemList>
        </section>
    )
}
