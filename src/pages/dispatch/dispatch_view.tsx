import { BaseLayout } from "../../components/base_layout";
import { convertDateToDispatchForm } from "../../utils/date_utiles";
import { DispatchProps } from "./dispatch";
import DispatchModification from "./modification_modal/dispatch_modification";
import DispatchTable from "./table/dispatch_table";
import { StyledButton, StyledDateControls, StyledDateText, StyledDispatchView, StyledGuideText } from "./dispatch.styled";

const DispatchView = ({
    currentDate,
    changePrevDate,
    changeNextDate,
    isFirstDate,
    isLastDate,
    tableDataList,
    showModal,
}: DispatchProps) => {
    return (
        <BaseLayout>
            <StyledDispatchView className={showModal? 'shrinked' : ""}>
                <StyledDateControls>
                    {!isFirstDate ? (
                        <StyledButton onClick={() => changePrevDate()}>&lt;</StyledButton>
                    ) : (
                        <div></div>
                    )}
                    <StyledDateText>{convertDateToDispatchForm(currentDate)}</StyledDateText>
                    {!isLastDate ? (
                        <StyledButton onClick={() => changeNextDate()}>&gt;</StyledButton>
                    ) : (
                        <div></div>
                    )}
                </StyledDateControls>
                <StyledGuideText >시간 및 차량, 성명란을 눌러 수정하세요.</StyledGuideText>
                <DispatchTable dataList={tableDataList} showModal />
            </StyledDispatchView>
            {showModal && <DispatchModification />}
        </BaseLayout>
    );
};

export default DispatchView;





