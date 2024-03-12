"use client";
import SiteLogo from "./SiteLogo";
import SearchBar from "../SearchBar";
import ProductsFilter from "../ProductsFilter";

export default function HomeNavigation({
  productFilter,
  setProductFilter,
  searchInput,
  setSearchInput,
}) {
  return (
    <div className="max-w-[1124px] mx-auto px-6 pb-[34px] ">
      <div className="flex flex-col md:flex-row text-center justify-center md:justify-between md:items-center pt-[38px] gap-y-[35px] mb-[45px]">
        <SiteLogo />
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
      <ProductsFilter
        productFilter={productFilter}
        setProductFilter={setProductFilter}
      />
    </div>
  );
}
