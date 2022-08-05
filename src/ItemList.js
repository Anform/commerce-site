import React from "react"
import {useState, useEffect} from "react"
import wheel from "./wheel.png"
import engine from "./engine.png"
import air from "./air.png"
import muffer from "./muffler.png"
import oil from "./oil.png"
import spark from "./spark.png"
import wiper from "./wiper.png"
import brake from "./brakes.png"
import filter from "./filter.png"
import battery from "./battery.png"
import {db} from "./firebase-config"
import { collection, getDocs, updateDoc, doc } from "firebase/firestore"
import "./list.css"
import StripeCheckout from "react-stripe-checkout"
import "react-toastify/dist/ReactToastify.css"
import { toast, ToastContainer } from "react-toastify"
const ItemList = ({total, setTotal, numCart, setNumCart, user, logout}) => {

    const [cart, setCart] = useState([])
    const dataCollectionRef = collection(db,"cart")

    const notify = () =>  {
        window.alert("Purchase Succesful!")
    }

    function handleToken(token) {
        notify()
        setTotal(0)
        setNumCart(0)
        clearCart()
    }

    function handleLogout () {
        setTotal(0)
        setNumCart(0)
        clearCart()
        logout()
    }

    const addToCart = async (item) => {
            var temp
            var much
            var totals
            cart.filter(val => {
                if(val.item && ((val.item.toLowerCase().includes(item.toLowerCase()))))
                {
                    temp = val
                    return val
                }
            })
            const userDocs = doc(db, "cart", temp.id)
            much = temp.amount + 1
            totals = temp.price * much
            const newFields = {amount: much, total: totals}
            await updateDoc(userDocs,newFields)
            console.log("Sucess!")
            const info = await getDocs(dataCollectionRef);
            setCart(info.docs.map((doc) => ({...doc.data(), id: doc.id })))
            setNumCart(numCart + 1)
            setTotal(total + temp.price)
        
    }

    const clearCart = async () => {
        const temp = cart.map((val) => {
            const userDocs = doc(db, "cart", val.id)
            const newFields = {amount: 0, total: 0}
            updateDoc(userDocs,newFields)
        })
        const info = await getDocs(dataCollectionRef);
        setCart(info.docs.map((doc) => ({...doc.data(), id: doc.id })))
        setTotal(0)
        setNumCart(0)
    }

    const removeOneItem = async (item) => {
        var temp
        var much
        var totals
        cart.filter(val => {
            if(val.item === item)
            {
                temp = val
                return val
            }
        })
        if(temp.total > 0)
        {
            const userDocs = doc(db, "cart", temp.id)
            much = temp.amount - 1
            totals = temp.total - temp.price
            const newFields = {amount: much, total: totals}
            await updateDoc(userDocs,newFields)
            console.log("Sucess!")
            const info = await getDocs(dataCollectionRef);
            setCart(info.docs.map((doc) => ({...doc.data(), id: doc.id })))
            setTotal(total - temp.price)
            setNumCart(numCart - 1)
        }
    }

    const removeAllItems = async (item) => {
        var totalRemove
        var temp
        cart.filter(val => {
            if(val.item === item)
            {
                temp = val
                return val
            }
        })
        if(temp.total > 0)
        {
            totalRemove = temp.total
            setNumCart(numCart - temp.amount)
            const userDocs = doc(db, "cart", temp.id)
            const newFields = {amount: 0, total: 0}
            await updateDoc(userDocs,newFields)
            console.log("Sucess!")
            const info = await getDocs(dataCollectionRef);
            setCart(info.docs.map((doc) => ({...doc.data(), id: doc.id })))
            setTotal(total - totalRemove)
            
        }
    }

    useEffect(() => {
        const getData = async () => {
            const info = await getDocs(dataCollectionRef);
            setCart(info.docs.map((doc) => ({...doc.data(), id: doc.id })))
        };
        getData();
    }, []);

    return (
        <>
        <ToastContainer/>
        <button onClick = {handleLogout}>Logout</button>
            <div className = "items">
                <div className = "product">
                    <h1>Wheels</h1>
                    <p>New set of wheels for your vehicle!</p>
                    <img src = {wheel} alt = "wheel" width={150} height = {150}/>
                    <h1>Price: $744.99</h1> <button onClick = {() => addToCart("Wheels")}>Add to Cart</button>
                </div>

                <div className = "product">
                    <h1>Engine</h1>
                    <p>Buy a brand new engine for your vehicle!</p>
                    <img src = {engine} alt = "engine" width={150} height = {150}/>
                    <h1>Price: $3999.99</h1> <button onClick = {() => addToCart("Engine")}>Add to Cart</button>
                </div>
                

                <div className = "product">
                    <h1>Air Freshener</h1>
                    <p>Freshen up the smell of your vehicle!</p>
                    <img src = {air} alt = "engine" width={150} height = {150}/>
                    <h1>Price: $9.99</h1> <button onClick = {() => addToCart("Air Freshener")}>Add to Cart</button>
                </div>

                <div className = "product">
                    <h1>Brakes</h1>
                    <p>Buy new brake pads for your vehicle!</p>
                    <img src = {brake} alt = "engine" width={150} height = {150}/>
                    <h1>Price: $149.99</h1> <button onClick = {() => addToCart("Brakes")}>Add to Cart</button>
                </div>

                <div className = "product">
                    <h1>Muffler</h1>
                    <p>Reduce noise and reduce emmisions!</p>
                    <img src = {muffer} alt = "engine" width={150} height = {150}/>
                    <h1>Price: $149.99</h1> <button onClick = {() => addToCart("Muffler")}>Add to Cart</button>
                </div>

                <div className = "product">
                    <h1>Oil</h1>
                    <p>Total Quartz Oil</p>
                    <img src = {oil} alt = "engine" width={150} height = {150}/>
                    <h1>Price: $64.99</h1> <button onClick = {() => addToCart("Oil")}>Add to Cart</button>
                </div>

                <div className = "product">
                    <h1>Spark Plugs</h1>
                    <p>Replacement spark plugs for your vehicle!</p>
                    <img src = {spark} alt = "engine" width={150} height = {150}/>
                    <h1>Price: $14.99</h1> <button onClick = {() => addToCart("Spark Plugs")}>Add to Cart</button>
                </div>

                <div className = "product">
                    <h1>Wipers</h1>
                    <p>Buy new wipers for your vehicle!</p>
                    <img src = {wiper} alt = "engine" width={150} height = {150}/>
                    <h1>Price: $24.99</h1> <button onClick = {() => addToCart("Wipers")}>Add to Cart</button>
                </div>

                <div className = "product">
                    <h1>Battery</h1>
                    <p>Buy a new battery for your vehicle!</p>
                    <img src = {battery} alt = "engine" width={150} height = {150}/>
                    <h1>Price: $74.99</h1> <button onClick = {() => addToCart("Battery")}>Add to Cart</button>
                </div>

                <div className = "product">
                    <h1>Air Filter</h1>
                    <p>Ensure the air in your car is pure!</p>
                    <img src = {filter} alt = "engine" width={150} height = {150}/>
                    <h1>Price: $14.99</h1> <button onClick = {() => addToCart("Air Filter")}>Add to Cart</button>
                </div>
            </div>
            <h1>Cart: ${Math.round(total * 100)/100}</h1> <button onClick = {() => clearCart()}>Clear Cart</button> 
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
            {numCart > 0 ? (
                <>
                    {
                        <>
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Total Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.filter((val) => {
                                            if(val.amount > 0)
                                            {
                                                return val
                                            }
                                        }).map ((val) => (
                                            <>
                                                <tr>
                                                    <td>{val.amount}</td>
                                                    <td>{val.item}</td>
                                                    <td>${Math.round(val.total * 100)/100}</td>
                                                    <td><button onClick = {() => removeOneItem(val.item)}>Remove One Item</button></td>
                                                    <td><button onClick = {() => removeAllItems(val.item)}>Remove all Items</button></td>
                                                </tr>
                                            </>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </>
                    }
                </>
            ) : (
                <>
                    <p>Cart is empty right now!</p>
                </>
            )}
            
        </>
    )
}

export default ItemList