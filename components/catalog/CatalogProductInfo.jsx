"use client";
import Image from "next/image";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn";
import { useCart } from "@/lib/context/cart/cart-context";

export default function CatalogProductInfo({ product }) {
  const { currency } = useCart();
  const { id, profileImage, title, price, oldPrice, rating, reviews, sales } =
    product;
  const amount = price.toLocaleString(undefined, { minimumFractionDigits: 2 });

  const oldAmount = oldPrice.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });

  const ratingValue = rating.toLocaleString(undefined, {
    minimumFractionDigits: 1,
  });

  return (
    <div className="lg:flex gap-x-4">
      {/* Profile Picture */}
      <div className="hidden lg:block">
        <Image
          width={28}
          height={28}
          src={profileImage}
          alt="profile picture"
        />
      </div>
      <div className="w-full">
        <Link href={`/product?id=${id}`}>
          <h3 className="text-primaryblack-951 font-semibold capitalize text-xs leading-5 pb-1 lg:pb-3">
            {title}
          </h3>
        </Link>
        {/* Prices, Rating, Reviews  & Cart*/}
        <div className="flex justify-between">
          <div className="">
            {/* Prices */}
            <p className="mb-2 text-sm leading-5">
              <span className="text-primaryyellow-950">{currency}</span>
              <span className="text-primaryyellow-950 font-semibold pr-2">
                {amount}
              </span>{" "}
              <span className="line-through ">{`${currency}${oldAmount}`}</span>
            </p>
            {/* Sales, Ratings, Reviews */}
            <p className="text-[10px] sm:text-xs flex items-center justify-between">
              <span className="hidden lg:block">{sales} sales</span>
              <span>
                {/* Rating */}
                <span className="inline-block" aria-label={`${rating} stars`}>
                  <Image
                    width={18}
                    height={18}
                    src={"/star.svg"}
                    alt=""
                    className="inline-block"
                  />{" "}
                  {ratingValue}
                </span>{" "}
                {/* Reviews */}
                <span className="" aria-label={`${reviews} reviews`}>
                  {` (${reviews})`}
                </span>
              </span>
            </p>
          </div>
          <AddToCartBtn product={product} />
        </div>
      </div>
    </div>
  );
}
