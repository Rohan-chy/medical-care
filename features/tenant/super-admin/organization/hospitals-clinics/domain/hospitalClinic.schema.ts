import { z } from 'zod';

export const hospitalClinicSchema = z.object({
  id: z.string().optional(),

  name: z.string().min(1, 'Name is required'),
  location: z.string().min(1, 'Location is required'),
  type: z.string().optional(),

  pan: z.string().optional(),
  contactNo: z.string().regex(/^\d{10}$/, 'Must be 10 digits'),

  manager: z.string().optional(),
  registrationNumber: z.string().optional(),
  registrationDate: z.string().nullable().optional(),

  longitude: z.number().optional(),
  latitude: z.number().optional(),

  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type HospitalClinicFormValues = z.infer<typeof hospitalClinicSchema>;
