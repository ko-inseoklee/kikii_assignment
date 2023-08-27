import { createColumnHelper, useReactTable } from "@tanstack/react-table";
import { dispatchList } from "./dummyData";
import { DispatchTableRowModel, convertResponseToRowModel } from "./dispatch_table_row_model";
import DispatchTableRow from "./dispatch_table_row";

const DispatchTable = (): React.ReactElement => {

    const dataList: DispatchTableRowModel[] = convertResponseToRowModel(dispatchList);

    // const headers = Object.keys(dataList[0]);

    const basicHeaderColumns = ["startOrder", "busNumber", "driverName"];
    const busRoundColumns = [];
    for (let i = 1; i <= 24; i++) {
        busRoundColumns.push(i);
    }
    const headers = [...basicHeaderColumns, ...busRoundColumns];

    return (
        <table>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dataList.map((item, rowIndex) => (
                    <DispatchTableRow item={item} headers={headers} index={rowIndex} />
                ))}
            </tbody>
        </table>
    );
}

export default DispatchTable;