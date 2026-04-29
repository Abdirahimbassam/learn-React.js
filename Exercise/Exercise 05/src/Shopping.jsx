
import { useState } from "react";

const Shopping = () => {

    // State management
    const [ products, SetProducts ] = useState([])
    const [ productName, SetProductName ] = useState('')
    const [ productPrice, SetProductPrice ] = useState('')

    const handleChange = () => {

        if(productName.trim() !== "" && productPrice.trim() !== "" ) {

            const newProduct = {
                id: Date.now(),
                name: productName,
                price: parseFloat(productPrice),
                quantity: 1
            }

            SetProducts([...products, newProduct])
            SetProductName('')
            SetProductPrice('')
        }
    }

    const handleRemove = (id) => {

        const updateProducts = products.filter(product => product.id !== id)
        SetProducts(updateProduct)
    }
    
    const increaseQuantity = (id) => {
   
        const updateProducts = products.map( product => (
            product.id === id ? {...product, quantity : product.quantity + 1 } : product
        ))

        SetProducts(updateProducts)
    }

    const decreaseQauntity = (id) => {

        const updateProducts = products.map( product => (
            product.id === id && product.quantity > 1 ? {...product, quantity : product.quantity - 1} : product
        ))

        SetProducts(updateProducts)
    }

    const totalPrice = products.reduce((total , product) => total + product.price * product.quantity,0)


    return (

        <div>
                <h2>Simple Shopping Cart</h2>
            <div>
                <h3>Add a Product</h3>
                <input 
                    type="text"
                    placeholder="Product Name"
                    onChange={(e) => SetProductName(e.target.value)}
                    value={productName}
                    />
                <input 
                    type="number"
                    min={0} 
                    placeholder="Price"
                    onChange={(e) => SetProductPrice(e.target.value)}
                    value={productPrice}
                    />
                <button onClick={handleChange}>Add to cart</button>

            </div>

            {
                products.length > 0 ? (
                <div>
                        <h4>The Product cart is:</h4>
                        {/* // list of the products */}
                        <ul>
                            {
                                products.map(product => (
                                    <li key={product.id}>
                                        <strong> {product.name} </strong> - ${product.price.toFixed(2)}

                                        <div>
                                            Quantity:
                                            <button onClick={()=> decreaseQauntity(product.id)}>-</button>
                                            {product.quantity}
                                            <button onClick={()=> increaseQuantity(product.id)}>+</button>
                                        </div>
                                        <button onClick={()=> handleRemove(product.id)}>Remove</button>
                                    </li>
                                ))
                            }
                        </ul>

                        <h4>Total Price: ${totalPrice} </h4>

                </div>

                ) : <p>This cart is empty.</p>
            }
                   
        </div>   

    )

}

export default Shopping;