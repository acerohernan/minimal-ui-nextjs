import AdminProductForm from "./components/form";
import { IProduct } from "./context/types";

interface Props {
  product: IProduct;
}

const AdminProductInformationView: React.FC<Props> = ({ product }) => {
  return <AdminProductForm product={product} />;
};

export default AdminProductInformationView;
