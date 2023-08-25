import { createColumnHelper, useReactTable } from "@tanstack/react-table";
import { dispatchList } from "./dummyData";
import { convertResponseToRowModel } from "./dispatch_table_row_model";

const DispatchTable = (): React.ReactElement => {
    
    const test = convertResponseToRowModel(dispatchList);

    return <></>;
}

export default DispatchTable;