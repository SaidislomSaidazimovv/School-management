import { LuMoreHorizontal } from "react-icons/lu";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useContext } from "react";
import { MainContext } from "../context/Context";
import { Link } from "react-router-dom";

function TeacherCart({ teacher }) {
  const { teachersArray, setTeachersArray } = useContext(MainContext);
  const { fullName, email, subject, classes, gender, imgSrc, id } = teacher;
  const removeTeacher = (id) => {
    const newTeachersArray = teachersArray.filter(
      (teacher) => teacher.id !== id
    );
    setTeachersArray([...newTeachersArray]);

    window.location.reload();
  };

  return (
    <tr className="even:bg-[#EBF6FF80]">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <div className="flex items-center gap-2">
          <img
            width={24}
            height={24}
            className="object-cover rounded-full"
            src={imgSrc}
            alt=""
          />
          <h1 className="leading-[14.88px] text-xs font-medium font-kubmh text-gray-400">
            {fullName}
          </h1>
        </div>
      </th>
      <td className="px-6 py-4 capitalize leading-[14.88px] text-xs font-medium font-kubmh text-gray-400">
        {subject}
      </td>
      <td className="px-6 py-4 capitalize leading-[14.88px] text-xs font-medium font-kubmh text-gray-400">
        {classes}
      </td>
      <td className="px-6 py-4 leading-[14.88px] text-xs font-medium font-kubmh text-gray-400">
        {email}
      </td>
      <td className="px-6 py-4 capitalize leading-[14.88px] text-xs font-medium font-kubmh text-gray-400">
        {gender}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <Link to={`/teachers/${id}`}>
            <LuMoreHorizontal className="cursor-pointer" />
          </Link>
          <FaTrash
            onClick={() => {
              removeTeacher(id);
            }}
            className="cursor-pointer text-rose-600"
          />
          <Link to={`/teachers/update/${id}`}>
            <MdEdit className="text-green-600 cursor-pointer" />
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default TeacherCart;
