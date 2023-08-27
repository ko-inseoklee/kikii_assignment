import { DispatchModificationProps } from "./dispatch_modification";

const DispatchModificationView = ({ close, hour, minute, item, handleHourChange, handleMinuteChange, handleUpdateButton }: DispatchModificationProps) => {
    
    return (
        <div>
            <div>시간 수정</div>
            <div>
                <div>
                    A. 변경할 시간
                    <div>변경할 시간을 선택(클릭)해주세요.</div>
                    <div>
                        {`${item?.driverName} - ${item?.busRound} 회차 / ${item?.startTime}`}
                        <button onClick={close}>X</button>
                    </div>
                </div>
                <div>
                    B. 수정 시간 입력
                    <div>수정할 시간을 입력해주세요.</div>

                    <div>
                        <input
                            type="number"
                            value={hour}
                            onChange={handleHourChange}
                            min={0}
                            max={24}
                        />
                        :
                        <input
                            type="number"
                            value={minute}
                            onChange={handleMinuteChange}
                            min={0}
                            max={59}
                        />
                    </div>
                </div>
            </div>
            <div>
                <button onClick={handleUpdateButton}>변경</button>
                <button onClick={close}>취소</button>
            </div>
        </div>
    );
}

export default DispatchModificationView;