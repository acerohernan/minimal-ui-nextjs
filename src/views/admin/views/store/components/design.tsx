import ImageInput from "../../../../../components/form/image";
import useTranslation from "../../../../../i18n/useTranslation";

const StoreDesign = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full card">
      <div className="mt-4 p-6 grid lg:grid-cols-[1fr_2fr] items-start  max-w-4xl mx-auto lg:gap-8">
        <div className=" flex items-center justify-center flex-col">
          <div className="block w-40 text-start label mb-2">{t("Logo")}</div>
          <ImageInput
            id="logo"
            width={180}
            height={160}
            className="h-40 w-40"
            rounded="rounded-lg"
            onChange={(file) => {}}
          />
          <span className="mt-4 text-sm text-center label">
            {t("Allowed *.jpeg, *.jpg, *.png, *.gif")}
          </span>
          <span className="text-sm label">{t("Max size of 3.1 MB")}</span>
        </div>
        <div className=" flex items-center justify-center flex-col ">
          <div className="block w-full text-start label mb-2 max-w-lg">
            {t("Banner")}
          </div>
          <ImageInput
            id="banner"
            width={500}
            height={160}
            className="h-24 sm:h-40 w-full max-w-lg"
            rounded="rounded-lg"
            onChange={(file) => {}}
          />
          <span className="mt-4 text-sm label">
            {t("Recommended (1000x300)")}
          </span>
          <span className="text-sm label">{t("Max size of 3.1 MB")}</span>
        </div>
      </div>
      <div className="flex justify-end mt-0 m-6">
        <button className="button text-sm" type="submit">
          {t("Save Changes")}
        </button>
      </div>
    </div>
  );
};

export default StoreDesign;
