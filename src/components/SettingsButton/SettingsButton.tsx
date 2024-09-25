import chevronUpIcon from "/src/assets/icons/chevron-up.svg";
import chevronDownIcon from "/src/assets/icons/chevron-down.svg";

interface SettingsButtonProps {
  isOpen: boolean;
  handleOpen: () => void;
}

const SettingsButton = ({ isOpen, handleOpen }: SettingsButtonProps) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={handleOpen}
        className="flex justify-center items-center gap-3 bg-white mx-[104px] mt-10 py-6 rounded-xl w-full"
      >
        <span className="font-medium text-main-secondary leading-6">
          Settings
        </span>
        <img src={isOpen ? chevronDownIcon : chevronUpIcon} alt="Chevron Up" />
      </button>
    </div>
  );
};

export default SettingsButton;
