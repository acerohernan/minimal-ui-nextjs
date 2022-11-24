import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

export interface SelectOption {
  value: any;
  label: string;
  component: JSX.Element | JSX.Element[];
}

interface Props {
  items: SelectOption[];
  optionsContainerClassname?: string;
}

const Select: React.FC<Props> = ({ items, optionsContainerClassname }) => {
  const [open, setOpen] = useState(false);

  const clickRef = useRef(null);

  useClickOutside({ ref: clickRef, callback: () => setOpen(false) });

  return (
    <div className="relative" ref={clickRef}>
      <button
        className="p-1 focus:outline-none focus:shadow-outline flex items-center dark:text-slate-300"
        type="button"
        onClick={() => setOpen(!open)}
      >
        <Image
          src={`/icons/locales/es-ES.svg`}
          alt={"es-ES"}
          width={15}
          height={15}
          className="rounded-sm mr-2"
        />
        <span>(51)</span>
        <ChevronDownIcon className="w-4 h-4 ml-2" />
      </button>
      <div
        className={`absolute rounded-md bottom-100 shadow-lg bg-white dark:bg-dark-500  ease-in-out duration-300 origin-top-left ${
          open
            ? "transform opacity-100 scale-100"
            : "transform opacity-0 scale-50"
        } dark:bg-dark-500 ${optionsContainerClassname}`}
      >
        {items.map((item, i) => {
          return (
            <button
              className="text-start w-full p-3 text-sm hover:bg-gray-400/10 dark:hover:bg-gray-700/30"
              key={i}
            >
              {item.component}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Select;
