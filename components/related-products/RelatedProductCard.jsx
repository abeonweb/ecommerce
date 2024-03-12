import Image from "next/image";
import Link from "next/link";
import RelatedProductInfo from "./RelatedProductInfo";
import { getProduct } from "@/lib/data/fetch";

export default function RelatedProductCard({ id }) {
  const {product} = getProduct(id);

  const { productImage, alt } = product;

  return (
    <div className="font-poppins text-lightgray-951 pb-5 max-w-[220px] xl:max-w-[239px] h-auto overflow-hidden">
      <Link href={`/product?id=${product.id}`}>
        <Image
          width={239}
          height={280}
          src={productImage}
          alt={alt}
          className="mb-[10px] object-contain"
        />
      </Link>
      <RelatedProductInfo {...product} />
    </div>
  );
}
