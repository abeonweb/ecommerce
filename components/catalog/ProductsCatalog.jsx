"use client";
import { memo, useState } from "react";
import HomeNavigation from "@/components/nav/HomeNavigation";
import CatalogCard from "@/components/catalog/CatalogCard";

const Products = ({ productsCatalog }) => {
  const [searchInput, setSearchInput] = useState("");
  const [productFilter, setProductFilter] = useState(["all"]);
  
  let filteredProducts = [];

  if (productFilter.includes("all") || productFilter.length == 0) {
    filteredProducts = productsCatalog;
  } else {
    productsCatalog.map((product) => {
      // check each product for a product filter
      for (let i = 0; i < productFilter.length; i++) {
        if (product.tags.includes(productFilter[i])) {
          filteredProducts.push(product);
          // one filter found, terminate loop
          break;
        }
      }
    });
  }

  //   if searchInput has length greater than 0, search the filtered array for the searchInput
  if (searchInput.length > 0 && filteredProducts.length > 1) {
    filteredProducts = filteredProducts.filter(({ title }) =>
      title.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
  return (
    <>
      <HomeNavigation
        productFilter={productFilter}
        setProductFilter={setProductFilter}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <section className="max-w-[1124px] mx-auto px-5 md:px-0 grid xs:grid-cols-2 lg:grid-cols-3 gap-x-7">
        {filteredProducts.map((product) => (
          <CatalogCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
};

export default memo(Products);
