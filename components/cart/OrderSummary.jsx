import { useState } from "react";
import { useCart } from "@/lib/context/cart/cart-context";
import SummaryItemsList from "./SummaryItemsList";
import Image from "next/image";

export default function OrderSummary({}) {
  const {
    total,
    currency,
    cartItems,
    setCartItems,
    couponList,
    setCouponList,
  } = useCart();
  const [coupon, setCoupon] = useState("");
  const [validCoupon, setValidCoupon] = useState(null);

  const handleCouponValidation = () => {
    let id = "";
    for (let i = 0; i < couponList.length; i++) {
      id = couponList[i].id;
      if (id == coupon) {
        if (couponList[i].applied == true) {
          return;
        }
        setCouponList((prevList) => {
          return prevList.map((item) => {
            if (item.id == id) return { ...item, applied: true };
            return item;
          });
        });
        const valid = { ...couponList[i], applied: true };
        setValidCoupon(valid);
        setCoupon("");
        return;
      }
    }
    //no valid coupon found
    setValidCoupon(null);
  };

  const removeCoupon = (valid) => {
    // set applied to false
    //update in couponList
    //set valid to null
    setCouponList((prevList) => {
      return prevList.map((item) => {
        if (valid.id == item.id) {
          return { ...item, applied: false };
        }
        return item;
      });
    });
    setValidCoupon(null);
  };

  const shipping = 99;
  const couponValue = validCoupon?.value || 0;

  const totalAmount = (total + shipping + couponValue).toLocaleString(
    undefined,
    {
      minimumFractionDigits: 2,
    }
  );
  const subtotal = total.toLocaleString(
    undefined,
    {
      minimumFractionDigits: 2,
    }
  );

  const shippingCost = shipping.toLocaleString(
    undefined,
    {
      minimumFractionDigits: 2,
    }
  );

  return (
    <div className="max-w-[413px] mx-auto xl:mx-0 w-full h-full text-primaryblack-955 mb-20 pt-10 pl-[13px] md:pl-6 pr-[13px] border rounded border-lightgray-950">
      <h2 className="text-[28px] leading-[34px] tracking-[-0.6px] font-bold pb-4">
        Order Summary
      </h2>

      <SummaryItemsList
        currency={currency}
        list={cartItems}
        setCartItems={setCartItems}
      />
      <ValidateCouponForm
        currency={currency}
        validCoupon={validCoupon}
        coupon={coupon}
        setCoupon={setCoupon}
        handleCouponValidation={handleCouponValidation}
        removeCoupon={removeCoupon}
      />
      <div className="md:pr-[11px]">
        <p className=" flex justify-between leading-[26px] pb-[13px] border-b border-offwhite-952">
          <span className="font-medium">Shipping</span>
          <span className="font-semibold">{`${currency}${shippingCost}`}</span>
        </p>
        <p className=" flex justify-between leading-[26px] pb-[13px] border-b border-offwhite-952">
          <span className="font-medium">Subtotal</span>
          <span className="font-semibold">{`${currency}${subtotal}`}</span>
        </p>
        <p className="text-2xl font-bold leading-7 flex justify-between border-t border-offwhite-950 pt-[13px] pb-10">
          <span className="">Total</span>
          <span className="">{`${currency}${totalAmount}`}</span>
        </p>
      </div>
    </div>
  );
}

/**
 * checks the validity of input against a list
 * valid input returns a discount amount applied to cart total amount
 * cart total amount is not updated
 * limit the use by setting a flag
 *
 */
const ValidateCouponForm = ({
  currency,
  validCoupon,
  coupon,
  setCoupon,
  handleCouponValidation,
  removeCoupon,
}) => {
  let discount = 0;
  if (validCoupon?.label) {
    discount = validCoupon.label.toLocaleString(undefined, {
      minimumFractionDigits: 2,
    });
  }

  return (
    <div className="md:pr-[11px] pb-4">
      <form id="coupon-validator" className="flex justify-between pb-4">
        <input
          type="text"
          placeholder="Coupon code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          title="Case sensitive coupon code"
          className="text-xs md:text-base rounded-lg md:leading-[26px] text-lightgray-955 border py-[13px] px-4 outline-primarypurple-950"
        />
        <button
          type="button"
          className="text-xs md:text-base rounded-lg md:leading-7 py-3 px-6 xl:px-[26px] font-medium bg-primaryblack-955 text-white"
          onClick={handleCouponValidation}
        >
          Apply
        </button>
      </form>
      {validCoupon ? (
        <p className=" flex justify-between leading-[26px] pb-[13px] border-b border-offwhite-952">
          <span className="flex leading-[26px] gap-x-2">
            <Image width={24} height={24} src={"/coupon.svg"} alt="" />{" "}
            {validCoupon.id}
          </span>
          <span className="font-semibold text-stockgreen-952">
            <span>
              {`-${currency}
              ${discount}`}
            </span>{" "}
            <button onClick={() => removeCoupon(validCoupon)}>
              {"[Remove]"}
            </button>
          </span>
        </p>
      ) : null}
    </div>
  );
};
