import { useForm } from "react-hook-form";
import PhoneInput from "../../../../components/form/phone";
import Select from "../../../../components/form/select";
import TextInput from "../../../../components/form/text";
import { onlyNumbersRegex } from "../../../../helpers/regex";
import useTranslation from "../../../../i18n/useTranslation";

interface StoreCategory {
  name: string;
}
const CATEGORIES: StoreCategory[] = [
  { name: "Cerezas y Manzanas" },
  { name: "Pantalones y joggers" },
  { name: "Instrumentos musicales" },
];
interface FormValues {
  name: string;
  phone: string;
  category: string;
  country: string;
  currency: string;
  whatsapp: string;
}

const StoreInfoForm = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  async function onSubmit(data: FormValues) {
    console.log(data);
  }

  console.log(errors);

  return (
    <form className="w-full card p-6 " onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-5 md:grid-cols-2">
        <TextInput
          label={t("Store Name")}
          full={true}
          error={errors.name?.message}
          inputProps={{
            placeholder: "MiTienda",
            ...register("name", {
              required: t("This field is required"),
            }),
          }}
        />
        <PhoneInput
          label={t("Phone Number")}
          full={true}
          error={errors.phone?.message}
          inputProps={{
            placeholder: "999113934",
            ...register("phone", {
              required: t("This field is required"),
              pattern: {
                value: onlyNumbersRegex,
                message: t("Plese enter only numbers"),
              },
            }),
          }}
        />
        <div>
          <label className="label block mb-2">{t("Category")}</label>
          <Select
            items={CATEGORIES.map((cat) => ({
              component: <>{cat.name}</>,
              value: cat.name,
            }))}
            className="w-full input p-3 z-0"
            optionsContainerClassname="w-full"
          />
        </div>
        <TextInput
          label={t("Country")}
          full={true}
          error={errors.name?.message}
          inputProps={{
            placeholder: "MiTienda",
            ...register("country", {
              required: t("This field is required"),
              value: "Peru",
            }),
          }}
        />

        <TextInput
          label={t("Currency")}
          full={true}
          error={errors.currency?.message}
          inputProps={{
            placeholder: "MiTienda",
            ...register("currency", {
              required: t("This field is required"),
            }),
          }}
        />
        <PhoneInput
          label={"Whatsapp"}
          full={true}
          error={errors.whatsapp?.message}
          inputProps={{
            placeholder: "999113934",
            ...register("whatsapp", {
              required: t("This field is required"),
              pattern: {
                value: onlyNumbersRegex,
                message: t("Plese enter only numbers"),
              },
            }),
          }}
        />
      </div>

      <div className="flex justify-end mt-4">
        <button className="button text-sm" type="submit">
          {t("Save Changes")}
        </button>
      </div>
    </form>
  );
};

export default StoreInfoForm;
