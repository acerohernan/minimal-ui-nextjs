import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { IStore } from "../../views/admin/views/store/context/types";
import StoreNotFoundView from "../../views/store/views/notFound";

const StorePage = ({
  store,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!store) return <StoreNotFoundView />;

  return <div>StorePage</div>;
};

export default StorePage;

export const getServerSideProps: GetServerSideProps<{
  store: IStore | null;
}> = async () => {
  return {
    props: {
      store: null,
    },
  };
};
