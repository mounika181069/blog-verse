function Product( product ) {
    return (
        <div className="productcard">
            <p>
                title:{product.title}
            </p>
            <p>
                price:{product.price}
            </p>

            { product.isavailable ? 
               <p style={{color:"blue"}}>avaiable</p>:
               <p style={{color:"red"}}>not available</p>
            }

        </div>
    )
}

export default Product