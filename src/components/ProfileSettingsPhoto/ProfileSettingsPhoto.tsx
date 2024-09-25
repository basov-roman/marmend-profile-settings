import mockAvatar from "/src/assets/mock/avatar.png";

const ProfileSettingsPhoto = () => {
  return (
    <div className="flex gap-4">
      <img className="w-[84px] h-auto" src={mockAvatar} alt="Profile avatar" />

      <div className="flex flex-col gap-2">
        <button className="border-main-primary bg-transparent px-2 m:px-[45.5px] py-2 border rounded-lg font-medium text-main-primary text-sm leading-[22px]">
          Change photo
        </button>

        <button className="bg-red-light6 px-2 m:px-[45.5px] py-2 rounded-lg font-normal text-red text-sm leading-[22px]">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProfileSettingsPhoto;
