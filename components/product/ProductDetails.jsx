"use client";
import { useState } from "react";
import Image from "next/image";
import ProductSocialShare from "./ProductSocialShare";
import AddToCart from "./AddToCart";
import { useCart } from "@/lib/context/cart/cart-context";

export default function ProductDetails({
  product,
  selectedSize,
  selectedColor,
  setSelectedSize,
  setSelectedColor,
  resetColorAndSize,
}) {
  const [colorWarning, setColorWarning] = useState("");
  const [sizeWarning, setSizeWarning] = useState("");
  const { currency } = useCart();
  const { title, price, reviews, inStock, description, sizes, colors } =
    product;

  const handleSize = (clickedSize) => {
    if (clickedSize == selectedSize) setSelectedSize("");
    else {
      setSelectedSize(clickedSize);
      setSizeWarning("");
    }
  };
  const handleColor = (clickedColor) => {
    if (clickedColor == selectedColor) setSelectedColor("");
    else {
      setSelectedColor(clickedColor);
      setColorWarning("");
    }
  };

  // proper format for price
  const amount = price.toLocaleString(undefined, { minimumFractionDigits: 2 });

  return (
    <article className="font-inter text-[14px] text-lightgray-951  px-[10px] lg:px-0 pt-3">
      <div className="pb-[28px]">
        <h1 className="text-primaryblack-950 text-xl leading-[30px] tracking-[0.2px] mb-3">
          {title}
        </h1>
        <div className="flex gap-x-[10px] mb-5">
          <Image
            width={131}
            height={23}
            src={"/stars.png"}
            alt=""
            className="self-center"
          />
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
      {/* Optional size and color */}
      <div className="border-t border-offwhite-950">
        {/* color */}
        {colors?.length > 0 && (
          <Colors
            selectedColor={selectedColor}
            availableColors={colors}
            handleColor={handleColor}
            colorWarning={colorWarning}
          />
        )}

        {/* size */}
        {/* if there is size, check which one's are a present and make them active */}
        {sizes?.length > 0 && (
          <Sizes
            selectedSize={selectedSize}
            availableSizes={sizes}
            handleSize={handleSize}
            sizeWarning={sizeWarning}
          />
        )}

        {/* add to cart */}
        {/* if there is color or size, they must be selected for the add to cart to work */}
        <AddToCart
          sizes={sizes}
          colors={colors}
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
          setSizeWarning={setSizeWarning}
          setColorWarning={setColorWarning}
          resetColorAndSize={resetColorAndSize}
        />
      </div>

      {/* social sharing of product */}
      <ProductSocialShare />
    </article>
  );
}

const Colors = ({ handleColor, availableColors, selectedColor, colorWarning }) => {
  return (
    <>
      <div className="flex gap-x-[22px] items-center pt-[34px]">
        <span className="text-base leading-5 text-primaryblack-950">
          Colors:{" "}
        </span>
        <ul className="flex gap-x-[10px]">
          {availableColors.map((color) => {
            const selected = selectedColor == color || false;
            return (
              <li key={color}>
                <div
                  onClick={() => handleColor(color)}
                  className={`p-0 border-1 w-[30px] h-[30px] rounded-full outline-none ${
                    selected
                      ? "outline-offset-2 outline-2 outline-primarypurple-950"
                      : ""
                  }`}
                  style={{ backgroundColor: color }}
                >
                  <span className="sr-only">color</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {colorWarning !== "" ? (
        <div className="text-[red] text-xs pt-1">Please select a color</div>
      ) : (
        <div className="h-5" />
      )}
    </>
  );
};

const Sizes = ({ handleSize, availableSizes, selectedSize, sizeWarning }) => {
  const options = ["xs", "s", "m", "l", "xl"];
  return (
    <>
      <div className="flex gap-x-[34px] items-center pt-[14px]">
        <span className="hidden xs:block text-base leading-5 text-primaryblack-950">
          Size{" "}
        </span>
        <ul className="flex gap-x-3">
          {options.map((size) => {
            const available = availableSizes.includes(size);
            const selected = selectedSize == size || false;
            return (
              <li key={size}>
                <button
                  disabled={!available}
                  onClick={() => handleSize(size)}
                  className={`font-lato uppercase text-sm text-[rgba(232, 232, 232, 1)] font-bold py-[6px] px-4 rounded border border-lightgray-957 ${
                    available ? "border-lightgray-958 text-[rgb(51,51,51)]" : ""
                  } ${
                    selected
                      ? "text-white bg-primarypurple-950 border-x-primarypurple-950"
                      : ""
                  }`}
                >
                  <span className={`${selected ? "text-white" : ""}`}>
                    {size}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      {sizeWarning !== "" ? (<div className="text-[red] text-xs pt-1">Please select a size</div>) : (<div className="h-5" />)}
    </>
  );
};
