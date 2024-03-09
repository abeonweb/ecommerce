import type { Metadata } from "next";
import Navigation from "@/components/nav/Navigation";


export const metadata: Metadata = {
  title: "George's Electron",
  description: "Electronics at low prices",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div>
        <Navigation />
        {children}
      </div>
    </main>
  );
}
