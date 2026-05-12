'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { Combobox } from '@/components/custom-components/combobox';
import { Icons } from '@/shared/icons';
import { AppTooltip } from '@/components/custom-components/tooltip-app';
import { Form } from '@/components/ui/form';
import { dayItems } from '@/lib/dayItems';
import { DeleteAlert } from '@/components/custom-components/delete-alert';
import { useBranchTimingForm } from '../../domain/branchTiming.form';
import { useBranchTimingFormHandler } from '../hooks/useBranchTimingFormHandler';

interface BranchTimingFormProps {
  // open: boolean;
  // setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedHospital: any;
}
export const BranchTimingForm = ({
  selectedHospital,
}: BranchTimingFormProps) => {
  const {
    open,
    setOpen,
    onSubmit,
    removeScheduleFromBackend,
    loading,
    branchTimingData,
  } = useBranchTimingFormHandler(selectedHospital);

  const form = useBranchTimingForm(
    selectedHospital,
    branchTimingData,
    removeScheduleFromBackend
  );
  const { handleSubmit, formState, fields, addSchedule, removeSchedule } = form;

  const handleRemove = async (index: number) => {
    removeSchedule(index);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <AppTooltip content="Add Branch Schedule">
        <DialogTrigger asChild>
          <Button variant="outline" size="icon" className="h-6">
            <Icons.Calendar />
          </Button>
        </DialogTrigger>
      </AppTooltip>

      <DialogContent className="max-w-2xl">
        <DialogHeader className="flex">
          <DialogTitle className="text-primary">
            {selectedHospital?.name}{' '}
          </DialogTitle>
        </DialogHeader>

        {/* Add Button */}
        <div className="flex justify-end">
          <Button
            variant="outline"
            type="button"
            size={'sm'}
            onClick={addSchedule}
            disabled={fields.length > 6} // limit
          >
            + Add Schedule
          </Button>
        </div>

        <Form {...form}>
          <form
            className="space-y-4 max-h-[60vh] overflow-y-auto pr-1"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Schedule Rows */}
            <div className="space-y-3">
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="border rounded-lg p-3 space-y-2 bg-muted/30"
                >
                  <div className="grid grid-cols-3 gap-2">
                    <Combobox
                      items={dayItems}
                      form={form}
                      name={`data.${index}.daysOfWeek`}
                      label="Day"
                    />

                    <FloatingLabelFormInput
                      form={form}
                      name={`data.${index}.startTime`}
                      label="Start"
                      type="time"
                    />

                    <FloatingLabelFormInput
                      form={form}
                      name={`data.${index}.endTime`}
                      label="End"
                      type="time"
                    />
                  </div>

                  {/* Remove Button */}
                  <div className="flex justify-end">
                    <DeleteAlert
                      onClick={() => handleRemove(index)}
                      icon={Icons.X}
                      disabled={fields.length == 1}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Actions */}
            <div className="flex justify-end gap-2 pt-2 border-t">
              <Button
                type="submit"
                size={'sm'}
                disabled={!formState.isValid || loading}
              >
                {loading ? 'Saving...' : 'Save'}
              </Button>
              <Button
                variant="outline"
                type="button"
                size={'sm'}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
