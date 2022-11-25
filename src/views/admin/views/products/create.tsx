import Link from "next/link";
import ImageInput from "../../../../components/form/image";
import TextInput from "../../../../components/form/text";
import useTranslation from "../../../../i18n/useTranslation";

const AdminProductsCreate = () => {
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
          <span className="text-sm dark:text-white">{t("Products")}</span>
          <div className="w-1 h-1 bg-slate-400 dark:bg-slate-50 rounded-full" />
          <span className="text-sm text-slate-400">{"Create"}</span>
        </div>
      </div>
      <div className="card w-full mt-4 lg:mt-14 p-6">
        <label className="label block">Foto de su producto</label>
        <ImageInput
          id="product"
          className="mt-2 h-52 w-52"
          rounded="rounded-lg"
        />
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <TextInput full label="Name" />
          <TextInput full label="SKU" optional />
          <TextInput full label="Description" />
          <TextInput full label="Full Price" />
          <TextInput full label="Offer Price" />
          <TextInput full label="Stock" />
          <TextInput full label="Category" />
          <TextInput full label="Variants" />
        </div>
        <div className="flex justify-end mt-4">
          <button className="button text-sm" type="submit">
            {"Add Product"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProductsCreate;
