import Image from "next/image";
import Link from "next/link";

export default function CatalogProductImage({ id, productImage, altText }) {
  return (
    <div className="group relative">
      <Link href={`/product?id=${id}`}>
        <div className="group rounded-lg mb-[10px] overflow-hidden max-w-[356px] max-h-[236px]">
          <Image
            width={356}
            height={236}
            src={productImage}
            alt={altText}
            className="mb-[10px] rounded-lg scale-[0.9] hover:scale-[1] transition duration-750 ease-in"
          />
        </div>
      </Link>
      {/* on hover buttons */}
      <div className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-700 flex gap-x-4 absolute top-1/3	left-1/3">
        <Image
          width={40}
          height={40}
          src={"/heart.svg"}
          alt=""
          className="w-5 h-5 md:w-full md:h-full cursor-pointer"
        />
        <Image
          width={40}
          height={40}
          src={"/add.svg"}
          alt=""
          className="w-5 h-5 md:w-full md:h-full cursor-pointer"
        />
      </div>
    </div>
  );
}
