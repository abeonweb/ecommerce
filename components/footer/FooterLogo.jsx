import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-col items-center gap-y-1">
      <p className="font-poppins leading-[15px] text-[10px]">Powered by</p>
      <Image width={104} height={44} src={"/peppa_2.jpg"} alt={"peppa.io"} />
    </div>
  );
}
