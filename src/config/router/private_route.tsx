import { Navigate, Outlet } from "react-router-dom";
import { routes } from "./routes";

interface PrivateRouteProps {
    isAuthenticated: boolean,   // 사용자 인증 여부
    isPrivate: boolean          // 인증이 필요한 페이지 여부
}

const PrivateRoute = ({isAuthenticated, isPrivate}: PrivateRouteProps) => {
    if(isPrivate) {
        return (!isAuthenticated) ? <Navigate to={routes.LOGIN.path}/> : <Outlet />;
    } else {
        return (isAuthenticated) ? <Navigate to={routes.DISPATCH.path}/> : <Outlet />;
    }
}

export default PrivateRoute
