import ProductSection from "@/components/product/ProductSection";
import { getProduct } from "../../lib/data/fetch";

export default function Page({ searchParams }) {
  const { id } = searchParams;
  const data = getProduct(id);
  
  return (
    <main className="max-w-[1440px] min-h-screen mx-auto">
      <ProductSection data={data} />
    </main>
  );
}
