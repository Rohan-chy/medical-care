import z from 'zod';

export const DoctorScheduleSchema = z.object({
  id: z.string().optional(),

  clinicId: z.string().uuid('Clinic is required'),
  doctorId: z.string().optional(),

  branchId: z.string().uuid('Branch is required'),

  scheduleDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date',
  }),

  scheduleTimeFrom: z.string().min(1, 'Start time is required'),

  scheduleTimeTo: z.string().min(1, 'End time is required'),

  maxPatientCap: z
    .number()
    .int('Must be an integer')
    .nonnegative('Must be >= 0'),

  quotedFee: z.number().nonnegative('Must be >= 0'),
  isApproved: z.boolean().optional(),
});

export const createDoctorScheduleSchema = DoctorScheduleSchema;

export const updateDoctorScheduleSchema = DoctorScheduleSchema.extend({
  id: z.string(),
});

export type DoctorScheduleFormData = z.infer<typeof DoctorScheduleSchema>;
