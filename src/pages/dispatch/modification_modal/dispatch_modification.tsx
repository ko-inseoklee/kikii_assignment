import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../config/redux/hooks"
import { closeModal } from "../../../config/redux/slices/dispatch_modification_modal_slice";
import DispatchModificationView from "./dispatch_modification_view";
import { showAlert } from "../../../config/redux/slices/alert_slice";
import { BusRoundModel } from "../table/dispatch_table_row_model";
import { updateDispatchTime } from "../../../apis/dispatch/dispatch";

export interface DispatchModificationProps {
    close(): void,
    hour: number,
    minute: number,
    item: BusRoundModel | null
    handleHourChange(e: React.ChangeEvent<HTMLInputElement>): void,
    handleMinuteChange(e: React.ChangeEvent<HTMLInputElement>): void,
    handleUpdateButton(): void,
}

const DispatchModification = () => {
    const selectedBusRound = useAppSelector(state => state.dispatchModal.busRound);
    const dispatch = useAppDispatch();

    const close = () => {
        dispatch(closeModal());
    }

    const splitHourAndMinute = (): number[] => {
        let hourAndMinute = selectedBusRound?.startTime;
        if (typeof (hourAndMinute) === 'string') {
            const hm = hourAndMinute.split(":");
            return [parseInt(hm[0]), parseInt(hm[1])];
        } else {
            return [0, 0];
        }
    }

    const [hour, setHour] = useState<number>(splitHourAndMinute()[0]);
    const [minute, setMinute] = useState<number>(splitHourAndMinute()[1]);

    const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value >= 0 && value <= 24) {
            setHour(value);
        } else {
            dispatch(showAlert("시간 범위가 적절하지 않습니다."));
        }
    }

    const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value >= 0 && value <= 59) {
            setMinute(value);
        } else {
            dispatch(showAlert("분 범위가 적절하지 않습니다."));
        }
    }

    const handleUpdateButton = async () => {
        const hourStr = hour < 10 ? "0" + hour : hour
        const minuteStr = minute < 10 ? "0" + minute : minute;
        const timeToString = hourStr + ":" + minuteStr;

        const dispatchId = selectedBusRound?.dispatchId;
        if (dispatchId !== undefined && dispatchId !== null) {
            if (selectedBusRound?.startTime === timeToString) {
                dispatch(showAlert("수정 시간을 입력해주세요."));
            } else {
                await updateDispatchTime(dispatchId, timeToString)
                    .then(response => dispatch(closeModal()))
                    .catch(error => {
                        console.log(error);
                        dispatch(showAlert("변경 실패"));
                    });
            }
        }
    }

    useEffect(() => {
        const hourAndMinute = splitHourAndMinute();
        setHour(hourAndMinute[0]);
        setMinute(hourAndMinute[1]);
    }, [selectedBusRound]);

    const props: DispatchModificationProps = {
        close,
        hour,
        minute,
        item: selectedBusRound,
        handleHourChange,
        handleMinuteChange,
        handleUpdateButton
    }

    return <DispatchModificationView {...props} />;
}

export default DispatchModification;