import { css } from "styled-components";

const colors = {
  backgroundGrey: "#F4F4F4",
  backgroundPink: "#F6EEED",
  backgroundBlue: "#EBF0F5",
  backgroundVanilla: "#F1F1EA",
};

const border = {
  productRadius: "12px",
  otherRadius: "16px",
  commonBorder: "1px solid #ebebeb",
};

const horizonColumn = css`
  display: flex;
  justify-content: space-between;
`;

const verticalColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const theme = {
  colors,
  border,
  horizonColumn,
  verticalColumn,
};

export default theme;
