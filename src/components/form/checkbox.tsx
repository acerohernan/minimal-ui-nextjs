import React from "react";

interface Props {
  checked?: boolean;
}

const Checkbox: React.FC<Props> = ({ checked }) => {
  return (
    <div
      className={`w-6 h-6 relative border rounded-full after:content-[''] after:w-2 after:h-2
              border-slate-600
               after:bg-white  
                after:absolute
                after:rounded-full
                after:m-auto
                after:top-0
                after:bottom-0
                after:right-0
                after:left-0
              ${checked ? "bg-purple-700 after:block" : "after:hidden"}`}
    />
  );
};

export default Checkbox;
