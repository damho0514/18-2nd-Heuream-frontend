import React from "react";
import styled from "styled-components";
import { IoIosArrowDropdown } from "react-icons/io";

const SizeButton = ({ clickModal, value, name }) => {
  return (
    <HeaderSizeBtn value={value} name={name} onClick={clickModal}>
      모든 사이즈 <IoIosArrowDropdown className="arrowIcon" />
    </HeaderSizeBtn>
  );
};

const HeaderSizeBtn = styled.button`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  background-color: transparent;

  .arrowIcon {
    margin-left: 5px;
    margin-bottom: 2px;
    font-size: 25px;
  }
`;

export default SizeButton;
