import Image from "next/image";

const PaymentMethod = () => {
  return (
    <fieldset className="px-2 md:px-6 py-10 border border-lightgray-949 rounded mb-6">
      <h2 className="capitalize font-semibold text-xl pb-6 text-primaryblack-950">
        payment method
      </h2>

      <label
        htmlFor="gocardless"
        className="mb-6 font-medium flex gap-x-3 has-[:checked]:bg-offwhite-951 justify-between items-center py-[14px] px-4 text-xs md:text-base md:leading-[26px] text-primaryblack-955 border rounded border-primaryblack-955"
        title="pay with GoCardless"
      >
        <input
          id="gocardless"
          name="payment-method"
          type="radio"
          required
          title="Pay with GoCardless"
          value="gocardless"
          className="outline-primarypurple-950"
        />
        <span className="flex w-full justify-between">
          <span className="flex items-center">Pay with GoCardless</span>
          <Image
            width={123.5}
            height={28}
            src={"/gocardless.png"}
            alt=""
            className="font-semibold w-20 md:w-[123.5px] h-auto"
          />
        </span>
      </label>
      <label
        htmlFor="stripe"
        className="font-medium flex gap-x-3 has-[:checked]:bg-offwhite-951 justify-between items-center py-[14px] px-4 text-xs md:text-base md:leading-[26px] text-primaryblack-955 border rounded border-primaryblack-955"
        title="pay with GoCardless"
      >
        <input
          id="stripe"
          name="payment-method"
          type="radio"
          required
          title="Pay with Stripe"
          value="stripe"
          className="outline-primarypurple-950"
        />
        <span className="flex w-full justify-between">
          <span className="flex items-center">Pay with Stripe</span>
          <Image
            width={67.5}
            height={28}
            src={"/stripe.png"}
            alt=""
            className="font-semibold  w-12 md:w-[67.5px] h-auto"
          />
        </span>
      </label>
    </fieldset>
  );
};

export default PaymentMethod;
