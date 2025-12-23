import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = React.useState([]);
    const [allProducts, setAllProducts] = React.useState([]);
    const [category, setCategory] = React.useState("all");
    const navigate = useNavigate();
    const getProducts = async () => {
        const fetchProducts = await fetch(`https://fakestoreapi.com/products`);
        const data= await fetchProducts.json();
        setProducts(data);
        setAllProducts(data);
    }

    useEffect(() => {
        // Fetch products data here
        getProducts();
    }, [])

    const showDetail= (cardDetails)=>{
      let id= cardDetails.id;
      navigate(`user/${id}`);
    }
    const handleSearch=(e)=>{
      let searchValue = e.target.value;
      // let allProducts = [...products];
      let filtered = allProducts.filter((curVal)=>{
        return curVal.title.toLowerCase().includes(searchValue)
      })
      setProducts(filtered);
    }
    const handleSelect=(e)=>{
      let selectVal = e.target.value;
      setCategory(selectVal);
      if(selectVal=="Price Low to High"){
        let sorting = [...allProducts].sort((a,b)=>{
          return a.price - b.price;
        });
        setProducts(sorting);
    }
      else if(selectVal=="Price High to low"){
        let sorting = [...allProducts].sort((a,b)=>{
          return b.price - a.price;
        });
        setProducts(sorting);
    }
      if(selectVal=="all"){
        setProducts(allProducts);
    }

  }

  return (
    <div>
      <div className='navbar'>
        <div>
          <p className="heading">TRENDS</p>
        </div>
        <div>
          <input placeholder='Search...' onChange={handleSelect}/>
        </div>
        <div>
          <select value={category} onChange={handleSelect}>
            <option value="all">All Products</option>
            <option value="Price Low to High">Price Low to High</option>
            <option value="Price High to low">Price High to low</option>
          </select>
        </div>
      </div>
      <div className="products-container">
        {products.length > 0 ? products.map((curVal,index) =>{
            return(
                <div className='card' key={index} onClick={()=>showDetail(curVal)}>
                    <img src={curVal.image}/>
                    <div>{curVal.title}</div>
                    <div>{curVal.price*280}</div>
                </div>
            )
        }):
        <p>Sorry! No Product Available</p>}
      </div>
    </div>
  )
}

export default Products
