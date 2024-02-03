import { ReactNode } from "react";

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
