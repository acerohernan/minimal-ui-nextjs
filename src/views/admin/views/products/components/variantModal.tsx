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
            className="fixed top-0 right-0 bottom-0 left-0 w-full h-screen bg-black/30 z-30"
            style={{ overflow: "hidden" }}
          >
            <div className="absolute overflow-y-auto top-0 bottom-0 left-0 right-0 m-auto lg:my-10 card w-full max-w-xl bg-white px-6 max-h-screen scrollbar">
              <ProductVariantForm />
              <div className="flex gap-4 pb-6">
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
