import { z } from 'zod';

export const branchTimingItemschema = z.object({
  id: z.string().optional(),
  daysOfWeek: z
    .number()
    .int('Days of week must be an integer')
    .min(0, 'Days of week cannot be less than 0')
    .max(6, 'Days of week cannot be more than 6'), // 0=Sunday, 6=Saturday

  startTime: z
    .string()
    .min(1, 'Start time is required')
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Start time must be in HH:mm format'),

  endTime: z
    .string()
    .min(1, 'End time is required')
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'End time must be in HH:mm format'),
});

export const branchTimingSchema = z.object({
  branchId: z.string().uuid('Branch is required'),
  data: z
    .array(branchTimingItemschema)
    .min(1, 'At least one schedule is required'),
});

//create
export const creatBranchTimingschema = branchTimingSchema;

//update
export const updateBranchTimingSchema = z.object({
  branchId: z.string().uuid('Branch is required'),

  data: z.array(
    branchTimingItemschema.extend({
      id: z.string().min(1, 'ID is required for update'),
    })
  ),
});

export type BranchTimingFormValues = z.infer<typeof branchTimingSchema>;
