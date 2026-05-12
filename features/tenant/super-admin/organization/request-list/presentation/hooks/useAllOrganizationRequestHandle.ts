import { useState } from 'react';
import { TenantRequest } from '../../domain/getTenantRequest.schema';

export const useAllOrganizationRequestHandle = () => {
  const [open, setOpen] = useState(false);
  const [selectedTenant, setSelectedTenant] = useState<TenantRequest | null>(
    null
  );

  const handleEdit = (request: TenantRequest) => {
    setSelectedTenant(request);
    setOpen(true);
  };

  return {
    open,
    setOpen,
    selectedTenant,
    handleEdit,
  };
};
