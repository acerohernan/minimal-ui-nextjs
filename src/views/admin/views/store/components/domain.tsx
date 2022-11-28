import TextInput from "../../../../../components/form/text";
import useTranslation from "../../../../../i18n/useTranslation";

const StoreDomain = () => {
  const { t } = useTranslation();

  return (
    <div className="card w-full p-6" style={{ maxHeight: "255px" }}>
      <span className="label block mb-2">{t("Update your domain")}</span>
      <div className="grid grid-cols-[120px_1fr] items-center gap-2 w-full">
        <span className="p-3">mitienda.com/</span>
        <TextInput className="w-full" />
      </div>
      <span className="block label mt-4">
        {t(
          "We provide you with a MiTienda subdomain. It is personalized with the name of your brand. (Maximum 20 characters)"
        )}
      </span>
      <div className="flex justify-end mt-4">
        <button className="button text-sm">{t("Save Changes")}</button>
      </div>
    </div>
  );
};

export default StoreDomain;
