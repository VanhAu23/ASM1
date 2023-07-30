import React, { useState } from 'react'
const HomePage = ({ data }) => {
    const [products, setProducts] = useState(data)
    const addProduct = (product) => {
        setProducts([...products, product])
    }
    return (
        <div>
            <button onClick={() => addProduct({ id: 4, name: "product 4", price: 400 })}>Add New</button>
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default HomePage