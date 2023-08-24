import visibility from "../../assets/visibility.png";
import { LoginProps } from "./login";

const LoginView = ({id, password, showPassword, onChangeId, onChangePassword, togglePasswordVisible, onSubmit}: LoginProps) => {


    return (
        <form onSubmit={onSubmit}>
          <div>
            <h2>로그인</h2>
            <div>
              <input
                type="text"
                placeholder="사원번호"
                value={id}
                onChange={onChangeId}
              />
            </div>
            <div>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="비밀번호"
                value={password}
                onChange={onChangePassword}
              />
              <button
                type="button"
                onClick={togglePasswordVisible}
              >
                <img src={visibility} alt="보이기/숨기기" />
              </button>
            </div>
            <button type="submit">로그인하기</button>
          </div>
        </form>
      );
}

export default LoginView;