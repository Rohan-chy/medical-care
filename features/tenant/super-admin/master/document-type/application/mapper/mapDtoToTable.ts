import {
  DocumentTypeResponseItemDto,
  TableRowDocumentType,
} from '../../domain/documentType.dto';

export const mapDocumentTypeDtoToTable = (
  data: DocumentTypeResponseItemDto
): TableRowDocumentType => {
  return {
    id: data.id,
    name: data.name,
    documentType: data.documentType,
  };
};
