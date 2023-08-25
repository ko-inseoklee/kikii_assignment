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