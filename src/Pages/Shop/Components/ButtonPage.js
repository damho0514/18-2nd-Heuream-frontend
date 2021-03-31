import React from "react";
import styled from "styled-components";

function ButtonPage({ handleBtn }) {
  return <>{<ClickBtn onClick={handleBtn}>더보기</ClickBtn>}</>;
}

const ClickBtn = styled.div`
  border: 1px solid black;
  width: 120px;
  height: 45px;
  border-radius: 12px;
  margin-top: 50px;
  margin-left: 48%;
  text-align: center;
  line-height: 3;
  font-size: 15px;
  cursor: pointer;
`;

export default ButtonPage;
