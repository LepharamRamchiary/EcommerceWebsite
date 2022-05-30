import React, {useEffect} from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import ProductCo from './ProductCo';
import { setProducts } from '../redux/actions/productA';

const ProductList = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    
    const fetchProducts = async () =>{
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log("Err", err)
        });
        dispatch(setProducts(response.data));
    };
    useEffect(() => {
        fetchProducts();
    }, []);
  console.log("Products: ", products);
  return (
    <div className='ui grid container'>
      <ProductCo />
    </div>
  )
}

export default ProductList
