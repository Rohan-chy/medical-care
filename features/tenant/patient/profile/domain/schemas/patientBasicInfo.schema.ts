import { z } from 'zod';

export const patientBasicInfoSchema = z.object({
  id: z.string().optional(),

  title: z.string().min(1, 'Title is required'),
  firstName: z.string().min(1, 'firstName is required'),
  middleName: z.string().optional(),
  lastName: z.string().min(1, 'lastName is required'),

  gender: z.number(),

  dateOfBirth: z.string().optional(),

  dateOfBirthNp: z.string().optional(),

  email: z.string().min(1, 'Email is required').email('Invalid email address'),
});

export type PatientBasicInfoFormValues = z.infer<typeof patientBasicInfoSchema>;
