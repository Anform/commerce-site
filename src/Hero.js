import React from 'react';
import { useState } from "react"


const Hero = ({user,logout}) => {
    return (
        <section className = "hero">
            <nav>
                <div>
                    <h2>AutoParts E-commerce</h2>
                    <button onClick = {logout}>Logout</button>
                </div>
            </nav>
        </section>
    )
}

export default Hero