import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { IProductVariant } from "../../context/types";
import ProductVariantModal from "./modal";

interface Props {
  variant: IProductVariant;
}

const VariantCard: React.FC<Props> = ({ variant }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-between">
        <span className="input w-full p-3">{variant.name}</span>
        <div className="flex gap-4 ml-4">
          <button
            className="input flex p-3 items-center"
            onClick={() => setOpen(true)}
          >
            <EyeIcon className="w-5 h-5" />
          </button>
          <button
            className="input flex p-3 items-center"
            onClick={() => setOpen(true)}
          >
            <PencilSquareIcon className="w-5 h-5" />
          </button>
          <button
            className="input flex p-3 items-center"
            onClick={() => setOpen(true)}
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      <ProductVariantModal
        variant={variant}
        handleClose={() => setOpen(false)}
        open={open}
        handleAddVariant={() => {}}
      />
    </>
  );
};

export default VariantCard;
