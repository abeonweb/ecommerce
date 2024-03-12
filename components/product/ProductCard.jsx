"use client";
import { useState } from "react";
import ProductDetails from "./ProductDetails";
import ProductImageCarousel from "./ProductImageCarousel";
import ProductPageNav from "@/components/product/ProductPageNav";

export default function ProductCard({ product, next, prev }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // reset before move to another product page
  const resetColorAndSize = () => {
    setSelectedColor("");
    setSelectedSize("");
  };
  
  return (
    <>
      <ProductPageNav
        next={next}
        prev={prev}
        resetColorAndSize={resetColorAndSize}
      />
      <section className="max-w-[1046px] mx-auto flex flex-col items-center lg:flex-row lg:justify-around pt-[25px] pb-16">
        {/* image carousel */}
        <ProductImageCarousel images={product?.images} />
        {/* product details */}
        <ProductDetails
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
          setSelectedSize={setSelectedSize}
          setSelectedColor={setSelectedColor}
          resetColorAndSize={resetColorAndSize}
        />
      </section>
    </>
  );
}
