import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { BellIcon, EyeIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import SideBar from "../sidebar";

const AdminHeader = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  return (
    <>
      <div className="w-full flex items-center justify-between p-4 fixed top-0 backdrop-blur-sm bg-slate-50/80  dark:bg-dark-800/80">
        <div className="flex items-center gap-2">
          <button className="icon-button" onClick={() => setShowSidebar(true)}>
            <Bars3BottomLeftIcon className="w-5 h-5" />
          </button>
          <button className="icon-button">
            <MagnifyingGlassIcon className="icon" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="icon-button">
            <GlobeAltIcon className="icon" />
          </button>
          <button className="icon-button">
            <EyeIcon className="icon" />
          </button>

          <button className="icon-button">
            <BellIcon className="icon" />
          </button>
          <button className="transition-all hover:scale-110">
            <Image src="/favicon.ico" alt="badget" width={40} height={40} />
          </button>
        </div>
      </div>
      <SideBar show={showSidebar} setShow={setShowSidebar} />
    </>
  );
};

export default AdminHeader;
