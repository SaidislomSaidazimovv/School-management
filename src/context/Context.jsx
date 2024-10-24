import React, { createContext, useState } from "react";

export const MainContext = createContext();

function Context({ children }) {
  const [isLogin, setIsLogin] = useState(
    JSON.parse(window.localStorage.getItem("isLogin")) || false
  );
  const [showIsLogOutModal, setShowIsLogOutModal] = useState(false);
  const [teachersArray, setTeachersArray] = useState(
    JSON.parse(window.localStorage.getItem("teachersArray")) || []
  );

  const LogOut = () => {
    setShowIsLogOutModal(false);
    setTimeout(() => {
      window.localStorage.clear();
      window.location.reload();
    }, 300);
  };



  window.localStorage.setItem("isLogin", JSON.stringify(isLogin));
  window.localStorage.setItem("teachersArray", JSON.stringify(teachersArray));
  return (
    <MainContext.Provider
      value={{
        isLogin,
        setIsLogin,
        showIsLogOutModal,
        LogOut,
        setShowIsLogOutModal,
        teachersArray,
        setTeachersArray,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default Context;
