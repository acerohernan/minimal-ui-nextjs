import Link from "next/link";
import { useState } from "react";
import Checkbox from "../../../../components/form/checkbox";
import ImageInput from "../../../../components/form/image";
import Select from "../../../../components/form/select";
import TextInput from "../../../../components/form/text";
import useTranslation from "../../../../i18n/useTranslation";
import ProductVariantModal from "./components/variantModal";
import ProductVariantForm from "./variantForm";

const AdminProductsCreate = () => {
  const { t } = useTranslation();
  const [hasVariants, setHasVariants] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  function handleVariants() {
    setHasVariants(!hasVariants);
  }

  return (
    <div className={openModal ? "hide-page" : ""}>
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
          <div className="lg:col-span-2">
            <TextInput
              full
              label="Description"
              textarea
              optional
              inputProps={{
                rows: 5,
              }}
            />
          </div>
          <TextInput full label="Full Price" />
          <TextInput full label="Offer Price" />
          <TextInput full label="Stock" />
          <div>
            <label className="block mb-2 label">Category</label>
            <Select
              items={[
                {
                  value: "Category1",
                  component: <>Category1</>,
                },
                {
                  value: "Category2",
                  component: <>Category2</>,
                },
              ]}
              className="input p-3 w-full"
              optionsContainerClassname="w-full"
            />
          </div>
          <div className="lg:col-span-2 mt-4">
            <span className="label block mb-2">Variantes</span>
            <div className="flex items-center">
              <Checkbox checked={hasVariants} />
              <label
                className="font-light text-sm ml-2 cursor-pointer"
                onClick={handleVariants}
              >
                Este producto tiene variantes
              </label>
            </div>
            <button
              className="text-sm hover:underline text-purple-800 dark:text-purple-400 mt-4"
              onClick={() => setOpenModal(true)}
            >
              + Agregar variante
            </button>
            {hasVariants && (
              <div>
                <ProductVariantForm />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <button className="button text-sm" type="submit">
            {"Add Product"}
          </button>
        </div>
      </div>
      <ProductVariantModal
        open={openModal}
        handleClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default AdminProductsCreate;
