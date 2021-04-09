import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RiBookmarkLine } from "react-icons/ri";
import { IoCaretDown, IoCaretUp } from "react-icons/io5";

import DetailBtn from "../../../DetailBtn/DetailBtn";
import SizeButton from "../SizeButton/SizeButton";

const InfoHeader = ({ detailData, clickModal }) => {
  const [recentPrice, setRecentPrice] = useState(
    detailData.bidded[detailData.bidded.length - 1].bidded_price
  );
  const [secondPrice, setSecondPrice] = useState("");

  useEffect(() => {
    for (let i = detailData.bidded.length - 2; i <= 0; i--) {
      if (recentPrice !== detailData.bidded[i].bidded_price) {
        setSecondPrice(detailData.bidded[i].bidded_price);
      }
    }
  }, []);

  return (
    <HeaderContainer>
      <HeaderTitle>
        <TitleContent>
          <h2>{detailData.english_name}</h2>
          <span>{detailData.korean_name}</span>
        </TitleContent>
        <BookMarkWrapper
          name={MODAL_NAME[0].name}
          value={MODAL_NAME[0].value}
          onClick={clickModal}
        >
          <RiBookmarkLine />
        </BookMarkWrapper>
      </HeaderTitle>
      <HeaderSize>
        <ColumnTitle>사이즈</ColumnTitle>
        <SizeButton
          name={MODAL_NAME[1].name}
          value={MODAL_NAME[1].value}
          clickModal={clickModal}
        />
      </HeaderSize>
      <BorderLine />
      <HeaderRecentPrice>
        <ColumnTitle>최근 거래가</ColumnTitle>
        <PriceColumn>
          <MainPrice>{Number(recentPrice).toLocaleString()}원</MainPrice>
          <PriceRatio recentprice={recentPrice} secondPrice={secondPrice}>
            {recentPrice > secondPrice ? <IoCaretUp /> : <IoCaretDown />}
            &nbsp;
            {Math.abs(recentPrice - secondPrice)}원 &nbsp;(
            {recentPrice > secondPrice ? "+" : ""}
            {
              -(
                1 -
                parseFloat(
                  `${
                    recentPrice > secondPrice
                      ? recentPrice / secondPrice
                      : secondPrice / recentPrice
                  }`
                )
              ).toFixed(1)
            }
            %)
          </PriceRatio>
        </PriceColumn>
      </HeaderRecentPrice>
      <BtnContainer>
        <DetailBtn
          price={Number(detailData.direct_buy_price).toLocaleString()}
          name={MODAL_NAME[2].name}
          value={MODAL_NAME[2].value}
          clickModal={clickModal}
        />
        <DetailBtn
          price={Number(detailData.direct_sale_price).toLocaleString()}
          name={MODAL_NAME[3].name}
          value={MODAL_NAME[3].value}
          clickModal={clickModal}
        />
      </BtnContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BorderLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: lightgray;
`;

const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  margin-bottom: 30px;
`;
const BookMarkWrapper = styled.button`
  font-size: 24px;
  background-color: transparent;
`;

const TitleContent = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  span {
    font-size: 16px;
    color: grey;
  }
`;

const HeaderSize = styled.div`
  ${props => props.theme.horizonColumn};
  align-items: center;
  margin: 20px 0px;
`;

const ColumnTitle = styled.span`
  font-size: 14px;
  color: grey;
`;

const HeaderRecentPrice = styled.div`
  ${props => props.theme.horizonColumn};
  align-items: top;
  margin: 20px 0px;
`;

const PriceColumn = styled.div`
  ${props => props.theme.verticalColumn};
  letter-spacing: 1px;
`;

const MainPrice = styled.span`
  margin-bottom: 5px;
  text-align: right;
  font-size: 20px;
  font-weight: 600;
`;

const PriceRatio = styled.span`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: ${props =>
    props.recentPrice > props.secondPrice ? "#ef6253" : "#41b979"};
`;

const BtnContainer = styled.div`
  ${props => props.theme.horizonColumn}
`;

const MODAL_NAME = [
  {
    name: "관심",
    value: "관심 상품 추가",
  },
  {
    name: "구매",
    value: "사이즈 선택",
  },
  {
    name: "구매",
    value: "사이즈 선택",
  },
  {
    name: "판매",
    value: "사이즈 선택",
  },
];

export default InfoHeader;
