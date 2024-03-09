import Image from "next/image";

const activeListItem = "lg:border-b-2 border-stockgreen-951";

export default function CartSteps({ title, steps }) {
  return (
    <section>
      <h1 className="font-medium text-3xl md:text-[54px] leading-[58px] tracking-[-1px] text-center py-10">
        {title}
      </h1>
      <ul className="max-w-[832px] mx-auto text-lightgray-952 font-semibold text-sm md:text-base 
        flex flex-col items-center gap-y-1 md:flex-row md:justify-between pb-20 pl-5">
        {steps.map(({ number, text, isComplete, isActive, start, end }) => (
          <li
            key={number}
            className={`w-64 ${
              start || end || isComplete ? activeListItem : ""
            } pb-2 mb-2 md:mb-0 md:pb-6 pr-10 flex items-center gap-x-[17px]`}
          >
            {/* number or check */}
            {isComplete ? (
              <Check />
            ) : (
              <Number
                number={number}
                isActive={isActive}
                start={start}
                end={end}
              />
            )}{" "}
            <p
              className={`${
                isActive ? "text-primaryblack-950" : ""
              } "pl-[17px] inline-block" ${
                (start || end || isComplete) && "text-stockgreen-951"
              }`}
            >
              {text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

const Check = () => {
  return (
    <span className={`rounded-full text-stockgreen-950 bg-stockgreen-951`}>
      {
        <Image
          width={14}
          height={10}
          src={"/check.svg"}
          alt=""
          className="w-full px-[8px] py-[10px] md:px-[14px] md:py-4"
        />
      }
    </span>
  );
};

const Number = ({ number, isActive, start, end }) => {
  return (
    <span
      className={`rounded-full text-offwhite-950 px-[10.38px] py-[5px] leading-[20px] md:px-[16px] md:py-[11px] 
    ${isActive ? "bg-primaryblack-955" : "bg-lightgray-952"}  ${
        (start || end) && "bg-stockgreen-951"
      }`}
    >
      {number}
    </span>
  );
};
