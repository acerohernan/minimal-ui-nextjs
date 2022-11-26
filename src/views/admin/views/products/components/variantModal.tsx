import ProductVariantForm from "../variantForm";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const ProductVariantModal: React.FC<Props> = ({ open, handleClose }) => {
  return (
    <>
      {open && (
        <>
          <div
            className="fixed top-0 right-0 bottom-0 left-0 w-full h-screen bg-black/50 dark:bg-gray-600/50 z-30"
            style={{ overflow: "hidden" }}
          >
            <div className="absolute overflow-y-auto top-0 bottom-0 left-0 right-0 m-auto lg:my-10 card max-w-xl bg-white p-6 sm:p-8 scrollbar grid grid-rows-[1fr_60px]">
              <div>
                <ProductVariantForm />
              </div>
              <div className="flex gap-4 pt-6">
                <button
                  className="text-sm button-outline w-full"
                  onClick={handleClose}
                >
                  Volver
                </button>
                <button className="text-sm button w-full">
                  Añadir Variante
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductVariantModal;
