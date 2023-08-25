import { BaseLayout } from "../../components/base_layout";
import { convertDateToDispatchForm } from "../../utils/date_utiles";
import { DispatchProps } from "./dispatch";

const DispatchView = ({ currentDate, changePrevDate, changeNextDate, isFirstDate, isLastDate }: DispatchProps) => {

    return <BaseLayout>
        <div>
            {!isFirstDate ? <button onClick={() => changePrevDate()}>&lt;</button> : <div></div>}
            <span>{convertDateToDispatchForm(currentDate)}</span>
            {!isLastDate ? <button onClick={() => changeNextDate()}>&gt;</button> : <div></div>}
        </div>
    </BaseLayout>
}

export default DispatchView;