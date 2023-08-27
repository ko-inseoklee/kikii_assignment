import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../config/redux/hooks';
import { closeAlert } from '../config/redux/slices/alert_slice';

const AlertComponent = (): React.ReactElement => {
  const showAlert = useAppSelector(state => state.alert.showAlert);
  const message = useAppSelector(state => state.alert.message);
  const dispatch = useAppDispatch();

  const close = () => dispatch(closeAlert());

  return (
    <div>
      {showAlert && (
        <div>
          {message}
          <button onClick={() => close()}>
            닫기
          </button>
        </div>
      )}

    </div>
  );
};

export default AlertComponent;
