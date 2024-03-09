import Link from "next/link";

export default function CartSummary({
  cartTotal,
  total,
  currency,
  setActive,
  setSteps,
}) {
  const totalAmount = total.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });

  return (
    <div className="max-w-[402px] w-full mx-auto xl:mx-0 text-base text-primaryblack-950 leading-5 border border-lightgray-950 rounded-lg px-3 py-[34px] xs:px-[34px] mb-10 self-start">
      <h2 className="font-bold text-[26px] leading-[41.6px] pb-[28px]">
        Total
      </h2>
      {/* product total is a length of items array */}
      <div className="font-medium">
        <p className=" flex justify-between pb-[28px]">
          <span>Products total</span>
          <span>{cartTotal}</span>
        </p>
        {/* subtotal is the sum of all totals for each item */}
        <p className=" flex justify-between pb-[28px]">
          <span>Subtotal</span>
          <span>{`${currency}${totalAmount}`}</span>
        </p>
        {/* Shipping */}
        <p className=" flex justify-between pb-[28px]">
          <span className="font-medium leading-[19.36px]">Shipping</span>
          <span className="text-xs xs:text-[14px] font-normal text-lightgray-951 leading-[16.94px]">
            Calculated in next step
          </span>
        </p>
        <p className="text-2xl leading-[29.05px] flex justify-between border-t border-offwhite-950 pt-5 pb-10">
          <span className="font-semibold">Total</span>
          <span className="font-bold">{`${currency}${totalAmount}`}</span>
        </p>
      </div>
      {cartTotal > 0 && <CartBtn setActive={setActive} setSteps={setSteps} />}
    </div>
  );
}

const CartBtn = ({ setActive, setSteps }) => {
  return (
    <button
      type="button"
      className="w-full rounded-[10px] px-[22px] py-[14px] bg-primarypurple-950 font-medium text-sm leading-[16.94px] text-center text-white"
      onClick={() => {
        setActive("Checkout details");
        // step 1 complete
        //step 2 active
        setSteps((prevSteps) =>
          prevSteps.map((step) => {
            if (step.number === 1) return { ...step, isComplete: true };
            if (step.number === 2) return { ...step, isActive: true };
            return step;
          })
        );
      }}
    >
      Proceed
    </button>
  );
};
