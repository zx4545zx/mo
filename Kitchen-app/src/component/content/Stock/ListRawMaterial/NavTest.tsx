
import React, { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";

import { VscHome } from "react-icons/Vsc";
import { LuClock3 } from "react-icons/Lu";
import { CgBox } from "react-icons/Cg";


export default function PillsColors(): JSX.Element {
  const [colorsActive, setColorsActive] = useState({
    tab1: "tab1",
    tab2: "tab1",
    tab3: "tab1",
    tab4: "tab1",
    tab5: "tab1",
    tab6: "tab1",
    tab7: "tab1",
    tab8: "tab1",
  });

  const handleColorsClick = (value: object) => {
    if (value === colorsActive) {
      return;
    }
    setColorsActive({ ...colorsActive, ...value });
  };

  return (
    <div className="mb-3">
      {/* color primary */}
      <TETabs pills>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab1: "tab1" })}
          active={colorsActive.tab1 === "tab1"}
          color="secondary"
        >
          Home
        </TETabsItem>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab1: "tab2" })}
          active={colorsActive.tab1 === "tab2"}
          color="primary"
        >
          Profile
        </TETabsItem>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab1: "tab3" })}
          active={colorsActive.tab1 === "tab3"}
          color="primary"
        >
          Messages
        </TETabsItem>
      </TETabs>
      <TETabsContent>
        <TETabsPane show={colorsActive.tab1 === "tab1"}>
          Tab 1 content
        </TETabsPane>
        <TETabsPane show={colorsActive.tab1 === "tab2"}>
          Tab 2 content
        </TETabsPane>
        <TETabsPane show={colorsActive.tab1 === "tab3"}>
          Tab 3 content
        </TETabsPane>
      </TETabsContent>
    </div>
  );
}