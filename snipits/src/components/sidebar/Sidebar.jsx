import { useState } from "react";
import { HiChartPie } from "react-icons/hi";
import {
  BsFillSdCardFill,
  BsFillHandbagFill,
  BsFillShieldLockFill,
} from "react-icons/bs";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { ChevronUp, ChevronDown } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const links = [
    {
      title: "Overview",
      subHeadings: ["Product List", "Edit Product", "Add New Product"],
    },
    {
      title: "Pages",
    },
    {
      title: "Products",
      subHeadings: ["Product List", "Edit Product", "Add New Product"],
    },
    {
      title: "Messages",
    },
    {
      title: "Authentication",
    },
  ];

  // Define an array of icons that corresponds to the links.
  const icons = [
    <HiChartPie />,
    <BsFillSdCardFill />,
    <BsFillHandbagFill />,
    <BiSolidMessageSquareDetail />,
    <BsFillShieldLockFill />,
  ];

  const [isOpen, setIsOpen] = useState({
    Authentication: false,
    Overview: false,
  });

  const dropdownToggle = (title, action) => {
    setIsOpen((prevState) => {
      return {
        ...prevState,
        [title]: action === true ? !prevState[title] : false,
      };
    });
  };

  return (
    <div className="w-1/5 h-screen px-8">
      <nav className="flex flex-col">
        <ul>
          {links.map((item, index) => (
            <li key={index}>
              <NavLink
                to={
                  item.title === "Overview"
                    ? "/dashboard"
                    : `${item.title.toLowerCase()}`
                }
                className={`flex items-center justify-between my-3${
                  location.pathname === `${item.title.toLowerCase()}`
                    ? " font-bold text-secondary "
                    : " text-darkblue "
                }`}
                onClick={() => dropdownToggle(item.title, true)}
              >
                <div className="flex items-center">
                  <div className="mr-3 text-2xl">
                    {icons[index] /* Render the corresponding icon */}
                  </div>
                  <span className="text-xl font-normal leading-6">
                    {item.title}
                  </span>
                </div>
                <div>
                  {item.subHeadings ? (
                    <button>{isOpen ? <ChevronDown /> : <ChevronUp />}</button>
                  ) : null}
                </div>
              </NavLink>
              <ul>
                {item.subHeadings && isOpen
                  ? item.subHeadings.map((menu, subIndex) => (
                      <li key={subIndex} className="my-2 text-xl text-darkblue">
                        {menu}
                      </li>
                    ))
                  : null}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
