import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import useTranslation from "../../../../i18n/useTranslation";
import ProductCard from "./card";

const AdminProductsView = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);

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
      <div className="card w-full mt-4 lg:mt-14 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="card w-48 h-16 mx-auto mt-6 flex items-center justify-center">
        <button
          className="icon-button"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          <ChevronLeftIcon className="icon" />
        </button>
        <span className="block mx-7">{page}</span>
        <button
          className="icon-button"
          disabled={page === 9}
          onClick={() => setPage(page + 1)}
        >
          <ChevronRightIcon className="icon" />
        </button>
      </div>
    </div>
  );
};

export default AdminProductsView;
