import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Nav from "../../Components/Nav/Nav";
import ProductList from "../Shop/Components/ProductList";
import ButtonPage from "../Shop/Components/ButtonPage";
import { FaUndo } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiArrowUpDownLine } from "react-icons/ri";

const LIMIT = 20;
function Shop() {
  const dropdownRef = useRef(null);
  const [isSugestActive, setIsSugestActive] = useState(dropdownRef, false); //인기 드롭다운
  const [isActive, setIsActive] = useState(false); //첫번째 드롭
  const [isSizeActive, setIsSizeActive] = useState(false); //두번째 드롭다운
  const [isPriceActive, setIsPriceActive] = useState(false); //세번째 드롭다운
  const [shop, setShop] = useState([]);
  const [curruntIdx, setCurruntIdx] = useState(1);
  const [solt, setSolt] = useState("인기순");
  const [menusolt, setMenusolt] = useState("Popular");

  const handleBtn = () => {
    setCurruntIdx(curruntIdx + 1);

    getShopList();
  };

  const handleFilter = () => {
    setIsActive(!isActive);
  };
  const handleSizeFilter = () => {
    setIsSizeActive(!isSizeActive);
  };

  const handlePrice = () => {
    setIsPriceActive(!isPriceActive);
  };
  const handleSuggest = () => {
    setIsSugestActive(!isSugestActive);
  };
  const handleSolt = e => {
    setSolt(e.target.dataset.type);
    setMenusolt(e.target.dataset.name);
  };

  const getShopList = () => {
    const offset = curruntIdx;
    const query = `?limit=${LIMIT}&offset=${offset}`;
    fetch(`http://13.209.87.62:8000/product${query}`)
      .then(res => res.json())
      .then(res => setShop([...shop, ...res.result]));
  };

  useEffect(() => {
    setMenusolt();
    fetch(`http://13.209.87.62:8000/product?sort=${menusolt}`, {
      method: "GET",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.IOGSFnezOAETXOTTFMJYwb7nv6lG14FqtahkW9ATL7s",
      },
    })
      .then(res => res.json())
      .then(res => setShop([...res.result]));
  }, [menusolt]);

  const getShop = () => {
    fetch("http://13.209.87.62:8000/product", {
      method: "GET",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.IOGSFnezOAETXOTTFMJYwb7nv6lG14FqtahkW9ATL7s",
      },
    })
      .then(res => res.json())
      .then(res => setShop([...res.result]));
  };

  useEffect(() => {
    getShop();
  }, []);

  const sortList = [
    { title: "인기순", value: "Popular" },
    { title: "프리미엄순", value: "Premium" },
    { title: "즉시 구매가순", value: "Newest" },
    { title: "발매일순", value: "Price" },
  ];

  return (
    shop.length !== 0 && (
      <section>
        <FilterBox>
          <ResetBox>
            <p className="resetIcons">
              <FaUndo />
            </p>
            <span className="resetTitle">초기화</span>
          </ResetBox>
          <CategoryBox>
            <Title>스니커즈</Title>
            <span className="rowIcons">
              <MdKeyboardArrowDown />
            </span>
          </CategoryBox>
          <BrandContents>
            <CategoryBox onClick={handleFilter}>
              <Title>모든 브랜드</Title>
              <span className="rowIcons">
                <MdKeyboardArrowDown />
              </span>
              <nav className={`menu ${isActive ? "active" : ""}`}>
                <ul>
                  <li className="allBrand">모든 브랜드</li>
                  <li>Jordan</li>
                  <li>Nike</li>
                  <li>Adidias</li>
                  <li>Converse</li>
                  <li>New Balance</li>
                </ul>
              </nav>
            </CategoryBox>
          </BrandContents>
          <SizeContents>
            <CategoryBox onClick={handleSizeFilter}>
              <Title>모든 사이즈</Title>
              <span className="rowIcons">
                <MdKeyboardArrowDown />
              </span>
              <nav className={`SizeMenu ${isSizeActive ? "SizeActive" : ""}`}>
                <ul>
                  <li className="allBrand">모든 사이즈</li>
                  <li>215mm</li>
                  <li>220mm</li>
                  <li>225mm</li>
                  <li>230mm</li>
                  <li>235mm</li>
                  <li>240mm</li>
                  <li>245mm</li>
                  <li>250mm</li>
                  <li>255mm</li>
                  <li>260mm</li>
                  <li>265mm</li>
                  <li>270mm</li>
                  <li>275mm</li>
                  <li>280mm</li>
                  <li>285mm</li>
                  <li>290mm</li>
                  <li>295mm</li>
                  <li>300mm</li>
                </ul>
              </nav>
            </CategoryBox>
          </SizeContents>
          <CategoryBox>
            <PriceContents onClick={handlePrice}>
              <Title>모든 가격</Title>
              <span className="rowIcons">
                <MdKeyboardArrowDown />
              </span>
              <nav
                ref={dropdownRef}
                className={`priceMenu ${isPriceActive ? "priceActive" : ""}`}
              >
                <ul>
                  <li className="allBrand">모든 가격</li>
                  <li>10만원 이하</li>
                  <li>10만원 - 30만원 이하</li>
                  <li>30만원 - 50만원 이하</li>
                  <li>50만원 이상</li>
                </ul>
              </nav>
            </PriceContents>
            <RightBox>
              <SugestContents onClick={handleSuggest}>
                {/* 인기순 */}
                {solt}
                <RiArrowUpDownLine className="suggestIcons" />
              </SugestContents>
              <nav className={`sugMenu ${isSugestActive ? "sugActive" : ""}`}>
                <ul>
                  {sortList.map((el, idx) => (
                    <li
                      key={idx}
                      name={el.title}
                      data-type={el.title}
                      onClick={handleSolt}
                      data-name={el.value}
                    >
                      {el.title}
                    </li>
                  ))}
                </ul>
              </nav>
            </RightBox>
          </CategoryBox>
        </FilterBox>
        <ProductList shop={shop} solt={solt} getShop={getShop} />
        <ButtonPage curruntIdx={curruntIdx} handleBtn={handleBtn} />
      </section>
    )
  );
}
const BoxContents = styled.div`
  height: 90px;
`;

