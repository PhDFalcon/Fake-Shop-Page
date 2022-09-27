import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
    const products = useSelector ((state) => state.allProducts.products);
    const renderList = products.map ((product)=>{
        const { id, title, image, price, category} = product;
        return (
            <div className="four wide column" style={{marginTop:"20px"}} key={id}>
                <Link to={`/product/${id}`}>
            <div className="ui link cards">
                <div className="card">
                    <div className="image" style={{display:"flex", justifyContent:"center", 
                    backgroundColor:"white"}} >
                        <img src={ image } alt={image} style={{height:"180px", width:"180px", padding:"10px"}} />
                    </div>
                    <div className="content">
                     <div className="header" style={{fontSize:"13px", height:"45px"}}>{ title}</div>
                     <div className="meta price" > $ {price}</div>
                     <div className="meta">{ category }</div>
                    </div>
                </div>
            </div>
            </Link>
        </div>);
    });
    return (
        <>{renderList}</>
    );
};
     

export default ProductComponent;