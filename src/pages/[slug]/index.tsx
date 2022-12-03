import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { IStore } from "../../views/admin/views/store/context/types";
import StoreView from "../../views/store/indext";

const Store = ({
  store,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  /*  if (!store) return <StoreNotFoundView />;
   */
  return <StoreView />;
};

export default Store;

export const getServerSideProps: GetServerSideProps<{
  store: IStore | null;
}> = async () => {
  return {
    props: {
      store: null,
    },
  };
};
