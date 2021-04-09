import React from "react";
import styled from "styled-components";

const TabMenu = ({ value, name, clickEvent, selected }) => {
  const clickTab = e => {
    clickEvent(e);
  };
  return (
    <TabItem
      data-name={name}
      data-value={value}
      onClick={clickTab}
      selected={selected}
    >
      {name}
    </TabItem>
  );
};

const TabItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 3px 5px;
  background-color: ${props =>
    props["data-name"] === props.selected ? "white" : "transparent"};
  border-radius: 5px;
  cursor: pointer;
`;

export default TabMenu;
