import z from 'zod';

export const ScheduleSchema = z
  .object({
    id: z.string().optional(),

    doctorId: z.string().uuid('Invalid doctor ID'),

    clinicId: z.string().uuid('Invalid clinic ID'),
    branchId: z.string().uuid('Invalid clinic ID'),

    scheduleDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, 'Schedule date must be YYYY-MM-DD'),

    scheduleTimeFrom: z.string(),

    scheduleTimeTo: z.string(),

    maxPatientCap: z
      .number()
      .int('Patient cap must be an integer')
      .min(1, 'Patient cap must be at least 1'),

    quotedFee: z.number().min(0, 'Quoted fee cannot be negative'),
    isApproved: z.boolean().optional(),
  })
  .refine((data) => data.scheduleTimeFrom < data.scheduleTimeTo, {
    message: 'End time must be later than start time',
    path: ['scheduleTimeTo'],
  });

export const addScheduleSchema = ScheduleSchema;

export type AddScheduleFormValues = z.infer<typeof addScheduleSchema>;
