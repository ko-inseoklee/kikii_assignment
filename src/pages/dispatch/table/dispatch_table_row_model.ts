import { DispatchModel, ListDispatchModel } from "../../../apis/dispatch/dispatch_model"

export type DispatchTableRowModel = {
    startOrder: number,
    busNumber: string,
    driverName: string,
    [busRound: number]: BusRoundModel
}

export type BusRoundModel = {
    dispatchId: number | null,
    busRound: number | null,
    startTime: string | null
}

export const convertResponseToRowModel = (list: ListDispatchModel) => {
    const groupData: Record<number, ListDispatchModel> = list.reduce((result: Record<number, ListDispatchModel>, item: DispatchModel) => {
        if (!result[item.startOrder]) {
            result[item.startOrder] = [];
          }
          result[item.startOrder].push(item);
          return result;
    }, {});
    
    const dispatchTableList: DispatchTableRowModel[] = [];

    Object.keys(groupData).forEach(element => {
        const list: ListDispatchModel = groupData[parseInt(element)];
        
        const dispatchTableData: DispatchTableRowModel = {
            startOrder: list[0].startOrder,
            busNumber: list[0].busNumber,
            driverName: list[0].driverName
        };
        
        list.forEach(element => {
            dispatchTableData[element.busRound] = <BusRoundModel>{
                dispatchId: element.id,
                busRound: element.busRound,
                startTime: element.startTime
            }
        });

        dispatchTableList.push(dispatchTableData);
    });

    console.log(dispatchTableList);

    return dispatchTableList;
}