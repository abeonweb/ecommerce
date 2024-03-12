import { Suspense } from "react";
import { notFound } from "next/navigation";
import ProductsCatalog from "@/components/catalog/ProductsCatalog";
import HeaderImage from "@/components/catalog/HeaderImage";
import { SkeletonSpinner } from "@/components/skeleton/Skeletons";
import { getProducts } from "@/lib/data/fetch";

export default function Home() {
  const products = getProducts();

  if (!products) {
    notFound()
  }

  return (
    <main className="max-w-[1440px] min-h-screen mx-auto pb-[74px]">
      <HeaderImage />
      {/* Catalog of products */}
      <Suspense fallback={<SkeletonSpinner />}>
        <ProductsCatalog productsCatalog={products} />
      </Suspense>
    </main>
  );
}

