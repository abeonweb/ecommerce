"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/context/cart/cart-context";

const RelatedProductInfo = ({id, title, price, oldPrice, rating, reviews }) => {
  const { currency } = useCart();
  const productRating = rating.toLocaleString(undefined, {
    minimumFractionDigits: 1,
  });
  const amount = price.toLocaleString(undefined, { minimumFractionDigits: 2 });
  const oldAmount = oldPrice.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });
  return (
    <>
      <Link href={`/product?id=${id}`}>
        <h3 className="font-inter text-primaryblack-950 font-medium capitalize text-base leading-6 tracking-[0.1px] mb-[10px]">
          {title}
        </h3>
        <p className="mb-[6px]">
          <span className="text-primaryorange-950 font-extrabold text-base leading-5">{`${currency}${amount}`}</span>{" "}
          <span className="line-through text-sm">{`${currency}${oldAmount}`}</span>
        </p>
        <p className="text-xs pb-[6px] flex items-center">
          <span
            className="inline-block"
            title={`${productRating} stars rating`}
          >
            <Image
              width={18}
              height={18}
              src={"/star.svg"}
              alt=""
              className="inline-block"
            />{" "}
            {productRating}
          </span>{" "}
          <span className="" aria-label={`${reviews} reviews`}>
            {` (${reviews})`}
          </span>
        </p>
      </Link>
    </>
  );
};

export default RelatedProductInfo;