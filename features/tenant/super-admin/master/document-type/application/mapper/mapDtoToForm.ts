import { DocumentTypeResponseItemDto } from '../../domain/documentType.dto';
import { DocumentTypeFormValues } from '../../domain/documentType.schema';

export const mapDocumentTypeToForm = (
  data: DocumentTypeResponseItemDto
): DocumentTypeFormValues => {
  return {
    id: data.id,
    name: data.name,
    documentType: data.documentType,
  };
};
