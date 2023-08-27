import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BusRoundModel } from "../../../pages/dispatch/table/dispatch_table_row_model";

interface dispatchModifactionModalState {
    isShowModal: boolean;
    busRound: BusRoundModel | null;
}

const initState: dispatchModifactionModalState = {
  isShowModal: false,
  busRound: null
}

export const dispatchModifactionModalSlice = createSlice({
    name: 'dispatchModificationModel',
    initialState: initState,
    reducers: {
      //Modal이 처음 열릴 때
      showModal: (state, action: PayloadAction<BusRoundModel>) => {
        state.isShowModal = true;
        state.busRound = action.payload;
      },
      //Modal이 열려있는 도중, 다른 배차 정보를 변경하고 싶은 경우
      changeModalData: ((state, action: PayloadAction<BusRoundModel>) => {
        state.busRound = action.payload;
      }),
      closeModal: state => {
        state.isShowModal = false;
        state.busRound = null;
      }
    },
  });

export const { showModal, changeModalData, closeModal } = dispatchModifactionModalSlice.actions;

export default dispatchModifactionModalSlice.reducer;