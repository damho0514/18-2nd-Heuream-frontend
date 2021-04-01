import React, { useState, useEffect, useCallback } from "react";
import { GiConsoleController } from "react-icons/gi";
import styled from "styled-components";

import Nav from "../../Components/Nav/Nav";
import DetailImage from "./Component/DetailImage/DetailImage";
import DetailInfo from "./Component/DetailInfo/DetailInfo";
import DetailModal from "./Component/DetailModal/DetailModal";

const Product = () => {
  const [detailData, setDetailData] = useState("");
  const [modalToggle, setModalToggle] = useState(false);
  const [modalValue, setModalValue] = useState("");
  const [modalName, setModalName] = useState("");
  const [bidSelected, setBidSelected] = useState("판매 입찰");
  const [openTable, setOpenTable] = useState(true);
  const [buttonName, setButtonName] = useState("");

  useEffect(() => {
    fetch("data/productDetail.json")
      .then(res => res.json())
      .then(result => setDetailData(result));
  }, []);

  useEffect(() => {
    modalToggle
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [modalToggle]);

  const clickModal = e => {
    setModalValue(e.currentTarget.value);
    setModalName(e.currentTarget.name);
    setModalToggle(!modalToggle);
    if (e.currentTarget.name === "거래") {
      checkBidSelected(e);
    }
  };

  const closeModal = e => {
    setModalToggle(!modalToggle);
    setButtonName(e.currentTarget.name);
  };

  const checkTable = e => {
    setBidSelected(e.currentTarget.dataset.name);
    e.target.innerHTML === "판매 입찰"
      ? setOpenTable(true)
      : setOpenTable(false);
  };

  const checkBidSelected = e => {
    setBidSelected(e.currentTarget.name);
  };

  return (
    detailData && (
      <>
        <Nav />
        <DetailModal
          buttonName={buttonName}
          modalToggle={modalToggle}
          detailData={detailData}
          value={modalValue}
          name={modalName}
          bidSelected={bidSelected}
          closeModal={closeModal}
        />
        <Blank />
        <Container modalToggle={modalToggle}>
          <DetailContainer modalToggle={modalToggle}>
            <DetailImage detailData={detailData} />
            <DetailInfo
              detailData={detailData}
              bidSelected={bidSelected}
              openTable={openTable}
              checkTable={checkTable}
              clickModal={clickModal}
              checkBidSelected={checkBidSelected}
            />
          </DetailContainer>
        </Container>
      </>
    )
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 400px;
`;

const DetailContainer = styled.div`
  display: flex;
  width: 1200px;
  height: auto;
  padding-top: 50px;
`;

const Blank = styled.div`
  height: 90px;
`;
export default Product;
