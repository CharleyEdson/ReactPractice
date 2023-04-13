import React, { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();


useEffect(() => {
    const handler = (event) => {
        if (!divEl.current){
            return;
        }
       if (!divEl.current.contains(event.target)){
        setIsOpen(false);
       };
    };
    document.addEventListener('click', handler, true);
    return () => {
        document.removeEventListener('click', handler);
    };
}, []);
//the second black array argument, ensures it only runs once per rerender.

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer "
        onClick={handleClick}
      >
        {value?.label || "select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {/* value? is a cehcking to see if the object is undefined. If it is undefined, then it will show the or "select...". If it isn't undefined, it will show the object. */}
      {isOpen && (
        <Panel className="absolute top-full">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;
