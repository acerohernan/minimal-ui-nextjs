import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { BellIcon, EyeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useRef, useState } from "react";
import NoSsr from "react-no-ssr";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import { laguageList, Language } from "../../../../i18n/config/languages";
import useTranslation from "../../../../i18n/useTranslation";
import SideBar from "../sidebar";

const AdminHeader = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  return (
    <div className="relative">
      <div className="w-full flex items-center justify-between p-4 fixed top-0 backdrop-blur-sm bg-white/80  dark:bg-dark-800/80 lg:px-10 lg:relative">
        <div className="flex items-center gap-2 lg:gap-3">
          <button
            className="icon-button lg:hidden"
            onClick={() => setShowSidebar(true)}
          >
            <Bars3BottomLeftIcon className="w-5 h-5" />
          </button>
          <button className="icon-button">
            <MagnifyingGlassIcon className="icon" />
          </button>
        </div>
        <div className="flex items-center gap-2 lg:gap-3">
          <NoSsr>
            <LanguageButton />
          </NoSsr>
          <button className="icon-button">
            <EyeIcon className="icon" />
          </button>

          <button className="icon-button">
            <BellIcon className="icon" />
          </button>
          <button className="transition-all hover:scale-110">
            <Image
              src="/avatar.jpg"
              className="rounded-full"
              alt="badget"
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>
      <SideBar show={showSidebar} setShow={setShowSidebar} />
    </div>
  );
};

const LanguageButton: React.FC = () => {
  const { currentLanguage, setLanguage } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);

  const clickRef = useRef(null);

  useClickOutside({ ref: clickRef, callback: () => setOpen(false) });

  function handleLangChange(lang: Language) {
    return () => {
      setOpen(false);
      setLanguage(lang);
    };
  }

  return (
    <div className="relative" ref={clickRef}>
      <button
        className="mt-1 mr-2 transition-all hover:scale-110"
        onClick={() => setOpen(!open)}
      >
        <Image
          src={`/icons/locales/${currentLanguage.locale}.svg`}
          alt={currentLanguage.language}
          width={30}
          height={30}
          className="rounded-sm"
        />
      </button>
      <div
        className={`absolute bottom-100 right-0 p-2 grid gap-1 rounded-lg shadow-md ease-in-out duration-300 origin-top-right ${
          open
            ? "transform opacity-100 scale-100"
            : "transform opacity-0 scale-50"
        } dark:bg-dark-500`}
      >
        {laguageList.map((lang, i) => (
          <button
            key={i}
            className={`
            font-light text-sm p-3 px-6 hover:bg-gray-400/10 rounded-lg flex items-center justify-center dark:hover:bg-gray-700/30
            ${
              currentLanguage.locale === lang.locale &&
              "bg-gray-200 dark:bg-gray-700/50"
            }
            `}
            onClick={handleLangChange(lang)}
          >
            <Image
              src={`/icons/locales/${lang.locale}.svg`}
              alt={lang.language}
              width={25}
              height={25}
              className="rounded-sm mr-4"
            />
            {lang.language}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdminHeader;
