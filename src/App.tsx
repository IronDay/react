import LeftSideBar from "./components/LeftSideBar.tsx";
import { IconContext } from "react-icons";

function App() {
  return (
    <IconContext.Provider value={{ size: "17px" }}>
      <LeftSideBar />
    </IconContext.Provider>
  );
}

export default App;

/*
import { v4 as uuid4 } from "uuid";
import Accordions from "./components/Accordion.tsx";

const accordions = [
  {
    id: uuid4(),
    title: "What is HTML5",
    isActive: false,
    content: (
      <p className="text-orange-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eum quis
        invidunt id facilisis cillum, excepteur quis wisi eiusmod velit id te
        qui possim ipsum. Consequat eleifend euismod duo. Ipsum ex quis sanctus
        feugiat option doming luptatum nostrud voluptua tempor. Eiusmod delenit
        est. Esse vulputate option.
      </p>
    ),
  },
  {
    id: uuid4(),
    title: "What's CSS",
    isActive: false,
    content: (
      <p className="text-slate-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eum quis
        invidunt id facilisis cillum, excepteur quis wisi eiusmod velit id te
        qui possim ipsum. Consequat eleifend euismod duo. Ipsum ex quis sanctus
        feugiat option doming luptatum nostrud voluptua tempor. Eiusmod delenit
        est. Esse vulputate option.
      </p>
    ),
  },
  {
    id: uuid4(),
    title: "What's Javascript",
    isActive: false,
    content: (
      <p className="text-blue-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eum quis
        invidunt id facilisis cillum, excepteur quis wisi eiusmod velit id te
        qui possim ipsum. Consequat eleifend euismod duo. Ipsum ex quis sanctus
        feugiat option doming luptatum nostrud voluptua tempor. Eiusmod delenit
        est. Esse vulputate option.
      </p>
    ),
  },
  {
    id: uuid4(),
    title: "What's React",
    isActive: false,
    content: (
      <p className="text-green-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eum quis
        invidunt id facilisis cillum, excepteur quis wisi eiusmod velit id te
        qui possim ipsum. Consequat eleifend euismod duo. Ipsum ex quis sanctus
        feugiat option doming luptatum nostrud voluptua tempor. Eiusmod delenit
        est. Esse vulputate option.
      </p>
    ),
  },
  {
    id: uuid4(),
    title: "What's Angular",
    isActive: false,
    content: (
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eum quis
        invidunt id facilisis cillum, excepteur quis wisi eiusmod velit id te
        qui possim ipsum. Consequat eleifend euismod duo. Ipsum ex quis sanctus
        feugiat option doming luptatum nostrud voluptua tempor. Eiusmod delenit
        est. Esse vulputate option.
      </p>
    ),
  },
];

function App() {
  return (
    <div className="flex justify-center items-center">
      <Accordions accordions={accordions} />
    </div>
  );
}

export default App;
*/
