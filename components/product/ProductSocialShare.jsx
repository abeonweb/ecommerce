"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { socialMediaIcons } from "../../data";

export default function ProductSocialShare() {
  const pathName = usePathname();
  return (
    <div className="max-w-52 text-[14px] pb-20">
      <p className="mb-[14px] text-lightgray-951">Share this product with friends:</p>
      <ul className="flex gap-x-[14px] justify-start mb-2">
        {socialMediaIcons.map(({ title, image, url, alt }) => (
          <li key={title}>
            <Link href={`${url}${pathName}`}>
              <Image width={20} height={20} src={image} alt={alt} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
