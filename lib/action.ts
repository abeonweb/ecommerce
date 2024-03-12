"use server";
import { z } from "zod";

const checkoutFormSchema = z.object({
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  phonenumber: z.string().optional(),
  email: z.string().optional(),
  address: z.string(),
  country: z.string(),
  town: z.string(),
  state: z.string().optional(),
  zipcode: z.string().optional()

});
// Checkout form
// get access to formData
export async function sendPurchaseOrder(purchaseOrder: unknown) {
  const result = checkoutFormSchema.safeParse(purchaseOrder)

  if(!result.success){
    console.error("ERROR",result.error);
  }
  else{
    // send info to backend
    console.log(result.data)
  }
}
