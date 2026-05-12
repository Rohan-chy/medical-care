'use client';

import { Form } from '@/components/ui/form';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import { FormCheckbox } from '@/components/extended/FormCheckbox';
import { useCountryFormHandler } from '../hooks/useCountryFormHandler';
import { useCountryForm } from '../../domain/country.form';
import { TableRowCountryDto } from '../../domain/country.dto';

interface CountryFormProps {
  initialValues?: TableRowCountryDto;
  onClose?: () => void;
}

export default function CountryForm({
  initialValues,
  onClose,
}: CountryFormProps) {
  const form = useCountryForm({ initialValues });

  const { submitCountry, loading, handleClear } = useCountryFormHandler({
    onSuccess: onClose,
    form,
  });

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitCountry)}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-4">
              <FloatingLabelFormInput
                form={form}
                type="text"
                name="name"
                label="Country Name"
              />

              <FloatingLabelFormInput
                form={form}
                type="text"
                name="code"
                label="Country Code"
              />

              <FloatingLabelFormInput
                form={form}
                type="text"
                name="dialingCode"
                label="Dialing Code"
              />

              <FloatingLabelFormInput
                form={form}
                type="number"
                name="sortingId"
                label="Sorting ID"
              />

              <FormCheckbox form={form} name="isActive" label="Active" />
            </div>

            <div className="flex justify-end gap-2">
              {/* SUBMIT BUTTON */}
              <CustomButton type="submit" size="sm" disabled={loading}>
                {initialValues ? 'Update' : 'Save'}
              </CustomButton>

              {/* CLEAR BUTTON */}
              <CustomButton
                type="button"
                variant="outline"
                size="sm"
                disabled={loading}
                onClick={handleClear}
              >
                Clear
              </CustomButton>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
