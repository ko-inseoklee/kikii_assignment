import React from 'react';
import { useAppDispatch, useAppSelector } from '../config/redux/hooks';
import { closeAlert } from '../config/redux/slices/alert_slice';
import { BackgroundOverlay, AlertContainer, CloseButton } from './alert.styled';


const AlertComponent = (): React.ReactElement => {
  const showAlert = useAppSelector(state => state.alert.showAlert);
  const message = useAppSelector(state => state.alert.message);
  const dispatch = useAppDispatch();

  const close = () => dispatch(closeAlert());

  return <div>
    {
      showAlert && (
        <BackgroundOverlay>
          <AlertContainer>
            <div>{message}</div>
            <CloseButton onClick={() => close()}>닫기</CloseButton>
          </AlertContainer>
        </BackgroundOverlay>
      )
    }
  </div>
};

export default AlertComponent;
