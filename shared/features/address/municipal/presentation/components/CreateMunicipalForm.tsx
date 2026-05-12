'use client';

import { Form } from '@/components/ui/form';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import { FormCheckbox } from '@/components/extended/FormCheckbox';
import { Combobox } from '@/components/custom-components/combobox';
import { addressOptions } from '@/shared/optionsData/addressOptions';
import { useMunicipalFormHandler } from '../hooks/useMunicipalFormHandler';
import { useMunicipalForm } from '../../domain/municipal.form';
import { TableRowMunicipalDto } from '../../domain/municipal.dto';

interface MunicipalFormProps {
  initialValues?: TableRowMunicipalDto;
  onClose?: () => void;
}

export default function CreateMunicipalForm({
  initialValues,
  onClose,
}: MunicipalFormProps) {
  const form = useMunicipalForm(initialValues);

  const { submitMunicipal, loading, handleClear, district } =
    useMunicipalFormHandler({
      onSuccess: onClose,
      form,
    });

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitMunicipal)}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-4">
              <Combobox
                items={addressOptions(district?.data) || []}
                form={form}
                name="districtId"
                label="District"
              />
              <FloatingLabelFormInput
                form={form}
                type="text"
                name="name"
                label="Municipal Name"
              />
              <FloatingLabelFormInput
                form={form}
                type="text"
                name="type"
                label="Municipal Type"
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
