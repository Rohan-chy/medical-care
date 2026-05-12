import TableUpdateDeleteActions from '@/shared/components/tables/TableUpdateDeleteActions';
import { useDeleteCountry } from '../../application/usecases/useDeleteCountry';
import { TableRowCountryDto } from '../../domain/country.dto';

const CountryActionButtons = ({
  data,
  handleEdit,
}: {
  data: TableRowCountryDto;
  handleEdit: (data: TableRowCountryDto) => void;
}) => {
  const { mutate: deleteCountry, isPending: deletePending } =
    useDeleteCountry();

  return (
    <TableUpdateDeleteActions
      data={data}
      onEdit={handleEdit}
      onDelete={(row) => deleteCountry({ id: String(row.id) })}
      disableDelete={deletePending}
      loading={deletePending}
    />
  );
};

export default CountryActionButtons;
