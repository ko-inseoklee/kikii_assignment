import { DispatchModel, DispatchModelList } from "../../../apis/dispatch/dispatch_model"

export type DispatchTableRowModel = {
    startOrder: number,
    busNumber: string,
    driverName: string,
    [busRound: number]: BusRoundModel,
}

export type BusRoundModel = {
    dispatchId: number | null,
    busRound: number | null,
    startTime: string | null,
    driverName: string
}


//API Response를 table에 보여줄 타입으로 변환하는 코드.
export const convertResponseToRowModel = (list: DispatchModelList) => {
    const groupData: Record<string, DispatchModelList> = list.reduce((result: Record<string, DispatchModelList>, item: DispatchModel) => {
        if (!result[item.startOrder]) {
            result[item.startOrder] = [];
          }
          result[item.startOrder].push(item);
          return result;
    }, {});
    
    const dispatchTableList: DispatchTableRowModel[] = [];

    Object.keys(groupData).forEach(element => {
        const list: DispatchModelList = groupData[element];
        
        const dispatchTableData: DispatchTableRowModel = {
            startOrder: list[0].startOrder,
            busNumber: list[0].busNumber,
            driverName: list[0].driverName
        };
        
        list.forEach(element => {
            dispatchTableData[element.busRound] = {
                dispatchId: element.id,
                busRound: element.busRound,
                startTime: element.startTime,
                driverName: element.driverName
            } as BusRoundModel;
        });

        dispatchTableList.push(dispatchTableData);
    });

    return dispatchTableList;
}