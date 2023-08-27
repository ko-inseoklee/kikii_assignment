import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../config/redux/hooks";
import avatar from "../assets/avatar.png";
import { removeToken } from "../config/redux/slices/token_slice";
import { removeUser } from "../config/redux/slices/user_slice";

export const NavigatorComponent = () => {
    const currentUser = useAppSelector(state => state.user.currentUser);
    const dispatch = useAppDispatch();

    const logOut = () => {
        dispatch(removeToken());
        dispatch(removeUser());
    }

    return (
        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/work">근무 관리</Link>
            </li>
            <li>
              <Link to="/dispatch">배차 관리</Link>
            </li>
            <li>
              <Link to="/resource">자원 관리</Link>
            </li>
          </ul>
          {currentUser ? (
            <div>
              <p>안녕하세요, {currentUser.name}님</p>
              <img src={avatar} alt="User Avatar" />
              <button onClick={() => logOut()}>로그아웃</button>
            </div>
          ) : null}
        </nav>
      );
}