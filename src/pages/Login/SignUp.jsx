import { useRef, useState } from "react";
import Button from "../../component/Button/Button";
import Input from "../../component/Input";
import Title from "../../component/Title";
import HeadingTitle from "../../component/Title";
import toast from "react-hot-toast";
import LoadingGif from "../../assets/images/loading.gif";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const emailStatusRef = useRef();
  const loginStatusRef = useRef();
  const passwordStatusRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();
    const { email, login, password } = e.target.elements;

    if (!email.value || !login.value || !password.value) {
      toast.error("Iltimos, ma'lumotlarni to'ldiring!");
      [email, login, password].forEach((field) =>
        field.classList.add("border-red-600", "border")
      );
      emailStatusRef.current.textContent = "Emailni kiriting";
      loginStatusRef.current.textContent = "Login kiriting";
      passwordStatusRef.current.textContent = "Password kiriting";
    } else {
      [email, login, password].forEach((field) =>
        field.classList.remove("border-red-600", "border")
      );
      emailStatusRef.current.textContent = "";
      loginStatusRef.current.textContent = "";
      passwordStatusRef.current.textContent = "";

      setIsLoading(true);
      const data = { login: login.value, password: password.value };
      toast.success("Ro'yxatdan muvaffaqiyatli o'tdingiz");
      setTimeout(() => {
        window.localStorage.setItem("signUpData", JSON.stringify(data));
        navigate("/");
        setIsLoading(false);
      }, 1500);
    }
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-5">
      <div>
        <HeadingTitle title={"Welcome, Sign up"} extraStyle={"mb-[53px]"} />
        <form
          onSubmit={(e) => handleFormSubmit(e)}
          autoComplete="off"
          className="w-[512px] flex flex-col py-[72px] pl-[130px] pr-[134px] h-[494px] bg-white"
        >
          <Title
            extraStyle={
              "!font-inter mb-[34px] text-primary text-base !leading-[25px] !font-medium"
            }
            title={"It is our great pleasure to have you on board! "}
          />
          <Input
            name={"email"}
            type={"email"}
            placeholder={"Enter your Email"}
          />
          <p ref={emailStatusRef} className="text-[10px] text-red-500"></p>
          <Input
            name={"login"}
            type={"text"}
            extraStyle={"mt-[14px]"}
            placeholder={"Create your Login"}
          />
          <p ref={loginStatusRef} className="text-[10px] text-red-500"></p>
          <Input
            name={"password"}
            type={"password"}
            extraStyle={"mt-[14px]"}
            placeholder={"Create your Password"}
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
        </form>
      </div>
    </div>
  );
}

export default SignUp;
