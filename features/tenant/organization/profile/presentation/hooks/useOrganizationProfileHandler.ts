import { useUpdateOrganizationProfile } from '../../application/usecases/useUpdateOrganizationProfile';
import {
  OrganizationProfileFormValues,
  updateOrganizationProfileSchema,
} from '../../domain/schema/organizationProfile.schema';

export const useOrganizationProfileHandler = () => {
  const { mutateAsync: update, isPending: patchPending } =
    useUpdateOrganizationProfile();

  const onSubmit = async (values: OrganizationProfileFormValues) => {
    try {
      if (values.id) {
        const parsed = updateOrganizationProfileSchema.parse(values);
        await update(parsed);
      }
    } catch (error) {
      console.error('Submit failed', error);
    }
  };

  return {
    onSubmit,
    loading: patchPending,
  };
};
