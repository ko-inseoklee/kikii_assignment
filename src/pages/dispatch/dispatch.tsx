import { useEffect, useState } from "react"
import DispatchView from "./dispatch_view"
import {convertYYYYmmDD, handleNextDay, handlePrevDay } from "../../utils/date_utiles";

export interface DispatchProps {
    currentDate: string,
    changePrevDate(): void,
    changeNextDate(): void,
    isFirstDate: boolean,
    isLastDate: boolean
}

const Dispatch = () => {
    const [currentDate, setCurrentDate] = useState("2023-07-18");
    const firstDate = "2023-07-17";
    const lastDate = "2023-07-20";


    const [isFirstDate, setIsFirstDate] = useState(currentDate == firstDate);
    const [isLastDate, setIsLastDate] = useState(currentDate == lastDate);

    const changePrevDate = () => {
        if (currentDate > firstDate) {
            setCurrentDate(convertYYYYmmDD(handlePrevDay(currentDate)));
        }
    }

    const changeNextDate = () => {
        if (currentDate < lastDate) {
            setCurrentDate(convertYYYYmmDD(handleNextDay(currentDate)));
        }
    }

    const checkEndDate = () => {
        if (currentDate <= firstDate) setIsFirstDate(true);
        else setIsFirstDate(false);

        if (currentDate >= lastDate) setIsLastDate(true);
        else setIsLastDate(false);
    }


    useEffect(() => {
        checkEndDate();
    }, [currentDate]);

    const props: DispatchProps = {
        currentDate,
        changePrevDate,
        changeNextDate,
        isFirstDate,
        isLastDate
    }

    return <DispatchView {...props} />
}

export default Dispatch;