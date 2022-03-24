import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (index) => {
    console.log(index);
    setActiveIndex(index);
  };
  const accordionList = items.map(({ Title, Description }, index) => {
    const assignActive = index === activeIndex ? "active" : "";
    console.log(assignActive);
    return (
      <div key={index}>
        <div
          className={`${assignActive} title`}
          onClick={() => {
            onTitleClick(index);
          }}
        >
          <i className="dropdown icon"></i>
          {Title}
        </div>
        <div className={`${assignActive} content`}>
          <p>{Description}</p>
        </div>
      </div>
    );
  });
  return <div className="ui styled accordion">{accordionList}</div>;
};

export default Accordion;
