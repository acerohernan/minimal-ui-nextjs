import { useForm } from "react-hook-form";
import ImageInput from "../../../../components/form/image";
import PhoneInput from "../../../../components/form/phone";
import TextInput from "../../../../components/form/text";
import { onlyNumbersRegex } from "../../../../helpers/regex";
import useTranslation from "../../../../i18n/useTranslation";

interface FormValues {
  name: string;
  surname: string;
  phone: string;
}

const ProfileInfoForm = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  async function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <div className="grid gap-4">
      <div className="w-full card flex items-center justify-center flex-col p-14">
        <ImageInput
          id="profile"
          width={180}
          height={180}
          rounded="rounded-lg"
          className="h-40 w-40"
        />
        <span className="mt-4 text-sm label">
          {t("Allowed *.jpeg, *.jpg, *.png, *.gif")}
        </span>
        <span className="text-sm label">{t("Max size of 3.1 MB")}</span>
      </div>
      <form
        className="w-fullshadow-lg card p-6 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-5 md:grid-cols-2">
          <TextInput
            label={t("Name")}
            full={true}
            error={errors.name?.message}
            inputProps={{
              placeholder: "MiTienda",
              ...register("name", {
                required: t("This field is required"),
              }),
            }}
          />
          <TextInput
            label={t("Surname")}
            full={true}
            error={errors.surname?.message}
            inputProps={{
              placeholder: "MiTienda",
              ...register("surname", {
                required: t("This field is required"),
              }),
            }}
          />
          <TextInput
            label={t("Email Address")}
            full={true}
            inputProps={{ placeholder: "example@text.com", disabled: true }}
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
        </div>

        <div className="flex justify-end mt-4">
          <button className="button text-sm" type="submit">
            {t("Save Changes")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileInfoForm;
