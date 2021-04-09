import React from "react";
import styled from "styled-components";

import InfoHeader from "./Components/InfoHeader/InfoHeader";
import InfoMain from "./Components/InfoMain/InfoMain";
import InfoFooter from "./Components/InfoFooter/InfoFooter";

const DetailInfo = ({
  detailData,
  bidSelected,
  openTable,
  checkTable,
  clickModal,
  checkBidSelected,
}) => {
  return (
    detailData && (
      <DetailInfoContainer>
        <InfoHeader detailData={detailData} clickModal={clickModal} />
        <InfoMain
          detailData={detailData}
          bidSelected={bidSelected}
          openTable={openTable}
          checkTable={checkTable}
          clickModal={clickModal}
          checkBidSelected={checkBidSelected}
        />
        <InfoFooter
          brand={detailData.brand}
          modelNumber={detailData.model_number}
          bestColor={detailData.best_color}
          releaseDate={detailData.release_date}
          releasePrice={detailData.release_price}
        />
      </DetailInfoContainer>
    )
  );
};

const DetailInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 60px;
`;

export default DetailInfo;
