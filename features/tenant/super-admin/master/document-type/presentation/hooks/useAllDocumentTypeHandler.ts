import { useState } from 'react';
import { useGetDocumentType } from '../../application/usecases/useGetDocumentType';
import { DocumentTypeResponseItemDto } from '../../domain/documentType.dto';
import { mapDocumentTypeDtoToTable } from '../../application/mapper/mapDtoToTable';

export const useAllDocumentTypeHandler = () => {
  const [open, setOpen] = useState(false);
  const [editingDocumentType, setEditingDocumentType] =
    useState<DocumentTypeResponseItemDto | null>(null);

  const { data } = useGetDocumentType();

  const DocumentTypes = data?.data?.map(mapDocumentTypeDtoToTable) || [];

  const handleEdit = (DocumentType: DocumentTypeResponseItemDto) => {
    setEditingDocumentType(DocumentType);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingDocumentType(null); // reset form for adding
    setOpen(true);
  };

  return {
    DocumentTypes,
    open,
    setOpen,
    editingDocumentType,
    handleEdit,
    handleAdd,
  };
};
