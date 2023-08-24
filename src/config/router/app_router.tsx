import { BrowserRouter, BrowserRouterProps, Navigate, Route, RouterProps, Routes, createBrowserRouter, useHref, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PrivateRoute from "./private_route";
import { routes } from "./routes";

const AppRouter = (): React.ReactElement => {

    //Reducer 들어갈 자리.
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    return (
        <Routes>
            {/* 404(Not Found)시 LoginView로 Redirect */}
            <Route path="/*" element={<Navigate to={routes.LOGIN.path}></Navigate>}/>

            {/* Public Page */}
            <Route element={<PrivateRoute isAuthenticated={isAuthenticated} isPrivate={false} />}>
                <Route path={routes.LOGIN.path} element={routes.LOGIN.element} />
            </Route>

            {/* Private Page(have to authenticated) */}
            <Route element={<PrivateRoute isAuthenticated={isAuthenticated} isPrivate={true} />}>
                <Route path={routes.DISPATCH.path} element={routes.DISPATCH.element} />
                <Route path={routes.HOME.path} element={routes.HOME.element} />
                <Route path={routes.WORK.path} element={routes.WORK.element} />
                <Route path={routes.RESOURCE.path} element={routes.RESOURCE.element} />
            </Route>
        </Routes>
    )
}

export default AppRouter;