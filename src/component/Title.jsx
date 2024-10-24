import React from "react";

function Title({ title, extraStyle }) {
  return (
    <h1 className={`font-semibold text-center leading-[44.65px] text-[36px] text-gray-400 font-kubmh ${extraStyle}`}>
      {title}
    </h1>
  );
}

export default Title;
