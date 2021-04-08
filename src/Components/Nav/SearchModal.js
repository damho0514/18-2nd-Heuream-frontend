import React from "react";
import SearchDataList from "./SearchDataList";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
// `http://127.0.0.1:8000/product/search?q=${keyword}`
// "data/SearchList.json"

class SearchModal extends React.Component {
  constructor() {
    super();
    this.state = {
      keyWord: "",
      keyWordList: [],
    };
  }

  keyWordInput = e => {
    this.setState({
      keyWord: e.target.value,
    });
    this.filterKeyword(e);
  };

  // keyWordDelete = () => {
  //   this.setState({
  //     keyWord: "",
  //   });
  // };

  filterKeyword = e => {
    let keyword = e.target.value;
    if (keyword === "") {
      keyword = "나이키";
    }
    fetch(`http://10.58.7.188:8000/product/search?q=${keyword}`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          keyWordList: res.result,
        })
      );
  };

  render() {
    return (
      <WrapSearchModal>
        <SearchWrap>
          <FaSearch size="30" color="lightgray" />
          <SearchInput
            type="text"
            placeholder="브랜드명, 모델명, 모델번호 등"
            onChange={this.keyWordInput}
            value={this.state.keyWord}
          />
          {this.props.modalOn ? (
            <CancleBtn onClick={this.props.handleSearchModal}>취소</CancleBtn>
          ) : null}
        </SearchWrap>
        {this.state.keyWord ? (
          <SearchDataList keyWordList={this.state.keyWordList} />
        ) : (
          <ImgArea>
            <BrandList>
              {BRANDLIST.map(brand => (
                <Brand id={brand.id} key={brand.id}>
                  <BrandImg alt={brand.name} src={brand.img} />
                  <BrandName>{brand.name}</BrandName>
                </Brand>
              ))}
            </BrandList>
          </ImgArea>
        )}
      </WrapSearchModal>
    );
  }
}

export default SearchModal;

const WrapSearchModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: auto;
  background-color: rgba(34, 34, 34, 0.5);
  overflow-y: auto;
`;

const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 32px 0 40px;
  min-width: 320px;
  width: 100%;
  height: 90px;
  align-items: center;
  background-color: white;
`;

const SearchInput = styled.input`
  width: 600px;
  height: 40px;
  cursor: text;
  border-radius: 8px;
  background-color: rgb(244, 244, 244);
  &::placeholder {
    font-size: 13px;
    color: gray;
    padding-left: 10px;
  }
`;

const CancleBtn = styled.button`
  background-color: white;
  font-size: 11px;
`;

const ImgArea = styled.div`
  background-color: white;
`;

const BrandList = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 140px;
  text-align: center;
  cursor: pointer;
`;

const Brand = styled.div`
  width: 100px;
  height: 100px;
  align-items: center;
  margin-left: 15px;
  border-radius: 8px;
  background-color: rgb(246, 238, 237);
  &:hover {
    cursor: pointer;
    border: 3px solid white;
  }
`;

const BrandImg = styled.img`
  width: 80px;
  height: 80px;
  margin-left: 10px;
  border-radius: 8px;
`;

const BrandName = styled.p`
  margin-top: 5px;
  font-size: 10px;
`;

const BRANDLIST = [
  {
    id: 1,
    name: "Jordan 1",
    img:
      "https://media.vlpt.us/images/poohv7/post/32f43b4c-7dbd-4708-afc0-7d3a189747d3/%EC%BA%A1%EC%B2%985.JPG",
  },
  {
    id: 2,
    name: "꼼데가르송",
    img:
      "https://media.vlpt.us/images/poohv7/post/062eace6-d549-47b5-98f3-aa6e1809805e/%EC%BA%A1%EC%B2%981.JPG",
  },
  {
    id: 3,
    name: "IAB",
    img:
      "https://media.vlpt.us/images/poohv7/post/5d647b26-8e67-464b-9c2e-b455d0e427ed/%EC%BA%A1%EC%B2%982.JPG",
  },
  {
    id: 4,
    name: "마르지엘라",
    img:
      "https://media.vlpt.us/images/poohv7/post/34d9f7e2-0921-46bc-aacc-6a33a85781c5/KakaoTalk_20210225_133012878.jpg",
  },
  {
    id: 5,
    name: "메종키츠네",
    img:
      "https://media.vlpt.us/images/poohv7/post/b906e5e9-b55b-4d38-b3b6-03367afdacf5/%EC%BA%A1%EC%B2%983.JPG",
  },
  {
    id: 6,
    name: "뉴발란스",
    img:
      "https://media.vlpt.us/images/poohv7/post/fa37e960-03cd-4a79-81a9-9499089259aa/%EC%BA%A1%EC%B2%984.JPG",
  },
];
