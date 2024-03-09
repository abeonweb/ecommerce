import React from 'react'

const ContactInfo = () => {
  return (
    <fieldset className="w-full px-2 md:px-6 py-10 border border-lightgray-949 rounded mb-6 ">
        <h2 className="capitalize font-semibold text-xl pb-6 text-primaryblack-950">
          contact information
        </h2>
        <div className="flex flex-col md:flex-row gap-x-6 pb-6">
          <div className="pb-6 md:pb-0">
            <label
              htmlFor="firstname"
              className="block uppercase pb-2 md:pb-4 text-[10px] md:text-sm font-bold leading-3"
            >
              first name
            </label>
            <input
              id="firstname"
              name="firstname"
              type="text"
              placeholder="First name"
              className="w-full  rounded-md border border-lightgray-949 px-4 py-[7px] leading-[26px] outline-primarypurple-950"
            />
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block uppercase pb-2 md:pb-4 text-[10px] md:text-sm font-bold leading-3"
            >
              last name
            </label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Last name"
              className="w-full  rounded-md border border-lightgray-949 px-4 py-[7px] leading-[26px] outline-primarypurple-950"
            />
          </div>
        </div>

        <div className="pb-6">
          <label
            htmlFor="phonenumber"
            className="block uppercase pb-2 md:pb-4 text-[10px] md:text-sm font-bold leading-3"
          >
            phone number
          </label>
          <input
            id="phonenumber"
            name="phonenumber"
            type="text"
            placeholder="Phone number"
            className="w-full rounded-md border border-lightgray-949 px-4 py-[7px] leading-[26px] outline-primarypurple-950"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block uppercase pb-2 md:pb-4 text-[10px] md:text-sm font-bold leading-3"
          >
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Your Email "
            className="w-full rounded-md border border-lightgray-949 px-4 py-[7px] leading-[26px] outline-primarypurple-950"
          />
        </div>
      </fieldset>
  )
}

export default ContactInfo
