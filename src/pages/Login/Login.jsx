import React, { useContext, useRef, useState } from "react";
import Input from "../../component/Input";
import Button from "../../component/Button/Button";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { MainContext } from "../../context/Context";
import LoadingGif from "../../assets/images/loading.gif";
import HeadingTitle from "../../component/Title";
import Title from "../../component/Title";

function Login() {
  const loginStatusRef = useRef();
  const passwordStatusRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const { setIsLogin } = useContext(MainContext);

  function loginFormSubmit(e) {
    e.preventDefault();
    const { loginValue, passwordValue } = e.target.elements;

    const storedData = JSON.parse(window.localStorage.getItem("signUpData"));

    const isLoginValid = storedData
      ? loginValue.value === storedData.login
      : loginValue.value === "Saidislom";
    const isPasswordValid = storedData
      ? passwordValue.value === storedData.password
      : passwordValue.value === "5055";

    if (!isLoginValid) {
      loginStatusRef.current.textContent = "Login kiriting!";
      loginValue.classList.add("!border-red-600", "!border");
      toast.error("Iltimos, login kiriting!");
    } else {
      loginStatusRef.current.textContent = "";
      loginValue.classList.remove("!border-red-600", "!border");
    }

    if (!isPasswordValid) {
      passwordStatusRef.current.textContent = "Parol kiriting!";
      passwordValue.classList.add("!border-red-600", "!border");
      toast.error("Iltimos, parol kiriting!");
    } else {
      passwordStatusRef.current.textContent = "";
      passwordValue.classList.remove("!border-red-600", "!border");
    }

    if (isLoginValid && isPasswordValid) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLogin(true);
        setIsLoading(false);
      }, 1500);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-5">
      <div>
        <HeadingTitle title={"Welcome, Log into you account"} />
        <form
          onSubmit={loginFormSubmit}
          autoComplete="off"
          className="w-[512px] flex flex-col py-[72px] pl-[130px] pr-[134px] mt-[53px] h-[382px] bg-white"
        >
          <Title
            extraStyle={
              "!font-inter text-primary text-base !leading-[25px] !font-medium"
            }
            title={"It is our great pleasure to have you on board! "}
          />

          <Input
            type="text"
            name="loginValue"
            extraStyle="mt-[14px]"
            placeholder="Enter your Login"
          />
          <p ref={loginStatusRef} className="text-[10px] text-red-500"></p>

          <Input
            type="password"
            name="passwordValue"
            extraStyle="mt-[14px]"
            placeholder="Enter Password"
          />
          <p ref={passwordStatusRef} className="text-[10px] text-red-500"></p>

          <Button
            extraStyle="mt-[14px]"
            title={
              isLoading ? (
                <img
                  src={LoadingGif}
                  alt="Loading..."
                  className="w-5 h-5 mx-auto"
                />
              ) : (
                "Login"
              )
            }
            disabled={isLoading}
          />

          <Link
            to="sign-up"
            className="font-inter text-center text-primary-5 mt-[14px] text-xs leading-[24px] font-bold"
          >
            Sign up
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
