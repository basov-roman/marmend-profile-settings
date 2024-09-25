import { useState } from "react";
import chevronDownIcon from "/src/assets/icons/chevron-down.svg";

const LANGUAGES = ["English", "German", "Ukrainian"];

const CustomSelect = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsDropdownActive((prev) => !prev);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsDropdownActive(false);
  };

  return (
    <div className="relative">
      <div
        className="flex justify-between items-center border-main-tertiary bg-white px-4 p-2 border rounded-lg font-normal text-xs leading-5 cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedOption ? (
          <span className="text-main-secondary">{selectedOption}</span>
        ) : (
          <span className="text-gray-light">Select your option</span>
        )}
        <img
          className={`transform transition-transform duration-300 ease-out ${
            isDropdownActive ? "rotate-180" : ""
          }`}
          src={chevronDownIcon}
          alt="Dropdown icon"
        />
      </div>

      {isDropdownActive && (
        <ul className="z-10 absolute bg-white shadow-custom mt-1 py-[10px] rounded-lg w-full max-h-40 overflow-y-auto">
          {LANGUAGES.map((language) => (
            <li
              key={language}
              className={`flex bg-white items-center px-4 py-2 cursor-pointer hover:bg-blue-light2 group ${
                language === selectedOption
                  ? "bg-blue-light7 text-gray-light"
                  : ""
              }`}
              onClick={() => handleOptionSelect(language)}
            >
              <span className="group-hover:text-white text-main-secondary text-sm">
                {language}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
