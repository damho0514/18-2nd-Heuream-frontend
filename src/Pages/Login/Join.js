import React from "react";
import Modal from "../Login/Modal";
import Nav from "../../Components/Nav/Nav";
import styled from "styled-components";
import { FiCheckSquare } from "react-icons/fi";

class Join extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pw: "",
      //emailCheck: false,
      //multiCheckEmail: false,
      //pwCheck: false,
      modalOn: false,
      checkOn: false,
      checkOnSecond: false,
      sizeClick: "",
    };
  }

  handleModal = e => {
    this.setState({ modalOn: !this.state.modalOn, sizeClick: e.target.name });
  };

  boxClick = () => {
    this.setState({
      checkOn: !this.state.checkOn,
    });
  };

  boxClickSecond = () => {
    this.setState({
      checkOnSecond: !this.state.checkOnSecond,
    });
  };

  handleInputValue = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  signUp = () => {
    fetch("http://192.168.0.34:8000/account/signup", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.pw,
      }),
    })
      .then(res => res.json())
      .then(res => {
        // if (res.maessage === "INVALID_EMAIL") {
        //  alert("이메일 형식이 올바르지 않습니다.");
        //  }
        // if (res.message === "REGISTERED_EAMIL") {
        //  alert("이미 가입된 이메일입니다.");
        //}
        // if (res.message === "INVALID_PASSWORD") {
        //   alert("비밀번호 형식이 올바르지 않습니다.");
        // }
        // if (res.message === "KEY_ERROR") {
        //   alert("이메일 또는 비밀번호가 입력되지 않았습니다.");
        // }
        //  if (res.message === "INVALID_JSON") {
        //   alert("이메일과 비밀번호를 입력하여주세요.");
        //  }
        if (res.message === "SUCCESS") {
          this.props.history.push("/login");
          alert("회원가입이 완료되었습니다.");
        }
      });
  };

  //handleEmail = e => {
  //   const { email } = this.state;
  //  const EMAIL = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  //   if (email === "") {
  //    this.setState({ emailCheck: false, multiCheckEmail: "" });
  //     return;
  //  }
  //  if (EMAIL.test(email)) {
  //    this.setState({ email: false });
  //  } else {
  //    this.setState({ email: true, multiCheckEmail: "" });
  //    return;
  //  }

  //  fetch("http://10.58.1.71:8000/account/email", {
  //   method: "POST",
  //   body: JSON.stringify({
  //    email: email,
  //  }),
  // })
  //  .then(res => {
  //    return res.json();
  //  })
  //  .then(res => {
  //    if (res.message === "INVALID_EMAIL") {
  //      alert("이메일 형식을 지켜주세요.");
  //   }
  //   if (res.message === "REGISTERED_EAMIL") {
  //    alert("이미 존재하는 이메일입니다.");
  //   }
  // });
  // };

  //handlePw = e => {
  // const { pw } = this.state;
  //fetch("http://10.58.1.71:8000/account/password", {
  //  method: "POST",
  //  body: JSON.stringify({
  //    password: pw,
  //  }),
  // })
  //  .then(res => {
  //    return res.json();
  //  })
  //  .then(res => {
  //     if (res.message === "INVALID_PASSWORD") {
  //    alert("비밀번호 형식을 지켜주세요");
  //   }
  //if (!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(pw)) {
  //alert("숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.");
  //}
  // });
  //  };
  sizeModal = e => {
    this.setState({ sizeClick: e });
  };

  render() {
    const btnChange = this.state.checkOn ? "checkOn" : "checkOff";
    const btnChangeSecond = this.state.checkOnSecond
      ? "checkOnSecond"
      : "checkOff";
    return (
      <>
        <Nav />
        <JoinArea>
          <JoinTitle>회원가입</JoinTitle>
          <ButtonInputBox>
            <InputTitle>이메일 주소*</InputTitle>
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
            <InputTitle>비밀번호*</InputTitle>
            <InputTxt
              name="pw"
              type="password"
              placeholder="영문,숫자,특수문자 조합 8-16자"
              onChange={this.handleInputValue}
            />
            {this.state.pw && this.state.pw.length >= 8 ? null : (
              <div style={{ color: "red", fontSize: "10px" }}>
                비밀번호 형식을 지켜주세요.
              </div>
            )}
          </ButtonInputBox>
          <ButtonInputBox>
            <InputTitle>스니커즈 사이즈 (선택)</InputTitle>
            <Modal
              handleModal={this.handleModal}
              modalOn={this.state.modalOn}
              sizeClick={this.state.sizeClick}
            />
            <InputTxt
              type="text"
              placeholder="선택하세요"
              onClick={this.handleModal}
              value={this.state.sizeClick}
            ></InputTxt>
          </ButtonInputBox>
          <JoinWrap>
            <LabelTxt>
              <FiCheckSquare
                className={btnChange}
                size="20px"
                onClick={this.boxClick}
              />
              &nbsp;&nbsp;[필수] 만 14세 이상이며 모두 동의합니다.
            </LabelTxt>
            <LabelTxt2>
              <FiCheckSquare
                className={btnChangeSecond}
                size="20px"
                onClick={this.boxClickSecond}
              />
              &nbsp;&nbsp;[선택] 광고성 정보 수신에 모두 동의합니다.
            </LabelTxt2>
          </JoinWrap>
          <JoinBtnBox>
            <JoinBtn
              email={this.state.email}
              pw={this.state.pw}
              onClick={this.signUp}
            >
              회원가입
            </JoinBtn>
          </JoinBtnBox>
        </JoinArea>
      </>
    );
  }
}

export default Join;

const JoinArea = styled.div`
  width: 400px;
  height: 678px;
  padding: 60px 0 160px;
  padding-top: 150px;
  margin: 0 auto;
`;

const JoinTitle = styled.h2`
  padding-bottom: 50px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const ButtonInputBox = styled.div`
  width: 400px;
  height: 80px;
  position: relative;
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
  margin-right: 300px;
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

const JoinWrap = styled.div`
  padding: 24px 0 40px;
`;

const LabelTxt = styled.div`
  margin-bottom: 17px;
  font-size: 12px;
  .checkOn {
    background-color: black;
    color: white;
  }
`;

const LabelTxt2 = styled.div`
  margin-bottom: 17px;
  font-size: 12px;
  .checkOnSecond {
    background-color: black;
    color: white;
  }
`;

const JoinBtnBox = styled.div`
  width: 400px;
  height: 140px;
`;

const JoinBtn = styled.button`
  width: 400px;
  height: 52px;
  border-radius: 12px;
  background-color: ${props =>
    props.email.includes("@") && props.pw.length >= 8
      ? "black"
      : "rgb(235, 235, 235)"};
  color: white;
  font-weight: bold;
`;
