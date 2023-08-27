import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigator = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const StyledLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

export const StyledLinkItem = styled.li`
    padding: 0px 50px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &.active {
    font-weight: bold;
    color: #3B60E4;
    border-bottom: 1px solid #3B60E4;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 300px;
`;

export const UserIcon = styled.img`
  width: 25px;
  padding: 0px 5px;
`;

export const LogoutButton = styled.button`
  background-color: #3B60E4;
  color: white;
  border: none;
  border-radius: 25px;
  margin-left: 10px;
  margin-right: 30px;
  padding: 5px 20px;
  cursor: pointer;
`;

export const EmptyContainer = styled.div`
  width: 300px;
`;