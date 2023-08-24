import { useState } from "react"
import LoginView from "./login_view"
import { loginApi } from "../../apis/auth/auth";

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

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await loginApi(id, password);

        console.log(result);
    }

    const props: LoginProps = {
        id: id,
        password: password,
        showPassword: showPassword,
        onChangeId: onChangeId,
        onChangePassword: onChangePassword,
        togglePasswordVisible: togglePasswordVisible,
        onSubmit: onSubmit
    }

    return <LoginView {...props}/>
}

export default Login;