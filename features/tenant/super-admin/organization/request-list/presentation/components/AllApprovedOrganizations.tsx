'use client';
import DataTable from '@/components/custom-components/table/data-table';
import { tenantRequestColumns } from '../columns/tenantRequestColumns';
import { useGetApprovedTenant } from '../../application/usecases/useGetApprovedTenant';

interface props {
  handleEdit: any;
}

const AllApprovedOrganizations = ({ handleEdit }: props) => {
  const { data } = useGetApprovedTenant();
  const approvedOrganizations = data?.data;

  return (
    <>
      <DataTable
        columns={tenantRequestColumns({ handleEdit })}
        data={approvedOrganizations || []}
      />
    </>
  );
};

export default AllApprovedOrganizations;
