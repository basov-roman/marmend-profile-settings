import { useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";

import eyeIcon from "/src/assets/icons/eye.svg";
import eyeSlashIcon from "/src/assets/icons/eye-slash.svg";
import exclamationCircleIcon from "/src/assets/icons/exclamation-circle.svg";

const ProfileSettingsForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 8) {
      setErrorMessage("Password must be at least 8 characters.");
      setIsPasswordValid(false);
    } else {
      setErrorMessage("");
      setIsPasswordValid(true);
    }
  };

  const handleSubmit = () => {
    if (isPasswordValid) {
      console.log("Form submitted successfully.");
    }
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="name"
            className="font-medium text-main-secondary text-xs leading-5"
          >
            Name
          </label>
          <input
            className="border-main-tertiary px-3 py-2 border rounded-lg w-full font-normal text-main-secondary text-xs placeholder:text-gray-light leading-5 focus:outline-none"
            placeholder="Enter your name"
            id="name"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="font-medium text-main-secondary text-xs leading-5"
          >
            Change your password
          </label>
          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              className={`border rounded-lg w-full px-3 py-2 font-normal text-main-secondary text-xs placeholder:text-gray-light leading-5 focus:outline-none pr-8 ${
                errorMessage ? "border-red" : "border-main-tertiary"
              }`}
              placeholder="Enter your password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              type="button"
              className="right-3 absolute inset-y-0 flex items-center"
              onClick={togglePasswordVisibility}
            >
              <img
                src={isPasswordVisible ? eyeSlashIcon : eyeIcon}
                alt="Toggle password visibility"
              />
            </button>
            <div className="right-9 absolute inset-y-0 flex items-center">
              {errorMessage && (
                <img src={exclamationCircleIcon} alt="Error icon" />
              )}
            </div>
          </div>
          {errorMessage && (
            <span className="font-normal text-red text-xs leading-5">
              {errorMessage}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-medium text-main-secondary text-xs leading-5">
            Interface language
          </label>
          <CustomSelect />
        </div>
      </div>

      <button
        className={` py-2 rounded-lg w-full font-medium text-sm text-white leading-[22px]  transition-colors duration-300 ${
          !isPasswordValid
            ? "bg-gray-light5 cursor-not-allowed"
            : "bg-main-primary hover:bg-main-secondary active:bg-blue-dark"
        }`}
        type="submit"
        disabled={!isPasswordValid}
      >
        Save changes
      </button>
    </form>
  );
};

export default ProfileSettingsForm;
