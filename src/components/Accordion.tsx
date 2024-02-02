import { ReactNode, useState } from "react";
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

const Accordions = ({ accordions }: Props) => {
  const [accs, setAccs] = useState(accordions);

  const handleClick = (id: string) => {};

  return (
    <div className="w-[450px] min-h-screen border-2 m-5 border-red-950 p-3 flex flex-col gap-3 rounded-2xl bg-slate-900">
      {accs.map(({ id, title, content, isActive }, index) => (
        <Accordion
          id={id}
          key={index}
          isActive={isActive}
          title={title}
          content={content}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Accordions;
