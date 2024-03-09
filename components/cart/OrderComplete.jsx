import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/context/cart/cart-context";

const order = {
  "Order code": "#0123_45678",
  Date: "October 19, 2023",
  Total: "$1,345.00",
  "Payment method": "GoCardless",
};

export default function OrderComplete() {
  const { cartItems, total } = useCart();
  return (
    <div className="shadow-order max-w-[738px] mx-2 md:mx-auto pb-12 md:py-20 px-2 md:px-24 flex flex-col gap-y-10 mb-36">
      <div>
        <p className="font-medium text-lightgray-953 text-lg md:text-[28px] md:leading-[28px] md:tracking-[-0.6px] text-center pb-4">
          Thank you! 🎉
        </p>
        <p className="font-medium text-3xl md:text-[40px] leading-[44px] tracking-[-0.4px] text-center text-primaryblack-955">
          Your order has been received
        </p>
      </div>

      {/* Display purchased items */}
      <div>
        <ul className="max-w-[368px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-10">
          {cartItems.map(({ id, productImage, quantity }) => (
            <li key={id} className="flex justify-center">
              <OrderImage image={productImage} quantity={quantity} />
            </li>
          ))}
        </ul>
      </div>

      <div className="self-center w-full h-36">
        <PurchaseSummary order={order} />
      </div>
      <Link
        href={"/"}
        className="self-center bg-primarypurple-950 py-3 px-10 rounded-full text-white md:text-base md:leading-[28px] tracking-[-0.4px]"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

const OrderImage = ({ image, quantity }) => {
  return (
    <div className="relative w-16 md:w-full md:h-24">
      <div className="absolute -right-4  -top-4 z-20 w-8 h-8 bg-primaryblack-951 rounded-full flex items-center justify-center">
        <span
          className={`${
            quantity > 9 ? "text-xs" : "text-base"
          } font-semibold rounded-full text-white`}
        >
          {quantity}
        </span>
      </div>
      <Image
        width={88}
        height={106}
        src={image}
        alt=""
        className="object-contain"
      />
    </div>
  );
};

const PurchaseSummary = ({ order }) => {
  let list = Object.entries(order);
  return (
    <ul className="flex flex-col items-center gap-5">
      {list.map(([key, value]) => (
        <li
          key={key}
          className="w-[272px] flex justify-between font-semibold text-sm leading-[22px]"
        >
          <span className="text-lightgray-953">{key}:</span>{" "}
          <span className="text-primaryblack-955">{value}</span>
        </li>
      ))}
    </ul>
  );
};
