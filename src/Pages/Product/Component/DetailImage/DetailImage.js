import React from "react";
import styled from "styled-components";
import { GiRunningShoe } from "react-icons/gi";

const DetailImage = ({ detailData }) => {
  return (
    <DetailImageContainer>
      <MainImageContent>
        <MainImage detailData={detailData} />
        <MainImageBanner>
          <GiRunningShoe className="shoeIcon" />
          <BannerContent>
            <span>KREAM 구매방법</span>
            <span className="bannerGreyText">
              구매 프로세스를 확인 후 구매해주세요.
            </span>
          </BannerContent>
        </MainImageBanner>
      </MainImageContent>
    </DetailImageContainer>
  );
};

const DetailImageContainer = styled.div`
  width: 100%;
`;

const MainImageContent = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 140px;
  width: 100%;
`;

const MainImage = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  background-image: url(${props => props.detailData.product_image_url});
  background-size: cover;

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const MainImageBanner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  margin-top: 30px;
  padding: 20px;
  background-color: white;
  border: 3px solid black;

  .shoeIcon {
    font-size: 55px;
    margin-right: 20px;
  }
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin: 3px;
  }

  .bannerGreyText {
    color: grey;
  }
`;

export default DetailImage;
