import { useState } from "react";

export default function Dropdown({ langs, selectedLang, onChangeLang }) {
  const DEFAULT_OPTION = 'Select';
  const [state, setDropdownState] = useState(false);
  const handleClickLang = (lang) => {
    setDropdownState(!state);
    onChangeLang(lang.value ? lang : null);
  };

  return (
    <>
      <div className="relative inline-block text-left w-32">
        <div>
          <button
            type="button"
            onClick={() => setDropdownState(!state)}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            <div className="flex flex-row w-full justify-between">
              <span>{selectedLang ? selectedLang.key : DEFAULT_OPTION}</span>
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </button>
        </div>

        {state && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-1" role="none">
              {langs.map((lang, index) => (
                <span
                  key={index}
                  onClick={() => handleClickLang(lang)}
                  className={`text-gray-700 block px-4 py-2 text-sm ${
                    lang.value !== selectedLang?.value
                      ? "hover:bg-gray-100"
                      : ""
                  } ${lang.value === selectedLang?.value ? "bg-gray-300" : ""}`}
                >
                  {lang.key}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
