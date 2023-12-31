import { useEffect, useState } from "react"
import DispatchView from "./dispatch_view"
import {convertYYYYmmDD, handleNextDay, handlePrevDay } from "../../utils/date_utiles";
import { getDispatchListApi } from "../../apis/dispatch/dispatch";
import { DispatchModelList } from "../../apis/dispatch/dispatch_model";
import { useAppSelector } from "../../config/redux/hooks";

export interface DispatchProps {
    currentDate: string,
    changePrevDate(): void,
    changeNextDate(): void,
    isFirstDate: boolean,
    isLastDate: boolean,
    tableDataList: DispatchModelList,
    showModal: boolean
}

const Dispatch = () => {
    const showModal = useAppSelector(state => state.dispatchModal.isShowModal);


    const [currentDate, setCurrentDate] = useState("2023-07-18");
    const firstDate = "2023-07-17";
    const lastDate = "2023-07-20";

    const [dispatchDataList, setDispatchDataList] = useState<DispatchModelList>([]);

    const [isFirstDate, setIsFirstDate] = useState(currentDate === firstDate);
    const [isLastDate, setIsLastDate] = useState(currentDate === lastDate);

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


    const fetchDispatchData = () => {
        getDispatchListApi(70, currentDate).then((response) => {
            setDispatchDataList(response.data.object);
        }).catch(error => {
            console.log(error);
            setDispatchDataList([]);
        });
    }

    useEffect(() => {
        checkEndDate();
        fetchDispatchData();
    }, [currentDate, showModal]);


    const props: DispatchProps = {
        currentDate,
        changePrevDate,
        changeNextDate,
        isFirstDate,
        isLastDate,
        tableDataList: dispatchDataList,
        showModal
    }

    return <DispatchView {...props} />
}

export default Dispatch;