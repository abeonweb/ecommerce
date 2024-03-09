import ProductDetails from "./ProductDetails";
import ProductImageCarousel from "./ProductImageCarousel";
import ProductPageNav from "@/components/product/ProductPageNav";
import RelatedProducts from "@/components/related-products/RelatedProducts";
import { getProduct } from "@/lib/action";

export default async function ProductSection({ id, currency }) {
  const { product, next, prev } = await getProduct(id);
  
  return (
    <>
      <ProductPageNav next={next} prev={prev} />
      <ProductCard product={product} />
      <RelatedProducts relatedProducts={product.related} currency={currency} />
    </>
  );
}

const ProductCard = ({ product }) => {
  return (
    <section className="max-w-[1046px] mx-auto flex flex-col items-center lg:flex-row lg:justify-around pb-16">
      {/* image carousel */}
      <ProductImageCarousel images={product?.images} />
      {/* product details */}
      <ProductDetails product={product} />
    </section>
  );
};
