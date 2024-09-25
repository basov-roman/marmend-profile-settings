import ProfileSettingsForm from "../ProfileSettingsForm/ProfileSettingsForm";
import ProfileSettingsPhoto from "../ProfileSettingsPhoto/ProfileSettingsPhoto";

const ProfileSettings = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center gap-6 bg-white mt-2 mb-8 p-8 rounded-2xl w-[500px]">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-main-secondary text-xl leading-6">
            Profile settings
          </h2>
          <p className="font-normal text-main-tertiary text-xs leading-5">
            Profile settings allow you to change your password, interface
            language, and profile photo
          </p>
        </div>

        <ProfileSettingsPhoto />

        <ProfileSettingsForm />
      </div>
    </div>
  );
};

export default ProfileSettings;
