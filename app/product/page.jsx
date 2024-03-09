import ProductSection from "@/components/product/ProductSection";

export default function Page({ searchParams }) {
  const { id, currency } = searchParams; 

  return (
    <main className="max-w-[1440px] mx-auto">      
        <ProductSection id={id} currency={currency} />
    </main>
  );
}
