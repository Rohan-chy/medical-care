'use client';
import DataTable from '@/components/custom-components/table/data-table';
import { tenantRequestColumns } from '../columns/tenantRequestColumns';
import { useGetPendingTenantRequests } from '../../application/usecases/useGetPendingTenantRequest';

interface props {
  handleEdit: any;
}

const AllOrganizationRequests = ({ handleEdit }: props) => {
  const { data } = useGetPendingTenantRequests();
  const unverifiedOrganizations = data?.data;

  return (
    <>
      <DataTable
        columns={tenantRequestColumns({ handleEdit })}
        data={unverifiedOrganizations || []}
      />
    </>
  );
};

export default AllOrganizationRequests;
