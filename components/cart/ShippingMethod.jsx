import React from "react";

const ShippingMethod = () => {
  return (
    <fieldset className="px-2 md:px-6 py-10 border border-lightgray-949 rounded mb-6">
      <h2 className="capitalize font-semibold text-xl pb-6 text-primaryblack-950">
        shipping method
      </h2>

      <label
        htmlFor="shipping-method"
        className="mb-6 font-medium flex gap-x-3 has-[:checked]:bg-offwhite-951 justify-between items-center py-[14px] px-4 text-xs md:text-base md:leading-[26px] text-primaryblack-955 border rounded border-primaryblack-955"
      >
        <input
          id="shipping-method"
          name="shipping-method"
          type="radio"
          required
          title="shipping method"
          className="outline-primarypurple-950 w-[18px] h-[18px]"
        />
        <span className="flex w-full justify-between">
          <span>Standard shipping</span>
          <span className="font-semibold">$99.00</span>
        </span>
      </label>
    </fieldset>
  );
};

export default ShippingMethod;
