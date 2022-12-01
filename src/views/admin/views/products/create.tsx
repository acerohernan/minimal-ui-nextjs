import AdminProductForm from "./components/form";

const AdminProductsCreate = () => {
  return (
    <AdminProductForm
      product={{
        name: "",
        id: "",
        category_id: null,
        description: "",
        offer_price: "",
        price: "",
        sku: "",
        stock: 10,
        variants: [],
      }}
    />
  );
};

export default AdminProductsCreate;
