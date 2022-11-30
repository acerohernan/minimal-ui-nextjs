import Link from "next/link";
import useSWRImmutable from "swr/immutable";
import useTranslation from "../../../../i18n/useTranslation";
import StoreDesign from "./components/design";
import StoreDomain from "./components/domain";
import StoreInfoForm from "./components/information";
import AdminStoreSkeleton from "./components/skeleton";
import { useAdminStoreContext } from "./context";

const AdminStoreView = () => {
  const {
    actions: { getInformation },
    state: { store },
  } = useAdminStoreContext();
  const { t } = useTranslation();

  useSWRImmutable("store/information", getInformation, {});

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
      {store ? (
        <div className="grid gap-4 mt-4 lg:mt-14">
          <StoreDesign />
          <div className="grid xl:grid-cols-[2fr_1fr] gap-4">
            <StoreInfoForm />
            <StoreDomain />
          </div>
        </div>
      ) : null}
      {!store && <AdminStoreSkeleton />}
    </div>
  );
};

export default AdminStoreView;
