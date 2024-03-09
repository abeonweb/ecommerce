"use client";
import React from "react";
import { useState, useCallback } from "react";
import { filterTags } from "@/data";
/**
 * control the active state of the productFilter
 * using an array to store all active states
 * @returns a component with togglable buttons
 */

function ProductsFilter({productFilter, setProductFilter}) {
  const toggleFilter = useCallback((value) => {
    //filter in array, remove
    if (productFilter.indexOf(value) > -1) {
      setProductFilter((prevFilters) => prevFilters.filter((f) => f !== value));
    } else {
      // add filter to array
      setProductFilter((prevFilters) => [...prevFilters, value]);
    }
  },[productFilter, setProductFilter]);

  const activeFilter = "text-white bg-primarypurple-950";
  return (
    <div className="font-poppins text-lightgray-954 flex gap-3.5">
      {filterTags.map((filter) => (
        <button
          key={filter}
          type="button"
          title={`filter ${filter}`}
          onClick={() => toggleFilter(filter)}
          className={`capitalize text-sm leading-[21px] rounded-[20px] py-1.5 px-3 bg-offwhite-951 
          ${productFilter.indexOf(filter) > -1 ? activeFilter : ""}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default React.memo(ProductsFilter);