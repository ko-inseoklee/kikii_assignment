import { DispatchTableRowModel, convertResponseToRowModel } from "./dispatch_table_row_model";
import DispatchTableRow from "./dispatch_table_row";
import { DispatchModelList } from "../../../apis/dispatch/dispatch_model";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, DroppableProvided } from "react-beautiful-dnd";

const DispatchTable = ({ dataList }: { dataList: DispatchModelList }): React.ReactElement => {

    const [convertDataList, setConvertDataList] = useState<DispatchTableRowModel[]>([]);

    const handleDragEnd = (e: any) => {
        console.log(e);
        if (!e.destination) return;
        let tempData = Array.from(convertDataList);
        let [source_data] = tempData.splice(e.source.index, 1);
        tempData.splice(e.destination.index, 0, source_data);
        setConvertDataList(tempData);
    };

    const basicHeaderColumns = ["startOrder", "busNumber", "driverName"];
    const basicHeaderColumnsInKorean = ["순번", "차량번호", "성명"];
    const busRoundColumns = [];
    for (let i = 1; i <= 24; i++) {
        busRoundColumns.push(i);
    }
    const headers = [...basicHeaderColumns, ...busRoundColumns];

    useEffect(() => {
        const convertedData = convertResponseToRowModel(dataList);
        setConvertDataList(convertedData);
    },[dataList]);

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <table>
                <thead>
                    <tr key={basicHeaderColumns.length}>
                        {headers.map((header, index) => (
                            <th key={index}>{
                                typeof header === 'string' ? (
                                    basicHeaderColumnsInKorean[index]
                                ) : header
                            }</th>
                        ))}
                    </tr>
                </thead>
                <Droppable droppableId="table">
                    {
                        (provider: DroppableProvided) => (
                            <tbody ref={provider.innerRef}
                                {...provider.droppableProps}>
                                {convertDataList.map((item, index) => (
                                        <DispatchTableRow item={item} headers={headers} key={index} index={index}/>
                                ))}
                                {provider.placeholder}
                            </tbody>
                        )
                    }
                </Droppable>
            </table>
        </DragDropContext>
    );
}

export default DispatchTable;