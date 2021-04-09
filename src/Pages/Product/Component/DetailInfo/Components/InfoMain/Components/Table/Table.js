import React from "react";
import styled from "styled-components";

import TableContent from "./Components/TableContent/TableContent";

const Table = ({
  columnTitle,
  sizeColumn,
  priceColumn,
  dateQuantityColumn,
  value,
}) => {
  return (
    <TableContainer value={value}>
      <TableContainerHeader>
        <TableRow className="headerRow">
          <TableHeader className="first">{columnTitle[0]}</TableHeader>
          <TableHeader>{columnTitle[1]}</TableHeader>
          <TableHeader>{columnTitle[2]}</TableHeader>
        </TableRow>
      </TableContainerHeader>
      <TableContainerBody>
        {sizeColumn.map((item, idx) => {
          return (
            <TableContent
              key={idx + 321}
              sizeColumn={item}
              priceColumn={Number(priceColumn[idx]).toLocaleString()}
              dateQuantityColumn={dateQuantityColumn[idx]}
            />
          );
        })}
      </TableContainerBody>
    </TableContainer>
  );
};

const TableContainer = styled.table`
  display: ${props => (props.value ? "staic" : "none")};
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: right;
  font-size: 15px;

  .first {
    text-align: left;
  }
`;

const TableContainerHeader = styled.thead`
  border-bottom: 1px solid lightgray;
`;

const TableContainerBody = styled.tbody``;

const TableHeader = styled.th`
  padding-bottom: 20px;
  font-size: 15px;
  color: gray;
`;

const TableRow = styled.tr`
  .headerRow {
    position: sticky;
  }
`;

export default Table;
