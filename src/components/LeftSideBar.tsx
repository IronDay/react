import { ReactNode } from "react";
import { GoHome, GoPeople } from "react-icons/go";
import { PiCube } from "react-icons/pi";
import { HiOutlineFolder } from "react-icons/hi";
import { CiMap, CiSearch, CiSettings } from "react-icons/ci";
import { HiOutlineChartPie } from "react-icons/hi2";
import { BsInbox } from "react-icons/bs";
import { IoIosHelpCircleOutline } from "react-icons/io";

interface GroupProps {
  title: string;
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
    <div>
      <div>60%</div>
      <h3>Used capacity</h3>
      <p>You are already using 60% of your capacity</p>
      <a>Upgrade plan</a>
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
      <div>
        <h2>Storefly</h2>
        <div>
          <CiSearch />
          <input type="text" placeholder="Search for anything..." />
        </div>
      </div>
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
    </section>
  );
};

export default LeftSideBar;
