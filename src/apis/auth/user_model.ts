export type UserModel = {
    //cannot be null values
    userId: number,
    token: string,
    name: string,
    loginId: string,

    //can be null values
    role?: string,
    position?: string,
    userWorkStandard?: any,
    deviceToken?: any,
    companyName?: string,
    companyId?: number,
    branchName?: any,
    branchId?: any,
    agree?: number 
}

export const userModelFromJson = (json: string): UserModel  => {
    const parsedData: Partial<UserModel> = JSON.parse(json);

    const userModel: UserModel = {
        userId: parsedData.userId ?? -1,
        token: parsedData.token ?? 'undefined',
        name: parsedData.name ?? 'undefined',
        loginId: parsedData.loginId ?? 'undefined',
        ...parsedData
    };

    return userModel;
}