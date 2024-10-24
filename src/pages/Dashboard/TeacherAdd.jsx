import React, { useContext, useRef, useState } from "react";
import HeaderTop from "../../component/HeaderTop";
import Title from "../../component/Title";
import Description from "../../component/Description";
import Button from "../../component/Button/Button";
import Input from "../../component/Input";
import { FaXmark } from "react-icons/fa6";
import { MainContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function TeacherAdd() {
  const { teachersArray, setTeachersArray } = useContext(MainContext);
  const showImgRef = useRef();
  const chooseImg = useRef();
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState();

  const subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "History",
    "Geography",
    "English",
    "Literature",
    "Computer Science",
    "Physical Education",
    "Art",
    "Music",
    "Economics",
    "Philosophy",
    "Psychology",
    "Sociology",
    "Political Science",
    "Business Studies",
    "Environmental Science",
    "Foreign Languages",
  ];

  const classes = [
    "1st Grade",
    "2nd Grade",
    "3rd Grade",
    "4th Grade",
    "5th Grade",
    "6th Grade",
    "7th Grade",
    "8th Grade",
    "9th Grade",
    "10th Grade",
    "11th Grade",
    "12th Grade",
  ];

  const genders = [
    "Male",
    "Female",
    "Non-binary",
    "Other",
    "Prefer not to say",
  ];

  function getImgSrc(e) {
    setImgSrc(URL.createObjectURL(e.target.files[0]));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const { fullName, email, subject, about, classes, gender, age } =
      e.target.elements;
    const formData = {
      id: teachersArray.length
        ? teachersArray[teachersArray.length - 1].id + 1
        : 1,
      fullName: fullName.value,
      email: email.value,
      subject: subject.value,
      about: about.value,
      classes: classes.value,
      gender: gender.value,
      age: age.value,
      imgSrc: imgSrc,
    };
    toast.success("Ma'lumtolar Qo'shildi");

    navigate("/teachers");

    setTeachersArray([...teachersArray, formData]);
  }
  console.log(teachersArray);

  return (
    <div className="mx-[38px] h-screen overflow-y-auto">
      <HeaderTop />
      <form onSubmit={handleFormSubmit}>
        <header className="flex items-center justify-between">
          <Title
            title={"Teachers"}
            extraStyle={
              "py-[22px] font-kubmh text-start !font-medium !leading-[24.8px] !text-[20px]"
            }
          />
          <Button
            type="submit"
            title={"Save"}
            extraStyle="py-3 px-[14px] !w-fit "
          />
        </header>
        <div className="mt-6 grid grid-cols-12 gap-[50px]">
          <div className="col-span-6 flex flex-col gap-[36px]">

            <label className="flex flex-col gap-[5px]">
              <Description
                extraStyle={
                  "font-medium text-gray-200 text-sm leading-[17.36px]"
                }
                title={"Full Name"}
              />
              <Input
                required
                name="fullName"
                placeholder="Full Name"
                type="text"
              />
            </label>


            <label className="flex flex-col gap-[5px]">
              <Description
                extraStyle={
                  "font-medium text-gray-200 text-sm leading-[17.36px]"
                }
                title={"Email Address"}
              />
              <Input
                required
                name="email"
                placeholder="Email address"
                type="email"
              />
            </label>


            <label className="flex flex-col gap-[5px]">
              <Description
                extraStyle={
                  "font-medium text-gray-200 text-sm leading-[17.36px]"
                }
                title={"Subject"}
              />
              <select
                required
                className="w-full outline-none font-medium rounded p-[13px] font-kubmh text-sm border-[.5px] border-gray-100 leading-[17.36px]"
                name="subject"
              >
                <option value="" defaultValue>
                  Choose Subject
                </option>
                {subjects.map((subject, index) => (
                  <option value={subject.toLowerCase()} key={index + 1}>
                    {subject}
                  </option>
                ))}
              </select>
            </label>


            <label className="flex flex-col gap-[5px]">
              <Description
                extraStyle={
                  "font-medium text-gray-200 text-sm leading-[17.36px]"
                }
                title={"About"}
              />
              <textarea
                placeholder="About"
                rows={10}
                name="about"
                required
                className="w-full outline-none placeholder:text-gray-200 font-medium rounded p-[13px] resize-none font-kubmh text-sm border-[.5px] border-gray-100"
              ></textarea>
            </label>
          </div>

          <div className="col-span-6 flex flex-col gap-[36px]">
            
            <label className="flex flex-col gap-[5px]">
              <Description
                extraStyle={
                  "font-medium text-gray-200 text-sm leading-[17.36px]"
                }
                title={"Class"}
              />
              <select
                required
                className="w-full outline-none font-medium rounded p-[13px] font-kubmh text-sm border-[.5px] border-gray-100 leading-[17.36px]"
                name="classes"
              >
                <option value="" defaultValue>
                  Class
                </option>
                {classes.map((classLevel, index) => (
                  <option value={classLevel.toLowerCase()} key={index + 1}>
                    {classLevel}
                  </option>
                ))}
              </select>
            </label>

            
            <label className="flex flex-col gap-[5px]">
              <Description
                extraStyle={
                  "font-medium text-gray-200 text-sm leading-[17.36px]"
                }
                title={"Gender"}
              />
              <select
                required
                className="w-full outline-none font-medium rounded p-[13px] font-kubmh text-sm border-[.5px] border-gray-100 leading-[17.36px]"
                name="gender"
              >
                <option value="" defaultValue>
                  Gender
                </option>
                {genders.map((gender, index) => (
                  <option value={gender.toLowerCase()} key={index + 1}>
                    {gender}
                  </option>
                ))}
              </select>
            </label>

            
            <label className="flex flex-col gap-[5px]">
              <Description
                extraStyle={
                  "font-medium text-gray-200 text-sm leading-[17.36px]"
                }
                title={"Age"}
              />
              <Input required name="age" placeholder="Age" type="number" />
            </label>


            <label className="flex flex-col gap-4">
              <Description
                extraStyle={
                  "font-medium !text-black !text-lg text-sm cursor-pointer leading-[17.36px]"
                }
                title={"Import Img"}
              />
              <input
                onChange={getImgSrc}
                ref={chooseImg}
                type="file"
                required
                hidden
                name="imgSrc"
              />
              <div className="relative overflow-hidden w-fit group">
                <img
                  ref={showImgRef}
                  width={400}
                  className="rounded-md"
                  src={imgSrc}
                  alt=""
                />
                <div className="absolute left-0 flex items-center justify-center w-full h-full text-white duration-300 group-hover:top-0 -top-full backdrop-blur-sm bg-black/30">
                  <FaXmark
                    className="text-3xl cursor-pointer"
                    onClick={() => setImgSrc("")}
                  />
                </div>
              </div>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TeacherAdd;
