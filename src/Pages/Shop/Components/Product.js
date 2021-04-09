import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Modal from "./Modal";
import { VscBookmark } from "react-icons/vsc";
import { IoBookmarkSharp } from "react-icons/io5";

function Product({
  setBookmark,
  is_wished,
  product_id,
  product_image_url,
  brand_image_url,
  english_name,
  price,
}) {
  const [modal, setModal] = useState(false);
  const [sizeList, setSizeList] = useState([]);
  const [colorcheck, setColorCheck] = useState(false);

  const history = useHistory();

  const handleModal = () => {
    if (localStorage.getItem("access_token")) {
      fetch(`http://13.209.87.62:8000/product/${product_id}`, {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.IOGSFnezOAETXOTTFMJYwb7nv6lG14FqtahkW9ATL7s",
        },
      })
        .then(res => res.json())
        .then(res => {
          setSizeList(res.result);
          setModal(!modal);
        });
    } else {
      history.push("/login");
    }
  };

  const handleCloseModal = () => {
    setModal(!modal);
    setColorCheck(!colorcheck);
  };

  return (
    <ProductBox>
      <Box>
        <div className="imgBox">
          <img src={product_image_url} />
        </div>
        {modal ? (
          <Modal
            modal={modal}
            // handleModal={handleModal}
            handleCloseModal={handleCloseModal}
            sizeList={sizeList}
            english_name={english_name}
            product_id={product_id}
          />
        ) : null}
        <Title>
          <BrandBox>
            <img src={brand_image_url} />
            <span className="bookIcons">
              {is_wished || colorcheck ? (
                <IoBookmarkSharp />
              ) : (
                <VscBookmark onClick={handleModal} />
              )}
            </span>
          </BrandBox>
          <p className="engName">{english_name}</p>
          <PriceTitle>{price}원</PriceTitle>
          <PurchseTitle>즉시구매가</PurchseTitle>
        </Title>
      </Box>
    </ProductBox>
  );
}

const ProductBox = styled.div`
  width: 280px;
  height: 440px;

  margin: 30px auto 0;
  .bookIcons {
    transform: translateX(30px);
    font-size: 24px;
  }
`;

const Box = styled.div`
  border-radius: ${props => props.theme.border.productRadius};
  background-color: ${props => props.theme.colors.backgroundPink};
  height: 260px;

  .imgBox {
    width: 220px;
    margin: 30px auto;
  }
`;

const BrandBox = styled.div`
  transform: translate(10px, 25px);
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  img {
    width: auto;
    height: 20px;
  }
`;

const Title = styled.div`
  width: 235px;
  margin-top: -20px;
  .engName {
    padding: 20px 0 0;
    height: 55px;
    transform: translate(4px, 12px);
  }
`;

const PriceTitle = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 3;
  bottom: 15px;
  transform: translate(4px, 12px);
`;
const PurchseTitle = styled.p`
  font-size: 11px;
  color: #22222280;
  transform: translate(4px, 10px);
`;
export default Product;
