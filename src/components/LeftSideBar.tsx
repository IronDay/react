import React, { ReactNode } from "react";
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
      <h3>{title}</h3>
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
    <div>
      {icon}
      <p>{name}</p>
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
      <h2>Storefly</h2>
      <div>
        <CiSearch />
        <input type="text" placeholder="Search for anything..." />
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
