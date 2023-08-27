import { NavigatorComponent } from "./navigator_component";
import { StyledBaseLayout, NavigatorContainer, ContentContainer } from "./base_layout.style";

interface BaseLayoutProps {
    children: React.ReactElement | React.ReactNode
}

export const BaseLayout = ({ children }: BaseLayoutProps): React.ReactElement => {
  return (
    <StyledBaseLayout>
      <NavigatorContainer>
        <NavigatorComponent />
      </NavigatorContainer>
      <ContentContainer>
        {children}
      </ContentContainer>
    </StyledBaseLayout>
  );
};