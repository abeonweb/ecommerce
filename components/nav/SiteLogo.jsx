import { memo } from "react";
import Link from "next/link";

function SiteLogo() {
  return (
    <Link href={"/"}>
      <h2 title="site logo" className="font-poppins inline-block font-semibold text-2xl leading-6 sm:text-[32px] ">
        George&lsquo;s Electro
      </h2>
    </Link>
  );
}

export default memo(SiteLogo);