import { Form } from '@/components/ui/form';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import { useAddDoctorForm } from '../../domain/form/addDoctor.form';
import { useDoctorFormHandler } from '../hooks/useDoctorFormHandler';
import { genderOptions } from '@/lib/genderItems';
import { Combobox } from '@/components/custom-components/combobox';
import { optionsConverter } from '@/lib/optionsConverter';

interface UserFormProps {
  onClose?: () => void;
}

const AddDoctorForm = ({ onClose }: UserFormProps) => {
  const form = useAddDoctorForm();
  const { onSubmit, loading, salutationData } = useDoctorFormHandler({
    onClose,
  });

  return (
    <div className="flex justify-center">
      <div className="w-full rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
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
                    isRequired
                  />
                </div>

                <div className="flex-1">
                  <FloatingLabelFormInput
                    form={form}
                    name="firstName"
                    label="First Name"
                    isRequired
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
                isRequired
              />
              <Combobox
                items={genderOptions || []}
                form={form}
                name="gender"
                label="Gender"
                isRequired
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
                    isRequired
                  />
                </div>
              </div>

              <FloatingLabelFormInput
                form={form}
                type="email"
                name="email"
                label="Email"
                isRequired
              />

              <div className="flex-1">
                <FloatingLabelFormInput
                  form={form}
                  name="userName"
                  label="Username"
                  isRequired
                />
              </div>

              <FloatingLabelFormInput
                form={form}
                name="password"
                type="password"
                label="Password"
                isRequired
              />
            </div>

            <div className="flex justify-end gap-2">
              <CustomButton
                type="submit"
                size={'sm'}
                disabled={!form.formState.isValid || loading}
              >
                Save
              </CustomButton>
              <CustomButton
                type="button"
                variant={'outline'}
                size={'sm'}
                disabled={loading}
                onClick={() => form.reset()}
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

export default AddDoctorForm;
