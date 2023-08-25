import { useState } from "react"
import LoginView from "./login_view"
import { loginApi } from "../../apis/auth/auth";
import { useAppDispatch } from "../../config/redux/hooks";
import { showAlert } from "../../config/redux/slices/alertSlice";
import { UserModel } from "../../apis/auth/user_model";
import { setCurrentUser } from "../../config/redux/slices/userSlice";
import { setToken } from "../../config/redux/slices/tokenSlice";

export interface LoginProps {
    id: string,
    password: string,
    showPassword: boolean,
    onChangeId(e: React.ChangeEvent<HTMLInputElement>): void,
    onChangePassword(e: React.ChangeEvent<HTMLInputElement>): void,
    togglePasswordVisible(): void,
    onSubmit(e: React.FormEvent): void
}

const Login = (): React.ReactElement => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value);
    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
    const togglePasswordVisible = () => setShowPassword(!showPassword);
    const dispatch = useAppDispatch();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        loginApi(id, password).then((response) => {
            console.log(response);

            const userData: UserModel = response.data.object;

            dispatch(setCurrentUser(userData));
            dispatch(setToken(userData.token));

        }).catch(error => {
            dispatch(showAlert("일치하는 계정정보가 없습니다."));
        });
    }

    const props: LoginProps = {
        id,
        password,
        showPassword,
        onChangeId,
        onChangePassword,
        togglePasswordVisible,
        onSubmit
    }

    return <LoginView {...props} />
}

export default Login;