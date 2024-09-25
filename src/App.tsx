import { useState } from "react";

import SettingsButton from "./components/SettingsButton/SettingsButton";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen font-inter">
      <div className="z-0 absolute inset-0 bg-custom-bg bg-cover bg-center" />
      <div
        className={`absolute inset-0 z-10 bg-main-tertiary transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      />

      <header className="relative z-20">
        <SettingsButton isOpen={isOpen} handleOpen={handleOpen} />
      </header>

      {isOpen && (
        <div className="relative z-20">
          <ProfileSettings />
        </div>
      )}
    </div>
  );
};

export default App;
