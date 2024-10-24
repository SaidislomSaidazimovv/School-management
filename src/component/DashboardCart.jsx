import React from "react";
import Title from "./Title";
import Description from "./Description";

function DashboardCart({ cart }) {
  const { Icon, title, desc } = cart;
  return (
    <div className="flex items-start gap-5">
      <div className="p-2 rounded-lg bg-primary-30">{Icon && <Icon />}</div>
      <div className="flex flex-col gap-4">
        <Title
          title={title}
          extraStyle={"text-start leading-[29.77px] !text-2xl font-medium"}
        />
        <Description title={desc} />
      </div>
    </div>
  );
}

export default DashboardCart;
