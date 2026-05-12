import DataTable from '@/components/custom-components/table/data-table';
import { DoctorScheduleColumns } from '../columns/schedulesColumns';
import { useGetDoctorIncomingSchedule } from '../../application/usecases/useGetIncomingSchedules';
import { mapDtoToForm } from '../../application/mapper/mapDtoToTable';

const ReceivedSchedules = ({ handleEdit }: any) => {
  const { data: incomingSchedule } = useGetDoctorIncomingSchedule();
  const incomingScheduleData = incomingSchedule?.data;

  const tableData =
    incomingScheduleData?.map((item) => mapDtoToForm(item)) || [];

  let source = 'incoming';

  return (
    <>
      <DataTable
        columns={DoctorScheduleColumns(handleEdit, source)}
        data={tableData}
      />
    </>
  );
};

export default ReceivedSchedules;
