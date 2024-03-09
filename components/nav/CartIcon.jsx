import Link from 'next/link';
import Image from 'next/image';

export default function CartIcon() {
  return (
    <div className="flex items-center">
      <Link href={"/cart"}>
        <Image width={24} height={24} src={"/cart.svg"} alt="shopping cart" />
      </Link>
    </div>
  )
}
