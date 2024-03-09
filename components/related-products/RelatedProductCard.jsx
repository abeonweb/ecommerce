import Image from "next/image";
import Link from "next/link";
import RelatedProductInfo from "./RelatedProductInfo";

export async function getRelatedProduct(id) {
  const res = await fetch(`http://localhost:3000/product/api?related=${id}`, {
      next: { revalidate: 3600 },
  });
  const data = await res.json();
  return JSON.parse(data);
}

export default async function RelatedProductCard({ id }) {
  const product = await getRelatedProduct(id);

  const { productImage, alt } = product;

  return (
    <div className="font-poppins text-lightgray-951 pb-5">
      <Link href={`/product?id=${product.id}`}>
        <Image
          width={239}
          height={280}
          src={productImage}
          alt={alt}
          className="mb-[10px]"
        />
      </Link>
      <RelatedProductInfo {...product} />
    </div>
  );
}
