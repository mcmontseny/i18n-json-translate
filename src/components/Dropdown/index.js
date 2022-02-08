import { useEffect, useRef, useState } from "react";

export default function Dropdown({ langs, selectedLang, onChangeLang }) {
  const ref = useRef();

  const DEFAULT_OPTION = 'Choose';

  const [state, setDropdownState] = useState(false);
  
  const handleClickLang = (lang) => {
    setDropdownState(!state);
    onChangeLang(lang.value ? lang : null);
  };

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the dropdown is open and the clicked target is not within the dropdows,
      // then close the menu
      if (state && ref.current && !ref.current.contains(e.target)) {
        setDropdownState(false);
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    }
  }, [state]);

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
          ref={ref}
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-1" role="none">
              {langs.map((lang, index) => (
                <div className={`flex flex-row px-4 py-2 space-x-2 items-center cursor-pointer ${lang.value !== selectedLang?.value
                  ? "hover:bg-gray-100"
                  : ""
                } ${lang.value === selectedLang?.value ? "bg-gray-300" : ""}`}  key={index} onClick={() => handleClickLang(lang)}>
                  { !lang.value && <img src="./red_bin.png" className="h-4" /> }
                  <span
                    className={`text-gray-700 block text-sm  ${!lang.value ? 'text-red-500' : ''}`}
                  >
                    {lang.key}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
