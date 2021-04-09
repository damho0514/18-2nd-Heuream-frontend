import React from "react";
import styled from "styled-components";

const InfoFooter = ({
  brand,
  modelNumber,
  bestColor,
  releaseDate,
  releasePrice,
}) => {
  return (
    <FooterContainer>
      <FooterTitle>상품 정보</FooterTitle>
      <BorderLine />
      <InfoColumn>
        <ColumnTitle>{INFO_TITLE[0]}</ColumnTitle>
        <ColumnContent>{brand}</ColumnContent>
      </InfoColumn>
      <InfoColumn>
        <ColumnTitle>{INFO_TITLE[1]}</ColumnTitle>
        <ColumnContent>{modelNumber}</ColumnContent>
      </InfoColumn>
      <InfoColumn>
        <ColumnTitle>{INFO_TITLE[2]}</ColumnTitle>
        <ColumnContent>{bestColor}</ColumnContent>
      </InfoColumn>
      <InfoColumn>
        <ColumnTitle>{INFO_TITLE[3]}</ColumnTitle>
        <ColumnContent>{releaseDate}</ColumnContent>
      </InfoColumn>
      <InfoColumn>
        <ColumnTitle>{INFO_TITLE[4]}</ColumnTitle>
        <ColumnContent>{releasePrice}</ColumnContent>
      </InfoColumn>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
`;

const FooterTitle = styled.h1`
  display: block;
  margin-top: 50px;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 600;
`;

const BorderLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: lightgray;
`;
const InfoColumn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const ColumnTitle = styled.span`
  font-weight: 300;
  color: gray;
`;

const ColumnContent = styled.span`
  font-size: 15px;
  font-weight: 400;
`;

const INFO_TITLE = ["브랜드", "모델번호", "대표색상", "출시일", "발매가"];

export default InfoFooter;
