import React from "react";
import styled from "styled-components";

const TableContent = ({ sizeColumn, priceColumn, dateQuantityColumn }) => {
  return (
    <TableRow>
      <TableData className="first">{sizeColumn}</TableData>
      <TableData>{priceColumn} 원</TableData>
      <TableData>{dateQuantityColumn}</TableData>
    </TableRow>
  );
};

const TableRow = styled.tr``;

const TableData = styled.td`
  padding: 10px 0px;

  &:first-child {
    width: 50%;
  }

  &:nth-child(3) {
    width: 25%;
  }
`;

export default TableContent;
