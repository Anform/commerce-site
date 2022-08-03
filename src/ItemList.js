import react from "react"
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
import "./list.css"
const ItemList = ({total, setTotal}) => {

    return (
        <>
            <div className = "items">
                <div className = "product">
                    <h1>Wheels</h1>
                    <p>New set of wheels for your vehicle!</p>
                    <img src = {wheel} alt = "wheel" width={150} height = {150}/>
                    <h1>Price: $744.99</h1> <button onClick = {(e) => setTotal(total + 744.99)}>Add to Cart</button>
                </div>

                <div className = "product">
                    <h1>Engine</h1>
                    <p>Buy a brand new engine for your vehicle!</p>
                    <img src = {engine} alt = "engine" width={150} height = {150}/>
                    <h1>Price: $3999.99</h1> <button onClick = {(e) => setTotal(total + 3999.99)}>Add to Cart</button>
                </div>
                

                <div className = "product">
                    <h1>Air Freshener</h1>
                    <p>Freshen up the smell of your vehicle!</p>
                    <img src = {air} alt = "engine" width={150} height = {150}/>
                    <h1>Price: $9.99</h1> <button onClick = {(e) => setTotal(total + 9.99)}>Add to Cart</button>
                </div>

                <div className = "product">
                    <h1>Brakes</h1>
                    <p>Buy new brake pads for your vehicle!</p>
                    <img src = {brake} alt = "engine" width={150} height = {150}/>
                    <h1>Price: $149.99</h1> <button onClick = {(e) => setTotal(total + 149.99)}>Add to Cart</button>
                </div>

                <div className = "product">
                    <h1>Muffler</h1>
                    <p>Reduce noise and reduce emmisions!</p>
                    <img src = {muffer} alt = "engine" width={150} height = {150}/>
                    <h1>Price: $149.99</h1> <button onClick = {(e) => setTotal(total + 149.99)}>Add to Cart</button>
                </div>

                <div className = "product">
                    <h1>Oil</h1>
                    <p>Total Quartz Oil</p>
                    <img src = {oil} alt = "engine" width={150} height = {150}/>
                    <h1>Price: $64.99</h1> <button onClick = {(e) => setTotal(total + 64.99)}>Add to Cart</button>
                </div>

                <div className = "product">
                    <h1>Spark Plugs</h1>
                    <p>Replacement spark plugs for your vehicle!</p>
                    <img src = {spark} alt = "engine" width={150} height = {150}/>
                    <h1>Price: $14.99</h1> <button onClick = {(e) => setTotal(total + 14.99)}>Add to Cart</button>
                </div>

                <div className = "product">
                    <h1>Wipers</h1>
                    <p>Buy new wipers for your vehicle!</p>
                    <img src = {wiper} alt = "engine" width={150} height = {150}/>
                    <h1>Price: $24.99</h1> <button onClick = {(e) => setTotal(total + 24.99)}>Add to Cart</button>
                </div>

                <div className = "product">
                    <h1>Battery</h1>
                    <p>Buy a new battery for your vehicle!</p>
                    <img src = {battery} alt = "engine" width={150} height = {150}/>
                    <h1>Price: $74.99</h1> <button onClick = {(e) => setTotal(total + 74.99)}>Add to Cart</button>
                </div>

                <div className = "product">
                    <h1>Air Filter</h1>
                    <p>Ensure the air in your car is pure!</p>
                    <img src = {filter} alt = "engine" width={150} height = {150}/>
                    <h1>Price: $14.99</h1> <button onClick = {(e) => setTotal(total + 14.99)}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default ItemList