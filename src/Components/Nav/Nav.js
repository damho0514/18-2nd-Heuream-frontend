import React from "react";
import { Link } from "react-router-dom";
import SearchModal from "./SearchModal";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOn: false,
    };
  }

  handleSearchModal = () => {
    this.setState({ modalOn: !this.state.modalOn });
  };

  render() {
    return (
      <WrapNav>
        <NavContainer>
          <Logo>
            <Link to="/">HEUREAM</Link>
          </Logo>
          <FaSearch size="30" color="lightgray" />
          {this.state.modalOn && (
            <SearchModal
              handleSearchModal={this.handleSearchModal}
              modalOn={this.state.modalOn}
            />
          )}
          <SearchInput
            type="text"
            placeholder="브랜드명, 모델명, 모델번호 등"
            onClick={this.handleSearchModal}
          />
          <ListContainer>
            <Ul>
              <Li>
                <Link to="/">SHOP</Link>
              </Li>
              <Li>고객센터</Li>
              <Li>
                <Link to="/login">로그인</Link>
              </Li>
            </Ul>
          </ListContainer>
        </NavContainer>
      </WrapNav>
    );
  }
}

export default Nav;

const WrapNav = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 90px;
  background-color: white;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  padding: 0 32px 0 40px;
`;

const Logo = styled.h1`
  width: 150px;
  height: 24px;
  font-size: 25px;
  font-weight: bold;
  font-family: "Fugaz One", cursive;
`;

const SearchInput = styled.input`
  width: 800px;
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

const ListContainer = styled.nav`
  width: 187px;
  height: 38px;
  margin-left: 10px;
`;

const Ul = styled.ul`
  margin: 0;
`;

const Li = styled.li`
  display: list-item;
  float: left;
  margin: 10px 0 0 17px;
  font-size: 13px;
`;
