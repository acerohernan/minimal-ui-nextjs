import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { API } from "../../api";
import StoreView from "../../views/store/indext";
import { IStore } from "../../views/store/types";
import StoreNotFoundView from "../../views/store/views/notFound";

const Store = ({
  store,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!store) return <StoreNotFoundView />;

  return <StoreView store={store} />;
};

export default Store;

export const getServerSideProps: GetServerSideProps<{
  store: IStore | null;
}> = async (ctx) => {
  try {
    const { domain } = ctx.query;

    if (!domain || typeof domain !== "string") throw new Error();

    const response = await API.store.getStoreByDomain(domain);
    const store = response.data.store;

    return {
      props: {
        store,
      },
    };
  } catch (err) {
    return {
      props: {
        store: null,
      },
    };
  }
};
