import { Suspense } from "react";
import RelatedProductCard from "./RelatedProductCard";
import { ProductSpinner } from "../skeleton/Skeletons";
/**
 * accepts an array of products ids
 * @returns related products list
 */
export default function RelatedProducts({ relatedProducts }) {
  return (
    <aside className="max-w-[1042px] mx-auto">
      <h2 className="font-inter uppercase text-primaryblack-950 font-bold text-xl md:text-2xl tracking-[0.1px] pb-6 pt-12 px-2 md:px-8">
        you might also like
        
      </h2>
      <ul className="flex flex-row justify-around flex-wrap gap-y-6 gap-x-[28px] py-4 border-t-2 border-offwhite-950">
        {relatedProducts.map((id, index) => (
          <li key={index + id}>
            <Suspense key={id} fallback={<ProductSpinner />}>
              <RelatedProductCard id={id} />
            </Suspense>
          </li>
        ))}
      </ul>
    </aside>
  );
}
