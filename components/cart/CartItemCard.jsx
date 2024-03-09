import Image from "next/image";

export default function CartItemCard({ item, currency }) {
  const { title, price, color, size, productImage } = item;
  const amount = price.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });
  return (
    <div className="flex flex-col gap-y-4 sm:flex-row gap-x-[16px]">
      <Image
        width={88}
        height={106}
        src={productImage}
        alt=""
        className="object-cover"
      />
      <ul className="min-w-[100px] flex flex-col gap-y-2 text-xs leading-5 text-lightgray-953">
        <li className="max-w-[100px]  font-semibold text-sm leading-[22px] text-primaryblack-950 ">
          {title}
        </li>
        <li>{`${currency}${amount}`}</li>
        {color && <li>Color: {color}</li>}
        {size && <li>Size: {size}</li>}
      </ul>
    </div>
  );
}
