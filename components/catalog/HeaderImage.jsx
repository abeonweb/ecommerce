import Image from "next/image";

const HeaderImage = () => {
  return (
    <section className="relative xl:mb-[102px]">
      <Image
        width={428}
        height={194}
        src={"/hero_image_mobile.webp"}
        alt=""
        className="sm:hidden object-contain mx-auto"
        priority
      />
      <Image
        width={1440}
        height={331}
        src={"/hero_image.webp"}
        alt=""
        className="hidden sm:block"
        priority
      />
      <div className="hidden absolute bottom-[-68px] left-[80px] xl:left-[159px] font-poppins text-xl rounded-full leading-5 bg-[#D9D9D9] w-[136px] h-[136px] xl:inline-flex justify-center items-center">
        Logo
      </div>
    </section>
  );
};

export default HeaderImage;