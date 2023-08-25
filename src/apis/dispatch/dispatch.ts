import instance from "../axios";
import { ResponseModel } from "../response_model";
import { DispatchModel } from "./dispatch_model";

export const getDispatchListApi = async (routeId: number, date: string) => await instance.get<ResponseModel<DispatchModel>>(`/dispatch/${routeId}/${date}}`);
