import React from 'react';
import { useState } from "react"
import StripeCheckout from "react-stripe-checkout"
import ItemList from './ItemList';
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

toast.configure()
export default function Hero ({user,logout}) {



    function handleToken(token) {
        
        toast.success('Purchase complete!')
        setTotal(0)
    }

    function handleLogout () {
        setTotal(0)
        logout()
    }

    const [total, setTotal] = useState(0)

    return (
        <section className = "hero">
            <nav>
                <div>
                    <h2>AutoParts E-commerce</h2>
                    <button onClick = {handleLogout}>Logout</button>
                    <button onClick = {(e) => setTotal(0)}>Clear Cart</button>
                </div>
                <div>
                <h1>Total: ${Math.round(total)}</h1>
                {total !== 0 ? (
                    <>
                    <StripeCheckout
                    stripeKey='pk_test_51LSQ0jA7tvQ7rMVfiVamrrxbWUJ6Gz1zNzikxwK2rdEFn7qeH9VvHAnpllED9wEp8JXQYqkU5SqcO0H8ltPL7phT00Jff3rPhm'
                    email= {user.email}
                    token={handleToken}
                    billingAddress
                    shippingAddress
                    amount={total * 100}
                    ></StripeCheckout>
                    </>
                ) : (
                    <>
                    </>
                )}
                </div>
            </nav>
            <ItemList
            total = {total}
            setTotal = {setTotal}
            ></ItemList>
        </section>
    )
}
