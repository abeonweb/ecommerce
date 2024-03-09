import SiteLogo from "./SiteLogo";
import CartIcon from "./CartIcon";

export default function Navigation() {
  return (
    <header className="max-w-[1440px] mx-auto px-2 sm:px-6 h-24 border-b-[0.5px] border-lightgray-950 flex items-center justify-center">
      <nav className="max-w-[1195px] w-full flex justify-between">
        <SiteLogo />
        <CartIcon />
      </nav>
    </header>
  );
}
