export interface ResponseModel<T> {
    message?: string,
    object: T,
    status: number
}