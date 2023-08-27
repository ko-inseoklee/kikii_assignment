import { DispatchTableRowModel } from "./dispatch_table_row_model"

const DispatchTableRow = ({item, headers, index}: {item: DispatchTableRowModel, headers: (string| number)[], index: number}) => {
    return <tr key={index}>
    {
        headers.map((header, index) => (
            <th key={index}>
                {typeof header === 'number' ? (
                    item[header]?.startTime
                ):
                
                header === "startOrder" ? (
                    item.startOrder + 1
                ) : 
                header === "busNumber" ? (
                    item.busNumber
                ) : item.driverName
                }
            </th>
        ))
    }
</tr>
}

export default DispatchTableRow;