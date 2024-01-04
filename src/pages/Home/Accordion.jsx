import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  const [activeItem, setActiveItem] = useState(null);


  return (
    <div>
      {data.map((element, index) => (
        <AccordionItem
          data={element}
          key={index}
          isOpen={activeItem === index}
          onClick={() => setActiveItem(prevState => index !== prevState ? index : null)}
        />
      ))}
    </div>
  );
}

export default Accordion;
