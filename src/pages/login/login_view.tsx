import visibility from "../../assets/visibility.png";
import { LoginProps } from "./login";
import { Input, InputContainer, LoginButton, LoginContainer, PasswordIcon, PasswordInput, PasswordInputContainer, StyledLoginView, Title } from "./login.styled";

const LoginView = ({
    id,
    password,
    showPassword,
    onChangeId,
    onChangePassword,
    togglePasswordVisible,
    onSubmit,
}: LoginProps) => {
    return (
        <LoginContainer>
            <form onSubmit={onSubmit}>
                <StyledLoginView>
                    <Title>로그인</Title>
                    <InputContainer>
                        <Input
                            type="text"
                            placeholder="사원번호"
                            value={id}
                            onChange={onChangeId}
                        />
                    </InputContainer>
                    <PasswordInputContainer>
                        <PasswordInput
                            type={showPassword ? "text" : "password"}
                            placeholder="비밀번호"
                            value={password}
                            onChange={onChangePassword}
                        />
                        <PasswordIcon
                            src={visibility}
                            alt="보이기/숨기기"
                            onClick={togglePasswordVisible}
                        />
                    </PasswordInputContainer>
                    <LoginButton type="submit">로그인하기</LoginButton>
                </StyledLoginView>
            </form>
        </LoginContainer>
    );
};

export default LoginView;