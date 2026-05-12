'use client';
import DataTable from '@/components/custom-components/table/data-table';
import { useGetApprovedRequest } from '../../application/usecases/useGetApprovedRequest';
import { approvedRequestsColumns } from '../columns/approvedRequestsColumn';

const ApprovedRequests = () => {
  const { data: approvedRequests } = useGetApprovedRequest();
  return (
    <>
      <DataTable
        columns={approvedRequestsColumns()}
        data={approvedRequests?.data || []}
      />
    </>
  );
};

export default ApprovedRequests;
