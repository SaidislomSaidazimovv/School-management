import React, { useContext, useRef, useState } from "react";
import HeaderTop from "../../component/HeaderTop";
import Title from "../../component/Title";
import Description from "../../component/Description";
import Button from "../../component/Button/Button";
import Input from "../../component/Input";
import { FaXmark } from "react-icons/fa6";
import { MainContext } from "../../context/Context";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { parse } from "postcss";

function TeacherAdd() {
  const { teachersArray, setTeachersArray } = useContext(MainContext);
  const showImgRef = useRef();
  const chooseImg = useRef();
  const navigate = useNavigate();
  const id = parseInt(useParams().id);
  const teacher = teachersArray.find((teacher) => teacher.id === id);

  const [imgSrc, setImgSrc] = useState(teacher.imgSrc || "");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const {newFullName, newEmail, newSubject, newAbout, newClasses, newGender, newAge} = e.target.elements
    teacher.fullName = newFullName.value
    teacher.email = newEmail.value
    teacher.subject = newSubject.value
    teacher.about = newAbout.value
    teacher.classes = newClasses.value
    teacher.gender = newGender.value
    teacher.age = newAge.value
    teacher.imgSrc = imgSrc
    setTeachersArray([...teachersArray])
    navigate("/teachers")

    toast.success("Teacher information updated!");
  };

  return (
    <div className="mx-[38px] h-screen overflow-y-auto">
      <HeaderTop />
      <form onSubmit={handleSubmit}>
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
                defaultValue={teacher.fullName}
                required
                name="newFullName"
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
                defaultValue={teacher.email}
                required
                name="newEmail"
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
                name="newSubject"
              >
                <option value="" defaultValue>
                  Choose Subject
                </option>
                {subjects.map((subject, index) => (
                  <option value={subject.toLowerCase()} key={index}>
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
                defaultValue={teacher.about}
                name="newAbout"
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
                name="newClasses"
              >
                <option value="" defaultValue>
                  Class
                </option>
                {classes.map((classLevel, index) => (
                  <option value={classLevel.toLowerCase()} key={index}>
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
                name="newGender"
              >
                <option value="" defaultValue>
                  Gender
                </option>
                {genders.map((gender, index) => (
                  <option value={gender.toLowerCase()} key={index}>
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
              <Input
                required
                name="newAge"
                defaultValue={teacher.age}
                placeholder="Age"
                type="number"
              />
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
                hidden
                name="imgSrc"
              />
              <div className="relative overflow-hidden w-fit group">
                <img
                  ref={showImgRef}
                  width={400}
                  className="rounded-md"
                  src={imgSrc}
                  alt="Teacher"
                />
                <div className="absolute left-0 flex items-center justify-center w-full h-full text-white group-hover:top-0 -top-full duration-300 backdrop-blur-sm bg-black/30">
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
