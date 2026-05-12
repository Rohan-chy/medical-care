import { Form } from '@/components/ui/form';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import { ResponseAddDoctorItemDto } from '../../domain/addDoctor.dto';
import { useDoctorFormHandler } from '../hooks/useDoctorFormHandler';
import { genderItems } from '@/lib/genderItems';
import { Combobox } from '@/components/custom-components/combobox';
import { optionsConverter } from '@/lib/optionsConverter';
import { useUpdateDoctorForm } from '../../domain/form/updateDoctor.form';
import { NepaliDatePickerField } from '@/components/custom-components/nepali-date-picker-field';
import { useDebouncedDateConverter } from '@/lib/useDateConverter';

interface UserFormProps {
  initialValues?: ResponseAddDoctorItemDto;
  onClose?: () => void;
}

const UpdateDoctorForm = ({ initialValues, onClose }: UserFormProps) => {
  const form = useUpdateDoctorForm(initialValues);
  const { watch, setValue } = form;

  useDebouncedDateConverter(watch, setValue, 300);
  const { onUpdateSubmit, loading, salutationData } = useDoctorFormHandler({
    onClose,
  });

  return (
    <div className="flex justify-center">
      <div className="w-full rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onUpdateSubmit)}
            className="space-y-5 sm:space-y-6"
          >
            <div className="grid grid-cols-1 items-end gap-4">
              <div className="flex gap-3">
                <div className="w-20 sm:w-26">
                  <Combobox
                    form={form}
                    items={
                      optionsConverter(
                        salutationData,
                        (d) => d.name,
                        (d) => d.name
                      ) || []
                    }
                    name="title"
                    label="Salutations"
                  />
                </div>

                <div className="flex-1">
                  <FloatingLabelFormInput
                    form={form}
                    name="firstName"
                    label="First Name"
                  />
                </div>
              </div>
              <FloatingLabelFormInput
                form={form}
                name="middleName"
                label="Middle Name"
              />
              <FloatingLabelFormInput
                form={form}
                name="lastName"
                label="Last Name"
              />
              <Combobox
                items={genderItems || []}
                form={form}
                name="gender"
                label="Gender"
              />

              <FloatingLabelFormInput
                form={form}
                name="dateOfBirth"
                type="date"
                label="Date of Birth"
              />

              <NepaliDatePickerField
                form={form}
                name="dateOfBirthNp"
                label="Date of Birth (NP)"
              />

              <div className="flex gap-3">
                <div className="w-20 sm:w-26">
                  <FloatingLabelFormInput
                    form={form}
                    name="countryCode"
                    label="Code"
                    disabled
                  />
                </div>

                <div className="flex-1">
                  <FloatingLabelFormInput
                    form={form}
                    name="contactNumber"
                    label="Mobile Number"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <CustomButton
                type="submit"
                size={'sm'}
                disabled={!form.formState.isValid || loading}
              >
                {initialValues ? 'Update' : 'Save'}
              </CustomButton>
              <CustomButton
                type="button"
                variant={'outline'}
                size={'sm'}
                disabled={loading}
                onClick={() => form.reset(initialValues || undefined)}
              >
                Clear
              </CustomButton>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UpdateDoctorForm;
