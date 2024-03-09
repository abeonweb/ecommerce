import { memo } from "react";
import CatalogProductImage from "./CatalogProductImage";
import CatalogProductInfo from "./CatalogProductInfo";

function CatalogCard({ product }) {
  return (
    <article className="mx-auto font-poppins w-[185px] md:w-[250px] xl:w-[356px] text-lightgray-951 pb-[26px]">
      {/* Catalog Image */}
      <CatalogProductImage
        productImage={product.productImage}
        altText={product.alt}
        id={product.id}
      />

      {/* Catalog Product Info */}
      <CatalogProductInfo product={product} />
    </article>
  );
}

export default memo(CatalogCard);
