import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "../../Components/Nav/Nav";
import * as config from "../../config";
import { FaNeos } from "react-icons/fa";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pw: "",
    };
  }

  componentDidMount() {
    window.Kakao.init(config.JIEUN_KEY_JOA);
    console.log(window.Kakao.isInitialized());
  }

  handleInputValue = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goToMain = e => {
    //e.preventDefault();
    fetch("http://13.209.87.62:8000/account/signin", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.pw,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === "SUCCESS") {
          localStorage.setItem("access_token", res.access_token);
          this.props.history.push("/shop");
        }
      });
  };

  goToKakao = response => {
    window.Kakao.Auth.login({
      success: response => {
        console.log(response);
        fetch("http://13.209.87.62:8000/account/kakaosignin", {
          method: "POST",
          headers: {
            Authorization: response.access_token,
          },
        })
          .then(res => res.json())
          .then(res => {
            localStorage.setItem("access_token", res.access_token);
            if (res.access_token) {
              alert("로그인 성공!");
              this.props.history.push("/shop");
            }
          });
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: res => {
            const Kakao_account = res.Kakao_account;
            console.log(Kakao_account);
          },
        });
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };

  render() {
    return (
      <>
        <Nav />
        <LoginArea>
          <LoginTitle>HEUREAM</LoginTitle>
          <ButtonInputBox>
            <InputTitle>이메일 주소</InputTitle>
            <InputTxt
              name="email"
              type="text"
              placeholder="예) heuream@heuream.co.kr"
              onChange={this.handleInputValue}
            />
            {this.state.email && this.state.email.includes("@") ? null : (
              <div style={{ color: "red", fontSize: "10px" }}>
                이메일 형식을 지켜주세요.
              </div>
            )}
          </ButtonInputBox>
          <ButtonInputBox>
            <InputTitle>비밀번호</InputTitle>
            <InputTxt
              name="pw"
              type="password"
              onChange={this.handleInputValue}
            />
            {this.state.pw && this.state.pw.length >= 8 ? null : (
              <div style={{ color: "red", fontSize: "10px" }}>
                비밀번호 형식을 지켜주세요.
              </div>
            )}
          </ButtonInputBox>
          <LoginBtnBox>
            <LoginBtn
              email={this.state.email}
              pw={this.state.pw}
              onClick={this.goToMain}
            >
              로그인
            </LoginBtn>
            <NaverBtn onClick={() => this.goToKakao()}>
              <FaNeos />
              네이버 로그인
            </NaverBtn>
          </LoginBtnBox>
          <Join>
            <Link to="/join">이메일 가입</Link>
          </Join>
        </LoginArea>
      </>
    );
  }
}

export default withRouter(Login);

const LoginArea = styled.div`
  max-width: 100%;
  width: 400px;
  height: auto;
  padding: 60px 0 160px;
  margin: 0 auto;
  padding-top: 150px;
`;

const LoginTitle = styled.h2`
  text-align: center;
  padding-bottom: 50px;
  font-size: 30px;
  font-weight: bold;
  font-family: "Fugaz One", cursive;
`;

const ButtonInputBox = styled.div`
  position: relative;
  width: 400px;
  height: 80px;
  padding: 10px 0 14px;
`;

const InputTitle = styled.h3`
  width: 400px;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: -0.07px;
  line-height: 18px;
`;

const InputTxt = styled.input`
  width: 400px;
  height: 38px;
  cursor: text;
  margin-right: 340px;
  border-bottom: 1px solid #ebebeb;
  &::placeholder {
    font-size: 14px;
    color: lightgray;
  }
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid black;
  }
`;

const LoginBtnBox = styled.div`
  width: 400px;
  height: 140px;
  margin-top: 45px;
`;

const LoginBtn = styled.button`
  width: 400px;
  height: 52px;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  background-color: ${props =>
    props.email.includes("@") && props.pw.length >= 8
      ? "black"
      : "rgb(235, 235, 235)"};
`;

const NaverBtn = styled.button`
  width: 400px;
  height: 52px;
  border-radius: 12px;
  background-color: rgb(90, 196, 81);
  color: white;
  font-weight: bold;
  margin-top: 8px;
`;

const Join = styled.a`
  display: flex;
  justify-content: center;
  font-size: 10px;
`;
