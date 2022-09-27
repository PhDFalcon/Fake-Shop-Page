import React, { useEffect }from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import axios from "axios";

const ProductListing = () => {
    const products = useSelector ((state) => state.allProducts.products);
    const dispatch = useDispatch ();
    const fetchProducts = async ()=>{
        const response = await axios
        .get ("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log ("err", err)
        });
        dispatch (setProducts (response.data));
        };
    useEffect (()=>{
        fetchProducts ();
    }, []);
    console.log ("Products:", products);
    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    );
    };

export default ProductListing;