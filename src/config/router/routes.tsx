import DispatchView from "../../pages/dispatch/dispatch_view";
import HomeView from "../../pages/home/home_view";
import Login from "../../pages/login/login";
import ResourceView from "../../pages/resource/resource_view";
import WorkView from "../../pages/work/work_view";

interface routesProps {
    path: string,
    element: React.ReactElement
}

export const routes: Record<string, routesProps> = {
    HOME: {path: '/', element: <HomeView/>},
    LOGIN: {path: '/login', element: <Login />},
    WORK: {path:'/work', element: <WorkView />},
    DISPATCH: {path: '/dispatch', element: <DispatchView />},
    RESOURCE: {path: '/resource', element: <ResourceView />}
}