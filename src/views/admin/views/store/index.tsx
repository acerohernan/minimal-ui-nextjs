import Link from "next/link";
import useTranslation from "../../../../i18n/useTranslation";
import StoreDesign from "./design";
import StoreDomain from "./domain";
import StoreInfoForm from "./information";

const AdminStoreView = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <span className="font-medium text-2xl dark:text-white">
          {t("Store")}
        </span>
        <div className="flex items-center gap-5 mt-3">
          <Link
            href="/admin"
            className="text-sm dark:text-white hover:underline"
          >
            {t("Administrator")}
          </Link>
          <div className="w-1 h-1 bg-slate-400 dark:bg-slate-50 rounded-full" />
          <span className="text-sm text-slate-400">{t("Store")}</span>
        </div>
      </div>
      <div className="grid gap-4 mt-4">
        <StoreDesign />
        <div className="grid xl:grid-cols-2 gap-4">
          <StoreInfoForm />
          <StoreDomain />
        </div>
      </div>
    </div>
  );
};

export default AdminStoreView;
