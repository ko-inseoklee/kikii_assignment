import { DispatchTableRowModel, convertResponseToRowModel } from "./dispatch_table_row_model";
import DispatchTableRow from "./dispatch_table_row";
import { DispatchModelList } from "../../../apis/dispatch/dispatch_model";

const DispatchTable = ({dataList}: {dataList: DispatchModelList}): React.ReactElement => {
    const convertDataList: DispatchTableRowModel[] = convertResponseToRowModel(dataList);

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
                {convertDataList.map((item, rowIndex) => (
                    <DispatchTableRow item={item} headers={headers} index={rowIndex} />
                ))}
            </tbody>
        </table>
    );
}

export default DispatchTable;