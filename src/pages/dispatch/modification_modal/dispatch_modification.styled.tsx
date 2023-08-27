import styled from "styled-components";

export const StyledDispatchModificationView = styled.div`
  position: absolute;
  width: 25%;
  height: calc(100% - 2px);
  background-color: #DADEFF;
  border: 1px solid black;
  flex-direction: column;
  right: 0;
  top: 0;
  padding: 0px 20px;
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.div`
  font-size: 32px;
  margin-left: calc(50% - 100px);
  width: 200px;
  text-align: center;
  margin-top: 60px;
  font-weight: bold;
  margin-bottom: 100px;
`;

export const Section = styled.div`
  padding: 30px;
`;

export const Subtitle = styled.div`
  font-size: 20px;
  margin-bottom: 5px;
  color: #3B60E4;
  `;

export const Content = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const ItemInfo = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  height: 60px;
  background-color: white;
  padding: 0px 55px;
`;

export const CloseButton = styled.button`
  margin-left: auto;
  border: none;
  font-size: 18px;
  background-color: transparent;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

`;

export const Input = styled.input`
  width: 120px;
  height: 50px;
  padding: 3px;
  border: none;
  font-size: 24px;
  text-align: center;
`;

export const Colon = styled.span`
  margin: 30px 20px;
  font-size: 32px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 60px;
  margin-top: 60px;
`;

export const StyledButton = styled.button`
  padding: 15px 40px;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  cursor: pointer;
  margin-right: 10px;
  color: white;
  
  &.cancel {
    background-color: grey;
  }

  &.confirm {
    background-color: #3B60E4;
  }
`;