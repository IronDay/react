import React, { ReactNode } from "react";
import { GoChevronRight, GoHome, GoPeople } from "react-icons/go";
import { PiCube } from "react-icons/pi";
import { HiOutlineFolder } from "react-icons/hi";
import { CiMap, CiSearch, CiSettings } from "react-icons/ci";
import { HiOutlineChartPie } from "react-icons/hi2";
import { BsInbox } from "react-icons/bs";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";

interface GroupProps {
  title?: string;
  children: ReactNode;
}

const Group = ({ title, children }: GroupProps) => {
  return (
    <div>
      <h3 className="font-[roboto] text-[13px] text-slate-400 px-2">{title}</h3>
      {children}
    </div>
  );
};

interface SideBarElementProps {
  icon: ReactNode;
  name: string;
  notification?: number;
}

const SideBarElement = ({ icon, name }: SideBarElementProps) => {
  return (
    <a
      className="flex justify-start items-center p-3 gap-1
     visited:text-purple-950
     cursor-pointer active:bg-purple-100 hover:text-purple-950"
    >
      {icon}
      <p className="font-[roboto] font-bold text-[12px] text-slate-500 text-inherit">
        {name}
      </p>
    </a>
  );
};

const Plan = () => {
  return (
    <div className="bg-blue-100 h-[210px] flex flex-col justify-between p-3 rounded">
      <div className="w-[50px] h-[50px] border border-purple-950 rounded-full flex justify-center items-center">
        <div className="w-[40px] h-[40px] border border-purple-950 rounded-full flex justify-center items-center font-[roboto] font-bold">
          60%
        </div>
      </div>
      <h3 className="font-[roboto] font-bold text-[15px] text-stone-800">
        Used capacity
      </h3>
      <p className="font-[inter] text-slate-800">
        You are already using 60% of your capacity
      </p>
      <a className="bg-slate-700 text-center py-3 px-5 font-[roboto] text-white text-[13px] rounded">
        Upgrade plan
      </a>
    </div>
  );
};

const UserProfile = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <div className="w-[35px] h-[35px] flex items-center justify-center border border-purple-950 rounded-full">
          <img
            className="w-full h-auto object-cover rounded-full"
            src={
              "data:image/jpeg;base64,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"
            }
            alt={"user profile"}
          />
        </div>
        <div className="flex flex-col items-start">
          <p className="font-[inter] text-[14px] font-bold text-slate-950">
            John Doe
          </p>
          <p className="font-[roboto] text-[12px] text-slate-600">
            johndoe@gmail.com
          </p>
        </div>
      </div>
      <button>
        <LuLogOut color="red" />
      </button>
    </div>
  );
};

const SideBarSwitch = () => {
  return (
    <button className="w-[25px] h-[25px] rounded flex justify-center items-center bg-purple-100">
      <GoChevronRight color="purple" />
    </button>
  );
};

const LeftSideBar = () => {
  const mapElement = new Map<string, SideBarElementProps[] | ReactNode>();
  mapElement.set(
    "noTitle",
    <>
      <div className="w-full flex justify-between items-center">
        <h2 className="font-bold text-2xl font-[inter]">Storefly</h2>
        <SideBarSwitch />
      </div>
      <div className="flex items-center gap-1 bg-slate-200 rounded h-[35px] pl-1">
        <CiSearch color="purple" size={20} />
        <input
          className="bg-transparent h-[35px] text-[13px] text-slate-900 outline-0 font-[roboto]"
          type="text"
          placeholder="Search for anything..."
        />
      </div>
    </>,
  );
  mapElement.set("Main", [
    { icon: <GoHome />, name: "Home" },
    { icon: <PiCube />, name: "Orders" },
    { icon: <HiOutlineFolder />, name: "Documentation" },
    { icon: <CiMap />, name: "Map Overview" },
    { icon: <HiOutlineChartPie />, name: "Statistics" },
  ]);

  mapElement.set("communications", [
    { icon: <BsInbox />, name: "Inbox" },
    { icon: <GoPeople />, name: "Couriers" },
  ]);
  mapElement.set("noTitle2", <Plan />);

  mapElement.set("noTitle3", [
    { icon: <CiSettings />, name: "Settings" },
    { icon: <IoIosHelpCircleOutline />, name: "Helps" },
  ]);

  mapElement.set("noTitle4", <hr />);
  mapElement.set("noTitle5", <UserProfile />);

  return (
    <section className="flex flex-col gap-4 m-2 relative">
      {Array.from(mapElement, ([title, children]) => ({ title, children })).map(
        (element, index) => {
          if (Array.isArray(element.children)) {
            return (
              <Group
                key={index}
                title={element.title.includes("noTitle") ? "" : element.title}
              >
                {element.children.map((sideElement, index) => (
                  <SideBarElement
                    key={index}
                    icon={sideElement.icon}
                    name={sideElement.name}
                  />
                ))}
              </Group>
            );
          }

          if (React.isValidElement(element.children)) {
            return (
              <Group
                key={index}
                title={element.title.includes("noTitle") ? "" : element.title}
              >
                {element.children}
              </Group>
            );
          }
        },
      )}
    </section>
  );
};

export default LeftSideBar;
