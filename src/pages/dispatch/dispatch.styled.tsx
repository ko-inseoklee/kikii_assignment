import styled from "styled-components";

export const StyledDispatchView = styled.div`
  position:absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  left: 10%;
  align-items: center;

  &.shrinked{
    width: 65%;
    display:flex; 
    left: 5%;
  }
`;

export const StyledDateControls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 40px 0;
`;

export const StyledButton = styled.button`
    border: none; 
    background: none;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
`;

export const StyledDateText = styled.span`
  font-size: 22px;
  font-weight: bold;
`;

export const StyledGuideText = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  padding: 15px 0px;
  font-weight: bold;
`;