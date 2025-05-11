import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import { customers } from "@/db/schema"

export const insertCustomerSchema = createInsertSchema(customers, {
    firstName: (firstName) => firstName.min(1, "First name is required"),
    lastName: (lastName) => lastName.min(1, "Last name is required"),
    address1: (address1) => address1.min(1, "Address is required"),
    city: (city) => city.min(1, "City is required"),
    state: (state) => state.length(2, "State must be exactly 2 characters"),
    email: (email) => email.email("Invalid email address"),
    zip: (zip) => zip.regex(/^\d{5}(-\d{4})?$/, "Invalid Zip code. Use 5 digits or 5 digits followed by a hyphen and 4 digits"),
    phone: (phone) => phone.regex(/^\d{3}-\d{3}-\d{4}$/, "Invalid phone number format. Use XXX-XXX-XXXX"),
})

export const selectCustomerSchema = createSelectSchema(customers)

export type insertCustomerSchemaType = typeof insertCustomerSchema._type

export type selectCustomerSchemaType = typeof selectCustomerSchema._type 