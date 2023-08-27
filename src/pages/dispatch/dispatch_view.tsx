import { BaseLayout } from "../../components/base_layout";
import { convertDateToDispatchForm } from "../../utils/date_utiles";
import { DispatchProps } from "./dispatch";
import DispatchTable from "./table/dispatch_table";

const DispatchView = ({ currentDate, changePrevDate, changeNextDate, isFirstDate, isLastDate, tableDataList }: DispatchProps) => {
    return <BaseLayout>
        <div>
            {!isFirstDate ? <button onClick={() => changePrevDate()}>&lt;</button> : <div></div>}
            <span>{convertDateToDispatchForm(currentDate)}</span>
            {!isLastDate ? <button onClick={() => changeNextDate()}>&gt;</button> : <div></div>}
        </div>
        <div>시간 및 차량, 성명란을 눌러 수정하세요.</div>
        <DispatchTable dataList={tableDataList}  />
    </BaseLayout>
}

export default DispatchView;