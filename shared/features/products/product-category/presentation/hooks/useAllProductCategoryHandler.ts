import { useState } from 'react';
import { useGetProductCategory } from '../../application/usecases/useGetProductCategory';
import { TableRowProductCategoryDto } from '../../domain/productCategory.dto';
import { mapProductCategoryDtoToTable } from '../../application/mapper/mapDtoToTable';

export const useAllProductCategoryHandler = () => {
  const [open, setOpen] = useState(false);
  const [editingProductCategory, setEditingProductCategory] =
    useState<TableRowProductCategoryDto | null>(null);

  const { data } = useGetProductCategory();

  const ProductCategory = Array.isArray(data?.data)
    ? data.data.map(mapProductCategoryDtoToTable)
    : [];

  const handleEdit = (ProductCategoryAttribute: TableRowProductCategoryDto) => {
    setEditingProductCategory(ProductCategoryAttribute);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingProductCategory(null); // reset form for adding
    setOpen(true);
  };

  return {
    ProductCategory,
    open,
    setOpen,
    editingProductCategory,
    handleEdit,
    handleAdd,
  };
};
