import { Draggable } from "react-beautiful-dnd";
import { useAppDispatch, useAppSelector } from "../../../config/redux/hooks";
import { changeModalData, showModal } from "../../../config/redux/slices/dispatch_modification_modal_slice";
import { DispatchTableRowModel } from "./dispatch_table_row_model"
import { StyledTableCell, StyledButton } from "./dispatch_table.styled";


const DispatchTableRow = ({ item, headers, index }: { item: DispatchTableRowModel, headers: (string | number)[], index: number }) => {
    const isShowModal = useAppSelector(state => state.dispatchModal.isShowModal);
    const dispatch = useAppDispatch()

    const handleBusRoundClick = (header: number) => {
        if (item[header] !== null && item[header] !== undefined) {
            if (isShowModal) {
                dispatch(changeModalData(item[header]));
            } else {
                dispatch(showModal(item[header]));
            }
        }
    }

    return (<Draggable draggableId={index.toString()} index={index}>
        {(provider) => (
            <tr key={index} ref={provider.innerRef}
                {...provider.draggableProps}
                {...provider.dragHandleProps}>
                {
                    headers.map((header, index) => (
                        typeof header === 'number' ? (
                            <StyledTableCell key={item.busNumber + item.driverName + index + item.startOrder} >
                                <StyledButton onClick={() => handleBusRoundClick(header)}>{
                                    item[header]?.startTime
                                }</StyledButton>
                            </StyledTableCell>
                        ) :

                            header === "startOrder" ? (
                                <StyledTableCell className="order" key={item.busNumber + item.driverName + index + item.startOrder} >
                                    {item.startOrder + 1}
                                </StyledTableCell>
                            ) :
                                header === "busNumber" ? (
                                    <StyledTableCell className="base" key={item.busNumber + item.driverName + index + item.startOrder} >
                                        {item.busNumber}
                                    </StyledTableCell>
                                ) : <StyledTableCell className="base" key={item.busNumber + item.driverName + index + item.startOrder}>
                                    {item.driverName}
                                </StyledTableCell>
                    ))}
            </tr>
            
        )}
    </Draggable>)

}

export default DispatchTableRow;