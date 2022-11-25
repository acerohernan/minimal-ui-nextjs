import AdminLayout from "../../../views/admin/components/layout";
import AdminProductsCreate from "../../../views/admin/views/products/create";

const AdminProducts = () => {
  return (
    <AdminLayout>
      <AdminProductsCreate />
    </AdminLayout>
  );
};

export default AdminProducts;
