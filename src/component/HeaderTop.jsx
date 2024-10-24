import React, { useContext } from "react";
import { NotificationIcon } from "../assets/images/Icon";
import Button from "./Button/Button";
import { MainContext } from "../context/Context";

function HeaderTop() {
    const {setShowIsLogOutModal} = useContext(MainContext)
    const showModal = () => {
      setShowIsLogOutModal(true);
    };
  return (
    <div className="flex items-center justify-end gap-[3px] mt-[19px]">
      <NotificationIcon />
      <Button
        onclick={showModal}
        extraStyle={
          "!w-fit !text-black bg-transparent border-none py-3 px-[35px] hover:bg-primary-5 duration-300 hover:!text-white"
        }
        title={"Log Out"}
      />
    </div>
  );
}

export default HeaderTop;
