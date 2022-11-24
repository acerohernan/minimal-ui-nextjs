import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import NoSSR from "react-no-ssr";

import { useAppTheme } from "../../hooks/useAppTheme";

const ThemeSwitch = () => {
  const { handleTheme, isLight } = useAppTheme();

  return (
    <NoSSR>
      <button
        className="fixed bottom-0 right-0 mx-6 my-6  p-3 bg-dark-900 hover:scale-110 transition-all rounded-full shadow-lg group z-20 bg-white dark:bg-dark-800"
        onClick={handleTheme}
      >
        {isLight ? (
          <MoonIcon className="w-8 h-8 text-gray-500 group-hover:scale-110 group-hover:text-gray-600" />
        ) : (
          <SunIcon className="w-8 h-8 text-gray-500 group-hover:scale-110 group-hover:text-gray-300" />
        )}
      </button>
    </NoSSR>
  );
};

export default ThemeSwitch;
