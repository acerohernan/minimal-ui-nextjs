import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import useSWRImmutable from "swr/immutable";
import useTranslation from "../../../../i18n/useTranslation";
import ProductCard from "./components/card";
import AdminProductSkeleton from "./components/skeleton";
import { useAdminProductsContext } from "./context";

const AdminProductsView = () => {
  const {
    actions: { getAllProducts },
    state: {
      products,
      metadata: { page, has_next_page, has_previous_page },
    },
  } = useAdminProductsContext();

  useSWRImmutable("product/all", getAllProducts, {
    onSuccess: () => {
      setProductsLoaded(true);
    },
  });

  const { t } = useTranslation();
  const [productsLoaded, setProductsLoaded] = useState(false);

  return (
    <div>
      <div>
        <span className="font-medium text-2xl dark:text-white">
          {t("Products")}
        </span>
        <div className="flex items-center gap-5 mt-3">
          <Link
            href="/admin"
            className="text-sm dark:text-white hover:underline"
          >
            {t("Administrator")}
          </Link>
          <div className="w-1 h-1 bg-slate-400 dark:bg-slate-50 rounded-full" />
          <span className="text-sm text-slate-400">{t("Products")}</span>
        </div>
      </div>
      {productsLoaded && products ? (
        <div>
          <div className="flex justify-end mt-4 lg:mt-14 mb-2">
            <Link className="button flex text-sm" href="/admin/products/create">
              Create Product
              <PlusIcon className="w-5 h-5 block ml-1" />
            </Link>
          </div>
          <div className="card w-full grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
          <div className="card w-48 h-16 mx-auto mt-6 flex items-center justify-center">
            <button
              className="icon-button cursor-pointer"
              disabled={!has_previous_page}
            >
              <ChevronLeftIcon className="icon" />
            </button>
            <span className="block mx-7">{page}</span>
            <button className="icon-button" disabled={!has_next_page}>
              <ChevronRightIcon className="icon" />
            </button>
          </div>
        </div>
      ) : null}
      {!productsLoaded && <AdminProductSkeleton />}
    </div>
  );
};

export default AdminProductsView;
