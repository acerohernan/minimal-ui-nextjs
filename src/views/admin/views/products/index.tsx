import Link from "next/link";
import useTranslation from "../../../../i18n/useTranslation";
import ProductCard from "./card";

const AdminProductsView = () => {
  const { t } = useTranslation();

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
      <div className="card w-full mt-4 lg:mt-14 grid grid-cols-2 gap-4 p-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default AdminProductsView;
