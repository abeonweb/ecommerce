import ProductCard from "@/components/product/ProductCard";
import RelatedProducts from "@/components/related-products/RelatedProducts";

export default function ProductSection({ data }) {
  const { product, next, prev } = data;

  return (
    <>
      <ProductCard product={product} next={next} prev={prev} />
      <RelatedProducts relatedProducts={product.related} />
    </>
  );
}
