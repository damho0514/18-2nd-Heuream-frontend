import React from "react";
import styled from "styled-components";

const DetailBtn = ({ clickModal, name, value, price }) => {
  return (
    <>
      <SeeMoreBtn name={name} value={value} onClick={clickModal}>
        {name}내역 더보기
      </SeeMoreBtn>
      <DetailBtnContainer name={name} value={value} onClick={clickModal}>
        <BtnLeftColumn>{name}</BtnLeftColumn>
        <BtnRightColumn>
          <RightColumnPrice>{price}원</RightColumnPrice>
          <RightColumnText>즉시 {name}가</RightColumnText>
        </BtnRightColumn>
      </DetailBtnContainer>
    </>
  );
};

const DetailBtnContainer = styled.button`
  display: ${props =>
    props.name === "거래" || props.name === "입찰" ? "none" : "flex"};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 5px;
  background-color: ${props => (props.name === "판매" ? "#41b979" : "#ef6253")};
  border-radius: ${props => props.theme.border.otherRadius};
`;
const BtnLeftColumn = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 60px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  border-right: 0.5px solid rgba(0, 0, 0, 0.1);
`;
const BtnRightColumn = styled.div`
  ${props => props.theme.verticalColumn}
  width: 80%;
  margin-left: 10px;
  text-align: left;
`;

const RightColumnPrice = styled.div`
  margin-bottom: 3px;
  font-size: 15px;
  font-weight: 600;
  color: white;
`;

const RightColumnText = styled.div`
  font-size: 11px;
  color: white;
`;

const SeeMoreBtn = styled.button`
  display: ${props =>
    props.name === "거래" || props.name === "입찰" ? "flex" : "none"};
  justify-content: center;
  height: auto;
  padding: 12px;
  font-size: 15px;
  background-color: transparent;
  border: 1px solid lightgray;
  border-radius: ${props => props.theme.border.otherRadius};
`;

export default DetailBtn;
