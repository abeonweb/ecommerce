"use client"
import Image from "next/image";
import ProductSocialShare from "./ProductSocialShare";
import AddToCart from "./AddToCart";
import { useCart } from "@/lib/context/cart/cart-context";

export default function ProductDetails({ product }) {
  const { title, price, reviews, inStock, description } = product;
  const { currency } = useCart();
  // proper format for price
  const amount = price.toLocaleString(undefined, { minimumFractionDigits: 2 });

  return (
    <article className="font-inter text-[14px] text-lightgray-951  px-[10px] lg:px-0 pt-3">
      <div className="pb-[28px]">
        <h1 className="text-primaryblack-950 text-xl leading-[30px] tracking-[0.2px] mb-3">
          {title}
        </h1>
        <div className="flex gap-x-[10px] mb-5">
          <Image width={131} height={23} src={"/stars.png"} alt="" className="self-center"/>
          <span className="leading-[24px]">{reviews} Reviews</span>
        </div>
        <p className="text-primaryblack-950 text-2xl tracking-[0.1px] font-extrabold mb-[6px]">{`${currency}${amount}`}</p>
        <p className="font-bold text-lightgray-951 text-[14px] leading-[24px] mb-[30px]">
          Availability :
          <span
            className={`${
              inStock ? "text-stockgreen-950" : "text-black"
            } font-montserrat`}
          >
            {inStock ? " In Stock" : " Not Available"}
          </span>
        </p>
        <p className="leading-[20px] max-w-[421px]">{description}</p>
      </div>
      {/* add to cart */}
      <AddToCart product={product} />

      {/* social sharing of product */}
      <ProductSocialShare />
    </article>
  );
}
