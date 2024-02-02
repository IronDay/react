import { ReactNode } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export interface AccordionProps {
  id: string;
  title: string;
  isActive: boolean;
  content: ReactNode;
  handleClick: (id: string) => void;
}

export const Accordion = ({
  title,
  content,
  isActive,
  id,
  handleClick,
}: AccordionProps) => {
  return (
    <div className="w-full" onClick={() => handleClick(id)}>
      <div className="min-h-[20px] bg-purple-950 p-3 text-white rounded flex items-center justify-between">
        <h2 className="font-[inter]">{title}</h2>
        {isActive ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {isActive && <div className="p-3 font-[roboto]">{content}</div>}
    </div>
  );
};

interface Props {
  accordions: {
    id: string;
    title: string;
    isActive: boolean;
    content: ReactNode;
  }[];
}

const Accordions = () => {
  return <div>Accordion</div>;
};

export default Accordions;
