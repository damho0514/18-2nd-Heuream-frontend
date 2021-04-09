import React from "react";
import styled from "styled-components";

class Modal extends React.Component {
  render() {
    return (
      <>
        {this.props.modalOn ? (
          <WrapModal onClick={this.props.handleModal}>
            <ModalContainer>
              <LayerHeader>
                <Title>사이즈 선택</Title>
              </LayerHeader>
              <LayerContent>
                <SizeList>
                  <SizeItem>
                    {SIZE.map((size, index) => (
                      <ItemBtn
                        onClick={this.props.handleModal}
                        name={size.size}
                        id={size.id}
                        key={size.id}
                      >
                        {size.size}
                      </ItemBtn>
                    ))}
                  </SizeItem>
                </SizeList>
                <LayerBtn>
                  <Button onClick={this.props.handleModal}>확인</Button>
                </LayerBtn>
              </LayerContent>
            </ModalContainer>
          </WrapModal>
        ) : null}
      </>
    );
  }
}

export default Modal;

const WrapModal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1001;
`;

const ModalContainer = styled.div`
  margin: 0 auto;
  top: 100px;
  width: 448px;
  height: 428px;
  background-color: white;
  border-radius: 16px;
`;
const LayerHeader = styled.div`
  width: 448px;
  height: 60px;
  text-align: center;
  padding-top: 20px;
`;

const Title = styled.h2`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

const LayerContent = styled.div`
  width: 448px;
  height: 368px;
`;

const SizeList = styled.div`
  display: flex;
  justify-conetent: center;
  overflow: auto;
  width: 448px;
  height: 270px;
`;

const SizeItem = styled.div`
  margin-left: 30px;
`;

const ItemBtn = styled.button`
  width: 120px;
  height: 50px;
  text-align: center;
  cursor: pointer;
  margin: 5px;
  border: 1px solid #d3d3d3;
  border-radius: 12px;
  background-color: white;
  font-size: 14px;
  &:hover {
    border: 2px solid black;
  }
`;

const LayerBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 448px;
  height: 98px;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 120px;
  height: 42px;
  border-radius: 12px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const SIZE = [
  { id: 1, size: 220 },
  { id: 2, size: 225 },
  { id: 3, size: 230 },
  { id: 4, size: 235 },
  { id: 5, size: 240 },
  { id: 6, size: 245 },
  { id: 7, size: 250 },
  { id: 8, size: 255 },
  { id: 9, size: 255 },
  { id: 10, size: 260 },
  { id: 11, size: 265 },
  { id: 12, size: 270 },
  { id: 13, size: 275 },
  { id: 14, size: 280 },
  { id: 15, size: 285 },
  { id: 16, size: 290 },
  { id: 17, size: 295 },
  { id: 18, size: 300 },
];
