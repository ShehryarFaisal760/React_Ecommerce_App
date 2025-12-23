import React, { useEffect } from 'react'
import { data, useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const [products, setProducts] = React.useState([]);
    const id = useParams();
    const navigate = useNavigate();
    // Fetching data based on id
    const getProducts = async () => {
        const fetchProducts = await fetch(`https://fakestoreapi.com/products/${id.id}`);
        const data= await fetchProducts.json();
        setProducts(data);
        console.log("product-details",data);
    }

    useEffect(() => {
        // Fetch products data here
        getProducts();
    }, [])

    // Back buttion handler
    const handleBack=(e)=>{
        e.preventDefault();
        navigate("/");
    }

  return (
    <div>
      <a onClick={handleBack} href="" className="btn_Back">Back</a>
      <div className="products-container">
        
        {/* {products.length > 0 ?  */}
                <div className='card'>
                    <img src={products.image}/>
                    <div>{products.title}</div>
                    <div>{products.price*280}</div>
                </div>
            
        {/* :
        <p>Soory! No Product Available</p>} */}
      </div>
    </div>
  )
}

export default ProductDetails
