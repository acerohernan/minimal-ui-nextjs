import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { API } from "../../../api";
import AdminLayout from "../../../views/admin/components/layout";
import { AdminProductProvider } from "../../../views/admin/views/products/context";
import { IProduct } from "../../../views/admin/views/products/context/types";
import AdminProductInformationView from "../../../views/admin/views/products/information";

const AdminProductInformation = ({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <AdminLayout>
      <AdminProductProvider>
        <AdminProductInformationView product={product} />
      </AdminProductProvider>
    </AdminLayout>
  );
};

export default AdminProductInformation;

export const getServerSideProps: GetServerSideProps<{
  product: IProduct;
}> = async ({ query }) => {
  try {
    const id = query.id;
    const response = await API.product.getProduct(id as string);
    const product: IProduct = response.data.product;

    return {
      props: {
        product,
      },
    };
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/admin/products",
      },
    };
  }
};
