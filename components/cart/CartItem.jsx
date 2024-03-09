import CartItemCard from "./CartItemCard";
import RemoveItemBtn from "./RemoveItemBtn";
import UpdateCartQuantity from "./UpdateCartQuantity";
import { useCart } from "@/lib/context/cart/cart-context";

export default function CartItem({ item, currency }) {
  const {setCartItems} = useCart();
  
  const subtotal = (item.quantity * item.price).toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });

  return (
    <div className="flex justify-between items-center py-6 border-b border-offwhite-950">
      <CartItemCard item={item} currency={currency} />
      <div className="self-center flex flex-col justify-center gap-y-[10px]">
        <UpdateCartQuantity
          quantityValue={item.quantity}
          id={item.id}
          setCartItems={setCartItems}
        />

        <RemoveItemBtn id={item.id} setCartItems={setCartItems} />
      </div>
      <span className="font-semibold w-[100px] text-right text-lg leading-[30px] self-start sm:self-center">{`${currency}${subtotal}`}</span>
    </div>
  );
}
