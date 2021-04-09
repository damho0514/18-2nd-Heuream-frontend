import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";

import EachSize from "./Components/EachSize/EachSize";
import TabMenu from "../TabMenu/TabMenu";
import Table from "../DetailInfo/Components/InfoMain/Components/Table/Table";

const DetailModal = ({
  detailData,
  modalToggle,
  value,
  name,
  bidSelected,
  buttonName,
  closeModal,
}) => {
  const [sizeList, setSizeList] = useState([]);
  const [biddedSize, setBiddedSize] = useState([]);
  const [biddedPrice, setBiddedPrice] = useState([]);
  const [biddedDate, setBiddedDate] = useState([]);
  const [buySize, setBuySize] = useState([]);
  const [buyPrice, setBuyPrice] = useState([]);
  const [buyQuantity, setBuyQuantity] = useState([]);
  const [saleSize, setSaleSize] = useState([]);
  const [salePrice, setSalePrice] = useState([]);
  const [saleQuantity, setSaleQuantity] = useState([]);
  const [modalSelected, setModalSelected] = useState("");
  const [modalOpenTable, setModalOpenTable] = useState([]);

  useEffect(() => {
    if (buttonName === "관심" || buttonName === "구매" || buttonName === "판매")
      fetch("http://10.58.1.71:8000/bidding/buy?product_id=161", {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.IOGSFnezOAETXOTTFMJYwb7nv6lG14FqtahkW9ATL7s",
        },
      })
        .then(res => res.json())
        .then(res => setSizeList(res));
  }, []);

  useEffect(() => {
    let query = buttonName === "구매" ? "result.buy_bidding" : "result";

    setSizeList(sizeList[query]);
  });

  // .`${buttonName === "구매" ? result["buy_bidding"] : result}`
  // res.result

  useEffect(() => {
    if (bidSelected === "거래") {
      setModalSelected("최근 거래");
    } else {
      setModalSelected(bidSelected);
    }
  }, [bidSelected]);

  useEffect(() => {
    let sizeList = [];
    let priceList = [];
    let dateList = [];
    for (let i = 0; i < detailData.bidded.length; i++) {
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
    for (let i = 0; i < detailData.buy_bidding.length; i++) {
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
    for (let i = 0; i < detailData.sale_bidding.length; i++) {
      sizeList.push(detailData.sale_bidding[i].sale_bidding_size);
      priceList.push(detailData.sale_bidding[i].sale_bidding_price);
      dateList.push(detailData.sale_bidding[i].sale_bidding_quantity);
    }
    setSaleSize(sizeList);
    setSalePrice(priceList);
    setSaleQuantity(dateList);
  }, []);

  useEffect(() => {
    modalSelected === "판매 입찰"
      ? setModalOpenTable([false, true, false])
      : modalSelected === "구매 입찰"
      ? setModalOpenTable([false, false, true])
      : setModalOpenTable([true, false, false]);
  }, [modalSelected]);

  const clickModalTab = e => {
    setModalSelected(e.target.dataset.name);
    checkTableInModal(e);
  };

  const checkTableInModal = e => {
    setModalOpenTable([false, false, false]);
    e.target.dataset.name === "최근 거래"
      ? setModalOpenTable([true, false, false])
      : e.target.dataset.name === "판매 입찰"
      ? setModalOpenTable([false, true, false])
      : setModalOpenTable([false, false, true]);
  };

  return (
    sizeList.length !== 0 && (
      <ModalBackground modalToggle={modalToggle}>
        <ModalContainer>
          <GridContainer value={value}>
            <TitleColumn>{value}</TitleColumn>
            <SubTitleColumn value={value}>즉시 {name}가(원)</SubTitleColumn>
            <ProductColumn value={value}>
              <ProductImg src={detailData.product_image_url} />
              <ProductName>
                <EnName>{detailData.english_name}</EnName>
                <KoName>{detailData.korean_name}</KoName>
              </ProductName>
            </ProductColumn>
            <Border />
            <SizeList value={value}>
              {sizeList.map((size, idx) => {
                return (
                  <EachSize
                    key={idx}
                    buttonName={buttonName}
                    size={size.size}
                    price={
                      size[
                        buttonName === "구매"
                          ? "buy_bidding_price"
                          : "sale_bidding_price"
                      ]
                    }
                    value={value}
                  />
                );
              })}
            </SizeList>
            <ModalFooter>
              <FooterConfirmBtn onClick={closeModal}>확인</FooterConfirmBtn>
            </ModalFooter>
          </GridContainer>
          <TableContainer value={value}>
            <TitleColumn>
              {value} <GrClose className="closeIcon" onClick={closeModal} />
            </TitleColumn>
            <ProductColumn value={value}>
              <ProductImg src={detailData.product_image_url} />
              <ProductName>
                <EnName>{detailData.english_name}</EnName>
                <KoName>{detailData.korean_name}</KoName>
              </ProductName>
            </ProductColumn>
            <TabList>
              {MODAL_MENU_TAB.map((menu, idx) => {
                return (
                  <TabMenu
                    key={idx}
                    name={menu}
                    value={idx}
                    selected={modalSelected}
                    clickEvent={clickModalTab}
                  />
                );
              })}
            </TabList>
            <TableColumn>
              <Table
                value={modalOpenTable[0]}
                columnTitle={BIDDED_TITLE}
                sizeColumn={biddedSize}
                priceColumn={biddedPrice}
                dateQuantityColumn={biddedDate}
              />
              <Table
                value={modalOpenTable[1]}
                columnTitle={SALE_BIDDING}
                sizeColumn={buySize}
                priceColumn={buyPrice}
                dateQuantityColumn={buyQuantity}
              />
              <Table
                value={modalOpenTable[2]}
                columnTitle={BUY_BIDDING}
                sizeColumn={saleSize}
                priceColumn={salePrice}
                dateQuantityColumn={saleQuantity}
              />
            </TableColumn>
          </TableContainer>
        </ModalContainer>
      </ModalBackground>
    )
  );
};

const ModalBackground = styled.div`
  display: ${props => (props.modalToggle ? "static" : "none")};
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1001;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
  height: 530px;
  padding: 20px;
  background-color: white;
  border-radius: ${props => props.theme.border.productRadius};
`;

const GridContainer = styled.div`
  display: ${props => (props.value === "시세" ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const TitleColumn = styled.h1`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 600;

  .closeIcon {
    position: absolute;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
  }
`;

const SubTitleColumn = styled.h4`
  display: ${props => (props.value === "관심 상품 추가" ? "none" : "static")};
  margin-bottom: 20px;
  font-size: 13px;
  color: gray;
`;

const ProductColumn = styled.div`
  display: ${props =>
    props.value === "관심 상품 추가" || props.value === "시세"
      ? "flex"
      : "none"};
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const ProductImg = styled.img`
  width: 70px;
  height: 70px;
`;

const ProductName = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const EnName = styled.span`
  margin: 3px;
`;

const KoName = styled.span`
  margin: 3px;
  font-size: 12px;
  color: gray;
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  background-color: lightgray;
`;

const SizeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  width: 100%;
  padding: 15px;
  text-align: left;
  overflow-y: scroll;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const FooterConfirmBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 50px;
  margin-top: 15px;
  padding: 10px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: ${props => props.theme.border.productRadius};
`;

const TableContainer = styled.div`
  display: ${props => (props.value === "시세" ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const TableColumn = styled.div`
  width: 100%;
  padding: 0px 20px;
  overflow-y: scroll;
`;

const TabList = styled.div`
  display: flex;
  width: 100%;
  height: 32px;
  background-color: ${props => props.theme.colors.backgroundGrey};
  border-radius: 5px;
`;

const MODAL_MENU_TAB = ["최근 거래", "판매 입찰", "구매 입찰"];
const BIDDED_TITLE = ["사이즈", "거래가", "거래일"];
const SALE_BIDDING = ["사이즈", "판매 희망가", "수량"];
const BUY_BIDDING = ["사이즈", "구매 희망가", "수량"];

export default DetailModal;
