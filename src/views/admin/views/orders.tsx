import Link from "next/link";
import useTranslation from "../../../i18n/useTranslation";

const AdminOrdersView = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <span className="font-medium text-2xl dark:text-white">
          {t("Orders")}
        </span>
        <div className="flex items-center gap-5 mt-3">
          <Link href="/admin" className="text-sm text-white hover:underline">
            {t("Administrator")}
          </Link>
          <div className="w-1 h-1 bg-slate-50 rounded-full" />
          <span className="text-sm">{t("Orders")}</span>
        </div>
      </div>
    </div>
  );
};

export default AdminOrdersView;
