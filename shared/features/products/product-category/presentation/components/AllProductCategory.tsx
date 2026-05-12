'use client';
import DataTable from '@/components/custom-components/table/data-table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import DatalistHeader from '@/components/custom-components/data-list-header';
import { ProductCategoryColumns } from '../columns/ProductCategoryColumns';
import CreateProductCategoryForm from './CreateProductCategoryForm';
import { useAllProductCategoryHandler } from '../hooks/useAllProductCategoryHandler';

const AllProductCategory = () => {
  const {
    ProductCategory,
    open,
    setOpen,
    editingProductCategory,
    handleEdit,
    handleAdd,
  } = useAllProductCategoryHandler();

  return (
    <>
      <DatalistHeader title="Category" handleAdd={handleAdd} />

      <DataTable
        columns={ProductCategoryColumns(handleEdit)}
        data={ProductCategory}
      />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingProductCategory ? 'Edit Category' : 'Add New Category'}
            </DialogTitle>
            <DialogDescription>
              {editingProductCategory
                ? 'Update the details of this product category.'
                : 'Fill in the information to create a new product category.'}
            </DialogDescription>
          </DialogHeader>

          <CreateProductCategoryForm
            initialValues={editingProductCategory || undefined}
            onClose={() => setOpen(false)}
            ProductCategory={ProductCategory}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllProductCategory;
