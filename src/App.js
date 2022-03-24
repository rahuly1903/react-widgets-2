import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const AccordionList = [
  {
    Title: "What is a dog?",
    Description:
      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
  },
  {
    Title: "What kinds of dogs are there?",
    Description:
      "There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.",
  },
  {
    Title: "How do you acquire a dog?",
    Description:
      "Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.",
  },
];

const options = [
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
  {
    label: "The Color Red",
    value: "red",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui container">
      <button
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
        type="button"
      >
        Toggle Button
      </button>
      <br />
      {/* <Accordion items={this.AccordionList} /> */}
      {/* <Search /> */}
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectChange={setSelected}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
