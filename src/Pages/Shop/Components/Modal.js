import React from "react";
import styled from "styled-components";
import ModalChild from "../Components/ModalChild";

function Modal({ english_name, product_id, sizeList, handleCloseModal }) {
  return (
    <MainConteiner>
      <InnerConteiner>
        <Title>관심상품 추가</Title>
        <Engname>{english_name}</Engname>
        <Border></Border>
        <GridBox>
          {sizeList.map((el, idx) => (
            <ModalChild
              key={idx}
              size_id={el.size_id}
              size_name={el.size_name}
              product_id={product_id}
            />
          ))}
        </GridBox>
        <Closed onClick={handleCloseModal}>확인</Closed>
      </InnerConteiner>
    </MainConteiner>
  );
}
export default Modal;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 130px);
  margin-left: 25px;
  height: 300px;
  overflow: hidden;
  overflow: auto;
`;

const Closed = styled.div`
  border: 1px solid black;
  width: 120px;
  height: 45px;
  border-radius: 12px;
  margin-left: 160px;
  text-align: center;
  line-height: 3;
  font-size: 15px;
  cursor: pointer;
  margin-top: 20px;
  position: absolute;
`;

const Border = styled.div`
  border-bottom: ${props => props.theme.border.commonBorder};
  height: 5;
  height: 32px;
`;
const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const MainConteiner = styled.div`
  z-index: 1001;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(34, 34, 34, 0.5);
`;
const InnerConteiner = styled.div`
  border-radius: ${props => props.theme.border.otherRadius};
  width: 440px;
  height: 530px;
  background-color: white;
`;

// const SIZE = [
//   { id: 1, size: 220 },
//   { id: 2, size: 225 },
//   { id: 3, size: 230 },
//   { id: 4, size: 235 },
//   { id: 5, size: 240 },
//   { id: 6, size: 245 },
//   { id: 7, size: 250 },
//   { id: 8, size: 255 },
//   { id: 9, size: 255 },
//   { id: 10, size: 260 },
//   { id: 11, size: 265 },
//   { id: 12, size: 270 },
//   { id: 13, size: 275 },
//   { id: 14, size: 280 },
//   { id: 15, size: 285 },
//   { id: 16, size: 290 },
//   { id: 17, size: 295 },
//   { id: 18, size: 300 },
// ];
