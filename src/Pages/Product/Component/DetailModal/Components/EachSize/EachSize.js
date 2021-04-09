import React from "react";
import styled from "styled-components";
import { RiBookmarkLine } from "react-icons/ri";

const EachSize = ({ size, value, price, buttonName }) => {
  return (
    <SizeContainer>
      {size}
      <IconWrapper value={value}>
        <RiBookmarkLine />
      </IconWrapper>
      <PriceWrapper value={value} buttonName={buttonName}>
        {Number(price).toLocaleString()}
      </PriceWrapper>
    </SizeContainer>
  );
};

const SizeContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  font-size: 15px;
  border: 1px solid lightgray;
  border-radius: ${props => props.theme.border.productRadius};
  cursor: pointer;
`;

const IconWrapper = styled.div`
  display: ${props => (props.value === "관심 상품 추가" ? "static" : "none")};
`;

const PriceWrapper = styled.div`
  display: ${props => (props.value === "사이즈 선택" ? "static" : "none")};
  margin-top: 5px;
  font-size: 12px;
  font-weight: 100;
  color: ${props => (props.buttonName === "구매" ? "#ef6253" : "#41b979")};
`;

export default EachSize;
