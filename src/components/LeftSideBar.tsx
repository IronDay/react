import { ReactNode } from "react";
import { GoHome, GoPeople } from "react-icons/go";
import { PiCube } from "react-icons/pi";
import { HiOutlineFolder } from "react-icons/hi";
import { CiMap, CiSearch, CiSettings } from "react-icons/ci";
import { HiOutlineChartPie } from "react-icons/hi2";
import { BsInbox } from "react-icons/bs";
import { IoIosHelpCircleOutline } from "react-icons/io";

interface GroupProps {
  title?: string;
  children: ReactNode;
}

const Group = ({ title, children }: GroupProps) => {
  return (
    <div>
      <h3 className="font-[roboto] text text-slate-400 px-2">{title}</h3>
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
      <p className="font-[Abel] text-[0.9rem] font-bold text-slate-700">
        {name}
      </p>
    </a>
  );
};

const Plan = () => {
  return (
    <div className="bg-blue-100 h-[210px] flex flex-col justify-between p-3">
      <div
        className="w-[50px] h-[50px] flex items-center justify-center rounded-full text-[12px]
       font-[roboto] font-bold border-4 border-l-0 border-purple-950"
      >
        <div className="w-[50px] h-[50px] flex items-center justify-center border border-purple-300 rounded-full">
          60%
        </div>
      </div>
      <h3 className="font-[roboto] font-bold text-[15px] text-stone-900">
        Used capacity
      </h3>
      <p className="font-[roboto]">
        You are already using 60% of your capacity
      </p>
      <a className="bg-blue-600 py-3 px-5 font-[roboto] text-white text-[14px]">
        Upgrade plan
      </a>
    </div>
  );
};

const LeftSideBar = () => {
  const mapElement = new Map<string, SideBarElementProps[]>();
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
    { icon: <CiSettings />, name: "Settings" },
    { icon: <IoIosHelpCircleOutline />, name: "Helps" },
  ]);

  return (
    <section>
      <Group>
        <h2 className="ml-2 font-bold text-2xl font-[inter]">Storefly</h2>
        <div className="flex items-center gap-1 bg-purple-200 rounded h-[35px] ml-2 pl-1">
          <CiSearch color="purple" size={20} />
          <input
            className="bg-transparent h-[35px] text-purple-400 outline-0 font-[roboto]"
            type="text"
            placeholder="Search for anything..."
          />
        </div>
      </Group>
      <Group title={"Main"}>
        <SideBarElement icon={<GoHome />} name={"Home"} />
        <SideBarElement icon={<PiCube />} name={"Orders"} />
        <SideBarElement icon={<CiMap />} name={"Documentation"} />
        <SideBarElement icon={<HiOutlineChartPie />} name={"Map Overview"} />
      </Group>
      <Group title={"Communications"}>
        <SideBarElement icon={<BsInbox />} name={"Inbox"} />
        <SideBarElement icon={<GoPeople />} name={"Couriers"} />
      </Group>
      <Plan />
      <SideBarElement icon={<CiSettings />} name="Settings" />
      <SideBarElement icon={<IoIosHelpCircleOutline />} name={"Help"} />
    </section>
  );
};

export default LeftSideBar;
