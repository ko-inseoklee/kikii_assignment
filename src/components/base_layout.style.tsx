import styled from "styled-components";

export const StyledBaseLayout = styled.div`
position:relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height:100vh;
`;

export const NavigatorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  background-color: #DADEFF;
  z-index: 99;
`;

export const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  top: 80px;
  width: 100%;
  height: calc(100vh - 80px);
`;