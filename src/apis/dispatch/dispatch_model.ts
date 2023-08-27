export type DispatchModel = {
    id: number,
    startOrder: number,
    routeName: string,
    driverName: string,
    driverId: number,
    busId: number,
    busNumber: string,
    startTime: string,
    unixStartTime?: string | null,
    busRound: number,
}

export type DispatchModelList = DispatchModel[];