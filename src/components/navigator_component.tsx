import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../config/redux/hooks";
import avatar from "../assets/avatar.png";
import { removeToken } from "../config/redux/slices/token_slice";
import { removeUser } from "../config/redux/slices/user_slice";
import { routes } from "../config/router/routes";
import { StyledNavigator, EmptyContainer, StyledLinks, StyledLinkItem, StyledLink, AvatarContainer, UserIcon, LogoutButton } from "./navigator.style";

export const NavigatorComponent = () => {
    const currentUser = useAppSelector(state => state.user.currentUser);
    const dispatch = useAppDispatch();

    const location = useLocation();

    const logOut = () => {
        dispatch(removeToken());
        dispatch(removeUser());
    };

    return (
        <StyledNavigator>
            {/* space-between 자리 맞춰주기 위해 사용 */}
            <EmptyContainer />
            <StyledLinks>
                <StyledLinkItem>
                    <StyledLink to={routes.HOME.path} className={location.pathname === routes.HOME.path ? 'active' : ''}>홈</StyledLink>
                </StyledLinkItem>
                <StyledLinkItem>
                    <StyledLink to={routes.WORK.path} className={location.pathname.includes(routes.WORK.path) ? 'active' : ''}>근무 관리</StyledLink>
                </StyledLinkItem>
                <StyledLinkItem>
                    <StyledLink to={routes.DISPATCH.path} className={location.pathname.includes(routes.DISPATCH.path) ? 'active' : ''}>배차 관리</StyledLink>
                </StyledLinkItem>
                <StyledLinkItem>
                    <StyledLink to={routes.RESOURCE.path} className={location.pathname.includes(routes.RESOURCE.path) ? 'active' : ''}>자원 관리</StyledLink>
                </StyledLinkItem>
            </StyledLinks>
            {currentUser ? (
                <AvatarContainer>
                    <UserIcon src={avatar} alt="User Avatar" />
                    <p>{currentUser.name}님</p>
                    <LogoutButton onClick={() => logOut()}>로그아웃</LogoutButton>
                </AvatarContainer>
            ) : <EmptyContainer />
            }
        </StyledNavigator>
    );
};