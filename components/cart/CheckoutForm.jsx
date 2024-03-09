import ContactInfo from "./ContactInfo";
import ShippingAddress from "./ShippingAddress";
import ShippingMethod from "./ShippingMethod";
import PaymentMethod from "./PaymentMethod";

const CheckoutForm = ({ setActive, setSteps }) => {
  return (
    <form  action={()=>{
      
    }} 
    className="max-w-[643px] mx-auto px-2 md:px-0 text-lightgray-953 pb-[120px]">
      <ContactInfo />
      <ShippingAddress />
      <ShippingMethod />
      <PaymentMethod />
      <div className="">
        <button
          type="button"
          className="w-full rounded-[10px] px-10 py-3 bg-primarypurple-950 font-medium text-sm leading-7 text-center text-white outline-primarypurple-950"
          onClick={() => {
            setActive("Order complete!");
            setSteps((prevSteps) =>
              prevSteps.map((step) => {
                if (step.number === 2) return { ...step, isComplete: true };
                if (step.number === 3) return { ...step, end: true };
                return step;
              })
            );
          }}
        >
          Proceed to pay
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
