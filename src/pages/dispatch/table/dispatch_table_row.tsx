import { DispatchTableRowModel } from "./dispatch_table_row_model"

const DispatchTableRow = ({item, headers, index}: {item: DispatchTableRowModel, headers: (string| number)[], index: number}) => {
    return <tr key={index}>
    {
        headers.map((header, index) => (
            <th key={index}>
                {typeof header === 'number' ? (
                    // 숫자인 경우에 원하는 처리
                    // 예: item[header] * 2
                    item[header]?.startTime
                ):
                
                header === "startOrder" ? (
                    item.startOrder + 1 // 문자열인 경우 그대로 출력
                ) : 
                header === "busNumber" ? (
                    item.busNumber // 문자열인 경우 그대로 출력
                ) : item.driverName
                }
            </th>
        ))
    }
</tr>
}

export default DispatchTableRow;