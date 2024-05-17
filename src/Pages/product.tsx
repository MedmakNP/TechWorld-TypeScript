import React from "react";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
import HotBar from "../Components/HotBar/hotBar";
import { useParams } from "react-router-dom";
import Product from "../Components/Product/product";


const ProductPage: React.FC = () => {
  const { productId } = useParams();
  const productIdNum = parseInt(productId || '')
  return (
    <>
      <Header />
      <HotBar />
      <Product  id={productIdNum} />
      <Footer />
    </>
  );
}

export default ProductPage;
