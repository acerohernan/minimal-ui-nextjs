import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import BagIconSvg from "../icons/bag";
import HomeIconSvg from "../icons/home";

const ITEMS = [
  {
    icon: <HomeIconSvg className="fill-slate-500" />,
    selectedIcon: <HomeIconSvg className="fill-purple-800" />,
    label: "Inicio",
  },
  {
    selectedIcon: <BagIconSvg className="fill-purple-800" />,
    icon: <BagIconSvg className="fill-slate-500" />,
    label: "E-commerce",
  },
];

interface Props {
  show: boolean;
  setShow: (bool: boolean) => void;
}
const SideBar: React.FC<Props> = ({ show, setShow }) => {
  return (
    <>
      <div
        className={`w-72 h-full fixed top-0 z-10 ease-in-out duration-300 bg-slate-50 dark:bg-dark-500 ${
          show ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="icon-button absolute right-0 m-6 "
          onClick={() => setShow(false)}
        >
          <XMarkIcon className="icon" />
        </button>
        <div className="p-4 mt-12 gap-1 grid">
          <span className="text-xs font-medium text-slate-500 mb-2 block">
            GENERAL
          </span>
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
        } fixed  w-full top-0 h-screen bg-dark-500/30 `}
        onClick={() => setShow(false)}
      />
    </>
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
        selected ? "bg-purple-200/50 text-purple-800" : "hover:bg-gray-400/10 "
      }`}
    >
      {selected ? selectedIcon : icon}
      <span className={`${!selected && "font-light"} ml-3`}>{label}</span>
    </Link>
  );
};

export default SideBar;
