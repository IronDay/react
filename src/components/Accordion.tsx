import { ReactNode } from "react";

export interface AccordionProps {
  id: string;
  title: string;
  isActive: boolean;
  content: ReactNode;
  handleClick: (id: string) => void;
}

const Accordions = () => {
  return <div>Accordion</div>;
};

export default Accordions;
