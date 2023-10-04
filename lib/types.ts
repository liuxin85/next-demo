import { z } from "zod";
import { checkoutFormSchema } from "./validations";

export type checkoutForm = z.infer<typeof checkoutFormSchema>