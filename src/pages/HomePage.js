import { useEffect, useState } from "react";
import Header from "../layouts/header/Header";
import SlideShow from "../components/SlideShow";

import * as homeApi from "../apis/home-api";
import HomeProductContainer from "../fratures/home/HomeProductContainer";
import Footer from "../layouts/footer/Footer";

export default function HomePage() {
  const [fProduct, setFProduct] = useState([]);

  useEffect(() => {
    let isCancel = false;
    const fetchProduct = async () => {
      const product = await homeApi.getItemFood();
      if (!isCancel) {
        setFProduct(product.data);
        // console.log(product.data);
      }
    };
    fetchProduct();
    return () => {
      isCancel = true;
      console.log("User Canceling..");
    };
  }, []);

  return (
    <div>
      <Header />
      <SlideShow />
      {/* send item to slideshow */}
      <h1 className="text-center text-xl mt-8">Product</h1>
      {/* product // shop  */}
      <br />
      <p className="text-center text-base">type Food</p>
      <div className="flex justify-evenly w-[80vw] mx-auto mt-8 flex-wrap ">
        {fProduct?.map((el) => (
          <HomeProductContainer key={el.id} Fproduct={el} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
