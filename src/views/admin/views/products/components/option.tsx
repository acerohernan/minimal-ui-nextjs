import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import TextInput from "../../../../../components/form/text";

interface Props {}

const OptionItem: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid grid-cols-[2fr_1fr_50px]  lg:grid-cols-[3fr_1fr_50px] items-center gap-4">
      <TextInput full inputProps={{ placeholder: "XL" }} />
      <TextInput full inputProps={{ placeholder: "$ 7.00" }} />
      <button className="input p-3" onClick={() => setOpen(!open)}>
        {open ? (
          <EyeSlashIcon className="w-6 h-6" />
        ) : (
          <EyeIcon className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default OptionItem;
