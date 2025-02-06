import React from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const products = [
    { productId: 1, productName: "Calculadora Casio fx-570Es PLUS", price: 30, imageUrl: "https://mail.zonadigitalsv.com/product/4549526608759/image" },
    { productId: 2, productName: "Consola de videojuegos microsoft xbox series x 1tb blanco", price: 999, imageUrl: "https://api.zonadigitalsv.com/storage/products/imagen_generada679e4a5e2c858.jpg" },
    { productId: 3, productName: "Control usb razer wolverine v3 tournament edition xbox xls one pc windows rz06-05210100-r3u1", price: 40, imageUrl: "https://api.zonadigitalsv.com/storage/products/imagen_generada67927a4837d88.jpg" },
    { productId: 4, productName: "Logitech rs shifter handbrake 941-000242 pc g29 g920 g923", price: 300, imageUrl: "https://apizd.zonadigitalsv.com/storage/productos/IwIOnXMSVbYwCMQw1RtIaSLuFSV0y15VyH3HZO80.png" },
    { productId: 5, productName: "Teclado mecanico usb razer blackwidow v4 75% rgb rz03-05000200-r3u1 sw tactil naranja us", price: 100, imageUrl: "https://apizd.zonadigitalsv.com/storage/productos/4kxaeHC0FGIyPTfC7LZ7uR3zxpgbjaiaXzPRT1xI.png" },
    { productId: 6, productName: "Microfono profesional razer seiren v3 mini negro rz19-05050100-r3u1", price: 50, imageUrl: "https://api.zonadigitalsv.com/storage/products/imagen_generada6776f0e338eb6.jpg" },
    { productId: 7, productName: "Laptop asus tuf fa506ncr-wh71 proc. amd ryzen 7 7435hs ram ddr5 8gb almacenamiento ssd 512gb rtx3050 4gb pantalla fhd 15.6p w11h wifi+bt kb us negro", price: 999, imageUrl: "https://api.zonadigitalsv.com/storage/products/imagen_generada676b089b27dd0.jpg" },
    { productId: 8, productName: "Control sony dualsense para playstation 5 chroma indigo", price: 60, imageUrl: "https://api.zonadigitalsv.com/storage/products/imagen_generada676b34c2954de.jpg" },
    { productId: 9, productName: "Control sony dualsense para playstation 5 chroma pearl", price: 60, imageUrl: "https://api.zonadigitalsv.com/storage/products/imagen_generada676b348663d59.jpg" },
    { productId: 10, productName: "Teclado inalambrico bluetooth mecanico logitech g915 x tkl rgb negro 920-012715 hasta 42h", price: 200, imageUrl: "https://api.zonadigitalsv.com/storage/products/imagen_generada676051ceb47a8.jpg" }
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.productId} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
