import instance from "../axios";
import { ResponseModel } from "../response_model";
import { UserModel } from "./user_model";

export const loginApi = async (id: string, password: string) => await instance.post<ResponseModel<UserModel>>('/auth/login', {
    'loginId': id,
    'password': password
});