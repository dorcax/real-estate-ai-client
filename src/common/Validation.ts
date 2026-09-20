import { z } from "zod";

export const onboardingSchema = z.object({
  name: z.string().min(6, "Company name is required"),

  email: z.email("Enter a valid email"),
  phoneNumber: z.string().min(11, "phone number required").max(11),

  

  description: z.string().min(10, "Description must be at least 10 characters"),
  address: z.string().min(15, "address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
  timezone: z.string().min(1, "Time zone is required"),
  currency: z.string().min(1, "Currency is required"),
  //   team: z.array(
  //     z.object({
  //       email: z.email(),
  //       role: z.string(),
  //     }),
  //   ),
});

export type OnboardingFormData = z.infer<typeof onboardingSchema>;
