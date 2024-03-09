import React from "react";
import Image from "next/image";
import Link from "next/link";

const SearchBar = ({searchInput, setSearchInput}) => {
  return (
    <form action={(e)=>{e.preventDefault}} className="flex items-center justify-between">
      <div className="has-[:focus]:outline outline-primarypurple-950 max-w-[230px] flex sm:py-3 sm:pr-[32px] sm:pl-6 sm:rounded-xl sm:bg-[#18191F0A]">
        <span className="bg-[url(/search_mobile.svg)] bg-no-repeat bg-center sm:hidden w-8" />
        <span className="bg-[url(/search_normal.svg)] bg-no-repeat hidden sm:block w-8" />
        <input
          type="text"
          placeholder="Search"
          className="searchbar bg-transparent w-full pl-2 outline-none"
          value={searchInput}
          onChange={(event)=>setSearchInput(event.target.value) }
        />
      </div>
      <Link href={"/cart"} title="Go to cart">
          <Image
            width={32}
            height={32}
            src={"/basket.svg"}
            alt=""
            className="md:hidden"
          />
      </Link>
    </form>
  );
};

export default React.memo(SearchBar);
