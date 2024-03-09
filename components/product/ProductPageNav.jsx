import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function ProductPageNav({ next, prev }) {
  return (
    <div className="max-w-[1200px] w-full mx-auto font-inter flex justify-between text-sm sm:text-base py-10 px-2 select-none">
      <Link href={"/"} className="flex gap-x-0.5">
        <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
        <span>Back to catalog</span>
      </Link>

      <div className="flex justify-between text-base gap-x-3">
        {prev ? (
          <Link
            href={`/product?id=${prev}`}
            className="flex gap-x-1 text-primaryblack-950"
          >
            <ChevronLeftIcon className="h-6 w-6" />
            <span>Prev</span>
          </Link>
        ) : (
          <span className="flex gap-x-1 text-lightgray-950">
            <ChevronLeftIcon className="h-6 w-6" />
            <span>Prev</span>
          </span>
        )}

        {next ? (
          <Link
            href={`/product?id=${next}`}
            className="flex gap-x-1 text-primaryblack-950"
          >
            <span>Next</span>
            <ChevronRightIcon className="h-6 w-6" />
          </Link>
        ) : (
          <span className="flex gap-x-1 text-lightgray-950">
            <span>Next</span>
            <ChevronRightIcon className="h-6 w-6" />
          </span>
        )}
      </div>
    </div>
  );
}
