import React from "react";

const ProductItem = ({ productId, productName, price, imageUrl }) => {
  return (
    <div className="product-item">
      <img src={imageUrl} alt={productName} className="product-image" width="150" height="175"/>
      <h3 className="product-name">{productName}</h3>
      <p className="product-price">${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductItem;
