import React, { useState, useEffect } from "react";
import { IoMdExit } from "react-icons/io";
import styled from "styled-components";

import TabMenu from "../../../TabMenu/TabMenu";
import DetailBtn from "../../../DetailBtn/DetailBtn";
import Graph from "./Components/Graph/Graph";
import Table from "./Components/Table/Table";

const InfoMain = ({
  detailData,
  bidSelected,
  openTable,
  checkTable,
  clickModal,
}) => {
  const [termKey, setTermKey] = useState(7889400000);
  const [dataByTerm, setDataByTerm] = useState([]);
  const [termSelected, setTermSelected] = useState("3개월");

  const [biddedSize, setBiddedSize] = useState([]);
  const [biddedPrice, setBiddedPrice] = useState([]);
  const [biddedDate, setBiddedDate] = useState([]);
  const [buySize, setBuySize] = useState([]);
  const [buyPrice, setBuyPrice] = useState([]);
  const [buyQuantity, setBuyQuantity] = useState([]);
  const [saleSize, setSaleSize] = useState([]);
  const [salePrice, setSalePrice] = useState([]);
  const [saleQuantity, setSaleQuantity] = useState([]);

  useEffect(() => {
    let sizeList = [];
    let priceList = [];
    let dateList = [];
    for (let i = 0; i < 4; i++) {
      sizeList.push(detailData.bidded[i].bidded_size);
      priceList.push(detailData.bidded[i].bidded_price);
      dateList.push(detailData.bidded[i].bidded_date);
    }
    setBiddedSize(sizeList);
    setBiddedPrice(priceList);
    setBiddedDate(dateList);
  }, []);

  useEffect(() => {
    let sizeList = [];
    let priceList = [];
    let dateList = [];
    for (let i = 0; i < 4; i++) {
      sizeList.push(detailData.buy_bidding[i].buy_bidding_size);
      priceList.push(detailData.buy_bidding[i].buy_bidding_price);
      dateList.push(detailData.buy_bidding[i].buy_bidding_quantity);
    }
    setBuySize(sizeList);
    setBuyPrice(priceList);
    setBuyQuantity(dateList);
  }, []);

  useEffect(() => {
    let sizeList = [];
    let priceList = [];
    let dateList = [];
    for (let i = 0; i < 4; i++) {
      sizeList.push(detailData.sale_bidding[i].sale_bidding_size);
      priceList.push(detailData.sale_bidding[i].sale_bidding_price);
      dateList.push(detailData.sale_bidding[i].sale_bidding_quantity);
    }
    setSaleSize(sizeList);
    setSalePrice(priceList);
    setSaleQuantity(dateList);
  }, []);

  useEffect(() => {
    filterDataByTerm();
  }, [termKey]);

  const checkTerm = e => {
    setTermSelected(e.currentTarget.dataset.name);
    setTermKey(e.currentTarget.dataset.value);
  };

  const filterDataByTerm = () => {
    let filtered = detailData.bidded.filter(data => {
      return (
        Date.parse("20" + data.bidded_date) >= Date.parse(new Date()) - termKey
      );
    });
    setDataByTerm(filtered);
  };

  return (
    detailData && (
      <MainContainer>
        <MainTitle>체결 거래</MainTitle>
        <TabList>
          {TERM_VALUE.map((term, idx) => {
            return (
              <TabMenu
                key={idx}
                name={term[0]}
                value={Number(term[1])}
                selected={termSelected}
                clickEvent={checkTerm}
              />
            );
          })}
        </TabList>
        <Graph chartData={dataByTerm} />
        <Table
          value={true}
          columnTitle={BIDDED_TITLE}
          sizeColumn={biddedSize}
          priceColumn={biddedPrice}
          dateQuantityColumn={biddedDate}
        />
        <DetailBtn
          name={MODAL_NAME[0].name}
          value={MODAL_NAME[0].value}
          clickModal={clickModal}
        />
        <MainTitle>입찰 내역</MainTitle>
        <TabList>
          {BIDDING_VALUE.map((bidding, idx) => {
            return (
              <TabMenu
                key={idx + 10}
                name={bidding}
                value={idx}
                selected={bidSelected}
                clickEvent={checkTable}
              />
            );
          })}
        </TabList>
        <Table
          value={openTable}
          columnTitle={SALE_BIDDING}
          sizeColumn={saleSize}
          priceColumn={salePrice}
          dateQuantityColumn={saleQuantity}
        />
        <Table
          value={!openTable}
          columnTitle={BUY_BIDDING}
          sizeColumn={buySize}
          priceColumn={buyPrice}
          dateQuantityColumn={buyQuantity}
        />
        <DetailBtn
          name={MODAL_NAME[1].name}
          value={MODAL_NAME[1].value}
          clickModal={clickModal}
        />
      </MainContainer>
    )
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const MainTitle = styled.h1`
  display: block;
  margin-top: 50px;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 600;
`;

const TabList = styled.div`
  display: flex;
  width: 100%;
  height: 32px;
  margin-bottom: 10px;
  background-color: ${props => props.theme.colors.backgroundGrey};
  border-radius: 5px;
`;

const TERM_VALUE = [
  ["1개월", "2629800000"],
  ["3개월", "7889400000"],
  ["6개월", "15778800000"],
  ["1년", "31557600000"],
];
const BIDDING_VALUE = ["판매 입찰", "구매 입찰"];
const BIDDED_TITLE = ["사이즈", "거래가", "거래일"];
const SALE_BIDDING = ["사이즈", "판매 희망가", "수량"];
const BUY_BIDDING = ["사이즈", "구매 희망가", "수량"];

const MODAL_NAME = [
  {
    name: "거래",
    value: "시세",
  },
  {
    name: "입찰",
    value: "시세",
  },
];

export default InfoMain;
