import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { VscBookmark } from "react-icons/vsc";
import { IoBookmarkSharp } from "react-icons/io5";

function Product({
  getShop,
  is_wished,
  product_id,
  product_image_url,
  brand_image_url,
  english_name,
  price,
  size_id,
}) {
  const [modal, setModal] = useState(false);
  const [sizeList, setSizeList] = useState([]);
  // const [colorCheck, setColorCheck] = useState(is_wished);

  // const history = useHistory();

  // 찜하기 요청
  // const handleBookColor = () => {
  //   // console.log("클릭2");
  //   fetch(
  //     `http:10.58.7.188:8000/product/${product_id}?size_id=${size_id}`
  //   ).then(res => res.json);
  //   // .then(res => );
  //   getShop();
  // // };

  const handleModal = () => {
    // console.log("클릭1");
    fetch(`http://10.58.7.188:8000/product/${product_id}`, {
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.IOGSFnezOAETXOTTFMJYwb7nv6lG14FqtahkW9ATL7s",
      },
    })
      .then(res => res.json())
      .then(res => {
        setSizeList(res.result);
      });
    setModal(!modal);
  };

  const handleCloseModal = () => {
    setModal(!modal);
    getShop();
  };
  // fetch("data/commentData.json")
  //   .then(res => res.json())
  //   .then(res => setSizeList([...sizeList, ...res]));

  // fetch(`http://10.58.7.188:8000/product/${product_id}?size_id=${size_id}`, {
  //   method: "POST",
  //   headers: {
  //     Authorization:
  //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.IOGSFnezOAETXOTTFMJYwb7nv6lG14FqtahkW9ATL7s",
  //   },
  // })
  //   .then(res => res.json())
  //   .then(res => setSizeList([...sizeList, ...res.result]));

  // console.log(sizeList);

  return (
    <ProductBox>
      <Box>
        <div className="imgBox">
          <img src={product_image_url} />
        </div>
        {modal ? (
          <Modal
            modal={modal}
            handleModal={handleModal}
            handleCloseModal={handleCloseModal}
            sizeList={sizeList}
            product_image_url={product_image_url}
            english_name={english_name}
            product_id={product_id}
          />
        ) : null}
        <Title>
          <BrandBox>
            <img src={brand_image_url} />
            <span className="bookIcons">
              {is_wished ? (
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
