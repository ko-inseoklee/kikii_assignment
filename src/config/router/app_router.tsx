import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./private_route";
import { routes } from "./routes";
import { useAppSelector } from "../redux/hooks";

const AppRouter = (): React.ReactElement => {

    const isAuthenticated = useAppSelector(state => state.token.token);
    const currentUser = useAppSelector(state => state.user.currentUser);


    return (
        <Routes>
            {/* 404(Not Found)시 LoginView로 Redirect */}
            <Route path="/*" element={<Navigate to={routes.LOGIN.path}></Navigate>}/>

            {/* Public Page */}
            <Route element={<PrivateRoute isAuthenticated={isAuthenticated && currentUser} isPrivate={false} />}>
                <Route path={routes.LOGIN.path} element={routes.LOGIN.element} />
            </Route>

            {/* Private Page(have to authenticated) */}
            <Route element={<PrivateRoute isAuthenticated={isAuthenticated  && currentUser} isPrivate={true} />}>
                <Route path={routes.DISPATCH.path} element={routes.DISPATCH.element} />
                <Route path={routes.HOME.path} element={routes.HOME.element} />
                <Route path={routes.WORK.path} element={routes.WORK.element} />
                <Route path={routes.RESOURCE.path} element={routes.RESOURCE.element} />
            </Route>
        </Routes>
    )
}

export default AppRouter;