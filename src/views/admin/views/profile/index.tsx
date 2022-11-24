import Link from "next/link";
import useTranslation from "../../../../i18n/useTranslation";
import ProfileBilling from "./billing";
import ProfileInfoForm from "./information";

const AdminProfileView = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <span className="font-medium text-2xl dark:text-white">
          {t("Profile")}
        </span>
        <div className="flex items-center gap-5 mt-3">
          <Link
            href="/admin"
            className="text-sm dark:text-white hover:underline"
          >
            {t("Administrator")}
          </Link>
          <div className="w-1 h-1 bg-slate-400 dark:bg-slate-50 rounded-full" />
          <span className="text-sm text-slate-400">{t("Profile")}</span>
        </div>
      </div>
      <div className="grid gap-4 mt-4 lg:mt-14">
        <ProfileInfoForm />
        <ProfileBilling />
      </div>
    </div>
  );
};

export default AdminProfileView;
