import Image from "next/image";
import UpdateCartQuantity from "./UpdateCartQuantity";

export default function SummaryItemsList({ list, currency, setCartItems }) {
  return (
    <div className="pb-6">
      {list.map((item) => (
        <SummaryItemCard
          key={item.id}
          item={item}
          currency={currency}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
}

const SummaryItemCard = ({ item, currency, setCartItems }) => {
  const { quantity, price, title, productImage, color, size } = item;

  const amount = (price * quantity).toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });

  return (
    <div className="flex justify-between py-6 border-b font-medium text-primaryblack-955 leading-[22px]">
      <div className="flex gap-x-4">
        <Image
          width={88}
          height={106}
          src={productImage}
          alt=""
          className="object-cover"
        />
        <div className="flex flex-col justify-between text-xs leading-5 text-lightgray-953 pb-[6px]">
          <span className="max-w-[100px]  font-semibold text-sm leading-[22px] text-primaryblack-950 ">
            {title}
          </span>
          {color && <span>Color: {color}</span>}
          <UpdateCartQuantity
            quantityValue={item.quantity}
            setCartItems={setCartItems}
            id={item.id}
          />
        </div>
      </div>
      <span className="pr-[11px]">{`${currency}${amount}`}</span>
    </div>
  );
};
