import { countryOptions } from "@/data";

const ShippingAddress = () => {
  return (
    <fieldset className="px-2 md:px-6 py-10 border border-lightgray-949 rounded mb-6">
      <h2 className="capitalize font-semibold text-xl pb-6 text-primaryblack-950">
        shipping address
      </h2>
      {/* Street */}
      <div className="pb-6">
        <label
          htmlFor="street-address"
          className="block uppercase pb-2 md:pb-4 text-[10px] md:text-sm font-bold leading-3"
        >
          street address *
        </label>
        <input
          id="street-address"
          name="street-address"
          type="text"
          placeholder="Street Address"
          required
          aria-required="true"
          className="w-full rounded-md border border-lightgray-949 px-4 py-[7px] leading-[26px] outline-primarypurple-950"
        />
      </div>

      {/* Country */}
      <div className="pb-6">
        <label
          htmlFor="country"
          className="block uppercase pb-2 md:pb-4 text-[10px] md:text-sm font-bold leading-3"
        >
          country *
        </label>
        <select
          id="country"
          name="country"
          required
          aria-required="true"
          className="w-full rounded-md border border-lightgray-949 px-4 py-[8px] leading-[26px] outline-primarypurple-950 no-scrollbar"
        >
          
          {countryOptions.map(({ value }) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      {/* Town / City */}
      <div className="pb-6">
        <label
          htmlFor="town-city"
          className="block uppercase pb-2 md:pb-4 text-[10px] md:text-sm font-bold leading-3"
        >
          town / city *
        </label>
        <input
          id="town-city"
          name="town-city"
          type="text"
          placeholder="Town / City"
          required
          aria-required="true"
          className="w-full rounded-md border border-lightgray-949 px-4 py-[7px] leading-[26px] outline-primarypurple-950"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-x-6 pb-6">
        {/* State */}
        <div className="pb-6 md:pb-0">
          <label
            htmlFor="state"
            className="block uppercase pb-2 md:pb-4 text-[10px] md:text-sm font-bold leading-3"
          >
            state
          </label>
          <input
            id="state"
            name="state"
            type="text"
            placeholder="State"
            className="w-full  rounded-md border border-lightgray-949 px-4 py-[7px] leading-[26px] outline-primarypurple-950"
          />
        </div>

        {/* Zip code */}
        <div>
          <label
            htmlFor="zip-code"
            className="block uppercase pb-2 md:pb-4 text-[10px] md:text-sm font-bold leading-3"
          >
            zip code
          </label>
          <input
            id="zip-code"
            name="zip-code"
            type="text"
            placeholder="Zip code"
            className="w-full  rounded-md border border-lightgray-949 px-4 py-[7px] leading-[26px] outline-primarypurple-950"
          />
        </div>
      </div>
      {/*Checkbox */}
      <div>
        <label
          htmlFor="billing-address"
          className="flex gap-x-3 pb-2 md:pb-4 text-base leading-[26px]"
        >
          <input
            id="billing-address"
            name="billing-address"
            type="checkbox"
            className="outline-primarypurple-950 w-6 h-6"
          />
          Use a different billing address (optional)
        </label>
      </div>
    </fieldset>
  );
};

export default ShippingAddress;
