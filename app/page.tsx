
import { Suspense } from "react";
import { notFound } from "next/navigation";
import ProductsCatalog from "@/components/catalog/ProductsCatalog";
import HeaderImage from "@/components/catalog/HeaderImage";
import { SkeletonSpinner } from "@/components/skeleton/Skeletons";

async function getProducts() {
  const data = await fetch('http://localhost:3000/api', { next: { revalidate: 60 } });
  const json = await data.json();
  return JSON.parse(json)
}
export default async function Home() {

  const products = await getProducts();

  if (!products) {
    notFound()
  }

  return (
    <main className="max-w-[1440px] mx-auto pb-[74px]">
      <HeaderImage />
      {/* Catalog of products */}
      <Suspense fallback={<SkeletonSpinner />}>
        <ProductsCatalog productsCatalog={products} />
      </Suspense>
    </main>
  );
}

