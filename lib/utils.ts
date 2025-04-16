import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export function parseStringify(data: any) {
  return JSON?.parse(JSON?.stringify(data))
}

export const authFormSchema = (type: string) => z.object({
  firstName: type === 'sign-in' ? z.string().optional() : z.string().min(1),
  lastName: type === 'sign-in' ? z.string().optional() : z.string().min(1),
  address1: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  city: type === 'sign-in' ? z.string().optional() : z.string().min(2),
  state: type === 'sign-in' ? z.string().optional() : z.string().min(2).max(2),
  postalCode: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  ssn: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  dateOfBirth: type === 'sign-in' ? z.string().optional() : z.string().min(3),


  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 2 characters.",
  }),
})