const BrandContents = styled.div`
  position: relative;

  .menu {
    background: #ffffff;
    position: absolute;
    top: 60px;
    width: 180px;
    height: 210px;
    box-shadow: 0 0px 0px 1px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease;
  }
  .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translate(0px, -11px);
  }
  .menu ul {
    line-height: 2.5;
    margin-left: 15px;
    color: #222222cc;
    .allBrand {
      font-weight: bold;
    }
  }
  .menu li a {
    color: #333333;
    padding: 15px 20px;
    display: block;
  }
`;

const RightBox = styled.div`
  width: 100px;
  margin-left: 1000px;
  margin-top: 10px;
  position: relative;
  .sugMenu {
    background: #ffffff;
    position: absolute;
    top: 60px;
    width: 180px;
    height: 210px;
    box-shadow: 0 0px 0px 1px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease;
  }
  .sugActive {
    opacity: 1;
    visibility: visible;
    transform: translateY(-34px);
    width: 220px;
    padding: 10px;
  }
  .sugMenu ul {
    font-size: 11px;
    letter-spacing: -0.07px;
    color: rgba(34, 34, 34, 0.8);
    line-height: 2;
    .allBrand {
      font-weight: bold;
      font-size: 13px;
      color: #222222cc;
    }
  }
  .sugMenu p {
    font-size: 10px;
    letter-spacing: -0.06px;
    color: rgba(34, 34, 34, 0.5);
  }
`;

const SugestContents = styled.p`
  width: 100px;
  display: flex;
  margin-left: 150px;
  margin-top: 15px;
  color: #959595;
  font-size: 13px;
`;
const PriceContents = styled.div`
  position: relative;
  .priceMenu {
    background: #ffffff;
    position: absolute;
    top: 60px;
    width: 180px;
    height: 210px;
    overflow: hidden;
    overflow: auto;
    box-shadow: 0 0px 0px 1px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease;
  }

  .priceActive {
    opacity: 1;
    visibility: visible;
    transform: translateY(-11px);
  }
  .priceMenu ul {
    line-height: 2.5;
    margin-left: 15px;
    color: #222222cc;
    .allBrand {
      font-weight: bold;
    }
  }
  .priceMenu li a {
    color: #333333;
    padding: 15px 20px;
    display: block;
  }
`;
const SizeContents = styled.div`
  position: relative;

  .SizeMenu {
    background: #ffffff;
    position: absolute;
    top: 60px;
    width: 180px;
    height: 210px;
    overflow: hidden;
    overflow: auto;
    box-shadow: 0 0px 0px 1px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease;
  }
  .SizeActive {
    opacity: 1;
    visibility: visible;
    transform: translate(0px, -11px);
  }
  .SizeMenu ul {
    line-height: 2.5;
    margin-left: 15px;
    color: #222222cc;
    .allBrand {
      font-weight: bold;
    }
  }
  .SizeMenu li a {
    color: #333333;
    padding: 15px 20px;
    display: block;
  }
`;

const FilterBox = styled.div`
  width: 100%;
  position: fixed;
  z-index: 90;
  border: 1px solid #ebebeb;
  background-color: #fff;
  height: 50px;
  display: flex;
`;

const ResetBox = styled.div`
  border-left: 1px solid #ebebeb;
  width: 120px;
  height: 50px;
  cursor: pointer;
  .resetIcons {
    position: absolute;
    font-size: 13px;
    transform: rotateY(180deg);
    width: 55px;
    margin-top: 15px;
    font-weight: 1px;
  }
  .resetTitle {
    font-size: 13px;
    position: absolute;
    transform: translate(65px, 15px);
    color: #222222cc;
  }
`;

const CategoryBox = styled.div`
  border-right: 1px solid #ebebeb;
  border-left: 1px solid #ebebeb;
  width: 182px;
  height: 50px;
  cursor: pointer;
  .rowIcons {
    color: rgb(187, 187, 187);
    position: absolute;
    font-size: 25px;
    transform: translate(140px, 10px);
  }
`;

const Title = styled.span`
  font-size: 13px;
  position: absolute;
  transform: translate(15px, 15px);
  color: #222222cc;
`;

export default Shop;
