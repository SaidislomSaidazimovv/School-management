import { useContext } from "react";
import {
  BankIcon,
  EducationIcon,
  NotificationIcon,
  StudentIcon,
  UserIcon,
} from "../../assets/images/Icon";
import Button from "../../component/Button/Button";
import DashboardCart from "../../component/DashboardCart";
import Title from "../../component/Title";
import { MainContext } from "../../context/Context";

function  Dashboard() {
  const { showIsLogOutModal, setShowIsLogOutModal } = useContext(MainContext);
  const carts = [
    {
      id: 1,
      Icon: UserIcon,
      title: "Add other admins",
      desc: "Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!",
    },
    {
      id: 2,
      Icon: BankIcon,
      title: "Add classes",
      desc: "Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!",
    },
    {
      id: 3,
      Icon: EducationIcon,
      title: "Add students",
      desc: "Create rich course content and coaching products for your students.When you give them a pricing plan, they’ll appear on your site!",
    },
  ];
  
  return (
    <div className="h-screen overflow-y-auto ">
      <header className="flex items-center mb-[53px] px-[124px] py-[15px] bg-gray-5 justify-between">
        <div className="flex flex-col mt-[29px]">
          <p className="font-kubmh font-medium leading-[19.84px] text-base">
            Learn how to launch faster
          </p>
          <span className="font-kubmh font-normal leading-[19.84px] text-base">
            watch our webinar for tips from our experts and get a limited time
            offer.
          </span>
        </div>
        <div className="flex items-center gap-12">
          <p className="scale-110">
            <NotificationIcon />
          </p>
          <Button onclick={() => setShowIsLogOutModal(true)} title={"Log out"} extraStyle={"px-[35px] cursor-pointer"} />
        </div>
      </header>
      <div className="px-[124px]">
        <Title
          extraStyle={"text-start"}
          title={"Welcome to your dashboard, Udemy school"}
        />
        <Title
          extraStyle={"!pl-[105px] text-start !text-[24px] mt-[23px] mb-[6px]"}
          title={"Uyo/school/@teachable.com"}
        />
        <div className="flex mt-[23px]">
          <div className="flex flex-col py-[68px] px-[90px]">
            <div className="flex flex-col gap-[51px]">
              {carts.map((cart) => (
                <DashboardCart cart={cart} key={cart.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
