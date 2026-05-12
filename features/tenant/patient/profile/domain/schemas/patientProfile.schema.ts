import { patientAdditionalInfoSchema } from './patientAdditionalInfo.schema';
import { patientBasicInfoSchema } from './patientBasicInfo.schema';
import { patientContactAndAddressInfoSchema } from './patientContactAndAddressInfo.schema';
import { patientProfileImageSchema } from './patientProfileImage.schema';
import { patientRelativesSchema } from './patientRelatives.schema';

export const patientProfileSchema = patientBasicInfoSchema
  .merge(patientContactAndAddressInfoSchema)
  .merge(patientAdditionalInfoSchema)
  .merge(patientRelativesSchema)
  .merge(patientProfileImageSchema);
