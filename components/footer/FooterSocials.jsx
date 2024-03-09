import Image from "next/image";
import Link from "next/link";
import { footerSocialMediaIcons } from "../../data";

export default function FooterSocials() {
  return (
    <ul className="flex gap-x-[16px] justify-center mb-2">
      {footerSocialMediaIcons.map(({ title, image, url, alt }) => (
        <li key={title}>
          <Link href={url}>
            <Image width={32} height={32} src={image} alt={alt} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
