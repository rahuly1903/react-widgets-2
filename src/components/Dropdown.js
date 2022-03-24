import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const optionList = options.map((option, index) => {
    if (option.label === selected.label) {
      return null;
    }
    return (
      <div
        key={index}
        className="item"
        onClick={() => {
          onSelectChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });
  console.log(ref.current);
  return (
    <div ref={ref} className="ui form">
      <div
        className="field"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <label className="label">Select a Color</label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {optionList}
          </div>
        </div>
      </div>
      <p style={{ color: selected.value }}>The text is {selected.value}</p>
    </div>
  );
};
export default Dropdown;
