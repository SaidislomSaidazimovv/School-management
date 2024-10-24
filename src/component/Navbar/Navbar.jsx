import React from "react";
import Logo from "../../assets/images/logo.svg";
import Title from "../Title";
import {
  BillingIcon,
  DashboardIcon,
  ExamIcon,
  SettingsICcon,
  StudentIcon,
} from "../../assets/images/Icon";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navbar = [
    {
      id: 1,
      title: "Dashboard",
      Icon: DashboardIcon,
      path: "/",
    },
    {
      id: 2,
      title: "Teachers",
      path: "/teachers",
      Icon: DashboardIcon,
    },
    {
      id: 3,
      title: "Students",
      path: "/students",
      Icon: StudentIcon,
    },
    {
      id: 4,
      title: "Settings and profile",
      path: "/settings",
      Icon: SettingsICcon,
    },
    {
      id: 5,
      title: "Billing",
      path: "/billing",
      Icon: BillingIcon,
    },
    {
      id: 6,
      title: "Exams",
      path: "/exams",
      Icon: ExamIcon,
    },
  ];

  return (
    <aside className="min-w-[20%] bg-primary-10 h-screen overflow-y-auto">
      <div className="mt-[26px] border-b-[.5px] mb-4 border-primary-15">
        <img className="m-auto" src={Logo} alt="Logo" />
        <Title
          title={"Udemy Inter. school"}
          extraStyle={
            "font-kubmh mb-[27px] text-white font-medium text-sm leading-[17.36px]"
          }
        />
      </div>
      <nav className="px-7 text-white flex flex-col gap-[116px]">
        <ul className="flex flex-col gap-2">
          {navbar.map((navItem) => (
            <li key={navItem.id}>
              <NavLink
                to={navItem.path}
                className={`py-3 px-4 rounded flex items-center justify-between `}
              >
                <div className="flex items-center gap-4">
                  {navItem.Icon && <navItem.Icon className="w-6 h-6" />}
                  <p className="leading-[17.36px] font-semibold text-sm">
                    {navItem.title}
                  </p>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <NavLink to={'/features'} className={'py-3 px-4 rounded flex items-center justify-between'}>
              <div className="flex items-center gap-4">
                <BillingIcon />
                <p className="font-kubmh font-semibold leading-[17.36px] text-sm">
                  Features
                </p>
              </div>
              <p className="uppercase text-[10px] bg-primary-40 rounded-lg text-black px-2 py-px leading-[12.4px] font-semibold font-kubmh">new</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;
