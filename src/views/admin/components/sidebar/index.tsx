import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import BagIconSvg from "../icons/bag";
import HomeIconSvg from "../icons/home";

const ITEMS = [
  {
    icon: <HomeIconSvg className="fill-slate-400" />,
    selectedIcon: (
      <HomeIconSvg className="fill-purple-900 dark:fill-purple-300" />
    ),
    label: "Inicio",
  },
  {
    selectedIcon: (
      <BagIconSvg className="fill-purple-900 dark:fill-purple-300" />
    ),
    icon: <BagIconSvg className="fill-slate-400" />,
    label: "E-commerce",
  },
];

interface Props {
  show: boolean;
  setShow: (bool: boolean) => void;
}
const SideBar: React.FC<Props> = ({ show, setShow }) => {
  return (
    <div>
      <div
        className={`w-72 h-screen fixed top-0 z-10 ease-in-out duration-300 bg-slate-50 dark:bg-dark-500 dark:lg:bg-dark-800 lg:border-r dark:border-gray-600 border-dashed ${
          show ? "-translate-x-0" : "-translate-x-full"
        } lg:-translate-x-full lg:bg-white `}
      >
        <button
          className="icon-button absolute right-0 m-6 lg:hidden"
          onClick={() => setShow(false)}
        >
          <XMarkIcon className="icon" />
        </button>
        <div className="p-4 mt-12 gap-1 grid lg:mt-20">
          <span className="text-xs font-medium mb-2 block">GENERAL</span>
          {ITEMS.map((item, index) => (
            <SideBarItem
              key={index}
              label={item.label}
              icon={item.icon}
              selectedIcon={item.selectedIcon}
              selected={index === 0}
            />
          ))}
        </div>
      </div>
      <div
        className={`${
          show ? "-translate-x-0" : "-translate-x-full"
        } fixed  w-full top-0 h-screen bg-dark-500/30 lg:hidden`}
        onClick={() => setShow(false)}
      />
    </div>
  );
};

interface ItemProps {
  selected?: boolean;
  label: string;
  icon: JSX.Element;
  selectedIcon: JSX.Element;
}

const SideBarItem: React.FC<ItemProps> = ({
  selected,
  icon,
  label,
  selectedIcon,
}) => {
  return (
    <Link
      href="/"
      className={`flex rounded-md px-6 py-3 transition-all ${
        selected
          ? "bg-purple-300/40 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300"
          : "hover:bg-gray-400/10 "
      }`}
    >
      {selected ? selectedIcon : icon}
      <span className={`${!selected && "font-light"} ml-3`}>{label}</span>
    </Link>
  );
};

export default SideBar;
