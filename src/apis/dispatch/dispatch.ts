import { convertYYYYmmDD } from "../../utils/date_utiles";
import instance from "../axios";
import { ResponseModel } from "../response_model";
import { DispatchModelList } from "./dispatch_model";

export const getDispatchListApi = async (routeId: number, date: string) => await instance.get<ResponseModel<DispatchModelList>>(`/dispatch/${routeId}/${date}`);
