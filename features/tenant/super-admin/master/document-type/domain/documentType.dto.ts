export interface baseDocumentType {
  name: string;
  documentType: number; // 0 = certificate, 1 = exp, 2 = training, 3 = research
}

//create dto
export type createDocumentTypeDto = baseDocumentType;

//update dto
export type updateDocumentTypeDto = baseDocumentType & {
  id: string;
  isActive: boolean;
};

// get response
export type DocumentTypeResponseItemDto = baseDocumentType & {
  id: string;
};

export interface DocumentDataDto {
  data: DocumentTypeResponseItemDto[];
}

// table row model dto
export type TableRowDocumentType = baseDocumentType & {
  id: string;
};
