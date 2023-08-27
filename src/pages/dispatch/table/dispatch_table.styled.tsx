import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border: 1px solid black;
  border-spacing: 0px;
`;

export const StyledTableRow = styled.tr`
  height: 40px;
  background-color: #D7D9EB;
`;

export const StyledButton = styled.button`
    border: none; 
    background: none;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`;

export const StyledTableCell = styled.th`
  font-size: 12px;
  border: 1px solid #ccc;
  min-width: 8%;
  height: 40px;

  &.order{
    background-color: #D7D9EB;
  }

  &.base{
    background-color: #EBECF3;
  }
`;
