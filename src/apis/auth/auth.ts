import instance from "../axios";

export const loginApi = async (id: string, password: string) => await instance.post('/auth/login', {
    'loginId': id,
    'password': password
});