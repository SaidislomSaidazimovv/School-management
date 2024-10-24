import React, { useContext } from "react";
import { MainContext } from "../../context/Context";
import { useNavigate, useParams } from "react-router-dom";
import HeaderTop from "../../component/HeaderTop";
import {
  CallIcon,
  EducationIcon,
  EnvelopeIcon,
} from "../../assets/images/Icon";
import { FaChevronLeft } from "react-icons/fa";

export default function About() {
  const navigate = useNavigate(-1)
  const { teachersArray } = useContext(MainContext);
  const teacherId = parseFloat(useParams().id);

  const teacher = teachersArray.find((teacher) => teacher.id === teacherId);
  const { imgSrc, about, subject, gender, age, fullName } = teacher;

  return (
    <div className="h-screen overflow-y-auto">
      <div className="flex items-center justify-between">
        <FaChevronLeft onClick={() => navigate(-1)} className="ml-[30px] cursor-pointer"/>
        <HeaderTop />
      </div>
      <div className="mt-[17px] mx-[66px] flex items-center justify-evenly gap-[105px]">
        <div className="flex flex-col">
          <img
            className="mb-[50px] mx-auto rounded-full"
            src={imgSrc}
            width={280}
            height={280}
            alt="user img"
          />
          <div className="flex flex-col items-center mb-10">
            <h1 className="font-kubmh font-bold text-base leading-[19.84px] text-gray-800">
              {fullName}
            </h1>
            <p className="capitalize text-gray-100 font-kubmh leading-[17.36px] font-bold text-sm">
              {subject} teacher
            </p>
          </div>
          <div className="flex items-center justify-center gap-6">
            <p className="p-[11px] text-gray-200 rounded-lg bg-primary-30">
              <EducationIcon />
            </p>
            <p className="p-[11px] text-gray-200 rounded-lg bg-primary-30">
              <CallIcon />
            </p>
            <p className="p-[11px] text-gray-200 rounded-lg bg-primary-30">
              <EnvelopeIcon />
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-[335px] min-w-[335px]">
          <h1 className="font-kubmh font-semibold leading-[19.84px] text-base text-gray-800">
            About
          </h1>
          <p className="text-gray-100 mb-[30px] mt-4 max-w-[335px] min-w-[335px] font-kubmh font-medium leading-[21px] text-base">
            {about}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[6px]">
              <h1 className="font-kubmh font-semibold leading-[14.88px] text-xs text-gray-800">
                Age
              </h1>
              <p className="font-kubmh leading-[17.36px] font-medium text-sm text-gray-100">
                {age}
              </p>
            </div>
            <div className="flex flex-col gap-[6px]">
              <h1 className="font-kubmh font-semibold leading-[14.88px] text-xs text-gray-800">
                Gender
              </h1>
              <p className="font-kubmh capitalize leading-[17.36px] font-medium text-sm text-gray-100">
                {gender}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
