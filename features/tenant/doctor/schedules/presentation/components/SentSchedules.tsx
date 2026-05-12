import DataTable from '@/components/custom-components/table/data-table';
import { DoctorScheduleColumns } from '../columns/schedulesColumns';
import { useGetDoctorOutgoingSchedule } from '../../application/usecases/useGetOutgoingSchedules';
import { mapDtoToForm } from '../../application/mapper/mapDtoToTable';

const SentSchedules = ({ handleEdit }: any) => {
  const { data: outgoingSchedule } = useGetDoctorOutgoingSchedule();
  const outgoingScheduleData = outgoingSchedule?.data;

  const tableData =
    outgoingScheduleData?.map((item) => mapDtoToForm(item)) || [];

  let source = 'outgoing';

  return (
    <>
      <DataTable
        columns={DoctorScheduleColumns(handleEdit, source)}
        data={tableData}
      />
    </>
  );
};

export default SentSchedules;
