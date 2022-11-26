import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import TextInput from "../../../../../components/form/text";

interface Props {}

const OptionItem: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid grid-cols-[2fr_1fr_50px]  lg:grid-cols-[3fr_1fr_50px] items-center gap-4">
      <TextInput full inputProps={{ placeholder: "XL" }} />
      <TextInput full inputProps={{ placeholder: "$ 7.00" }} />
      <button
        className="input p-3 flex justify-center"
        onClick={() => setOpen(!open)}
      >
        <XMarkIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default OptionItem;
