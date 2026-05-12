import z from 'zod';

export const approveRejectSchema = z
  .object({
    doctorClinicAllocationId: z.string().uuid('Invalid ID'),
    cancellationReason: z.string().optional(),
    isApproved: z.boolean().optional(),
  })
  .refine(
    (data) => {
      // If rejecting, message must exist
      if (data.isApproved === false) {
        return !!data.cancellationReason?.trim();
      }
      return true;
    },
    {
      message: 'Reason is required',
      path: ['cancellationReason'],
    }
  );

export type ApproveRejectFormValues = z.infer<typeof approveRejectSchema>;
