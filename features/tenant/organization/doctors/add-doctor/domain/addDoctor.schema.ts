import { z } from 'zod';

export const baseAddDoctorSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Title is required'),

  firstName: z.string().min(1, 'First name is required'),

  middleName: z.string().optional(),

  lastName: z.string().min(1, 'Last name is required'),

  gender: z.number().min(0, 'Gender is required'),

  countryCode: z.string().min(1, 'Country code is required'),

  contactNumber: z
    .string()
    .regex(/^\d{10}$/, 'Contact number must be 10 digits'),
});

//create schema
export const createAddDoctorSchema = baseAddDoctorSchema.extend({
  email: z.string().email('Invalid email'),

  userName: z.string().min(3, 'Username must be at least 3 characters'),

  password: z.string().min(6, 'Password must be at least 6 characters'),
});

//update schema
export const updateDoctorSchema = baseAddDoctorSchema.extend({
  id: z.string(),
  dateOfBirth: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: 'Invalid date',
    })
    .refine(
      (date) => {
        const birthDate = new Date(date);
        const today = new Date();

        const age =
          today.getFullYear() -
          birthDate.getFullYear() -
          (today <
          new Date(
            today.getFullYear(),
            birthDate.getMonth(),
            birthDate.getDate()
          )
            ? 1
            : 0);

        return age >= 18;
      },
      {
        message: 'Doctor must be at least 18 years old',
      }
    ),

  dateOfBirthNp: z.string().min(1, 'Date of Birth (NP) is required'),
});

export type AddDoctorFormValues = z.infer<typeof createAddDoctorSchema>;
export type UpdateDoctorFormValues = z.infer<typeof updateDoctorSchema>;
