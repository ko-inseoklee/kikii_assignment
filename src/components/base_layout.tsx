import { NavigatorComponent } from "./navigator_component";

interface BaseLayoutProps {
    children: React.ReactElement | React.ReactElement[]
}

export const BaseLayout = ({children}: BaseLayoutProps): React.ReactElement => {
    return <div>
        <div>
            <NavigatorComponent />
        </div>
        {children}
    </div>;
}