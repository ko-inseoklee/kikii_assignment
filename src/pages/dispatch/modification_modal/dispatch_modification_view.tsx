import { DispatchModificationProps } from "./dispatch_modification";
import { StyledDispatchModificationView, Title, Section, Subtitle, Content, ItemInfo, CloseButton, InputWrapper, Input, Colon, ButtonGroup, StyledButton } from "./dispatch_modification.styled";


const DispatchModificationView = ({
  close,
  hour,
  minute,
  item,
  handleHourChange,
  handleMinuteChange,
  handleUpdateButton,
}: DispatchModificationProps) => {
  return (
    <StyledDispatchModificationView>
      <Title>시간 수정</Title>
      <Section>
        <Subtitle>A. 변경할 시간</Subtitle>
        <Content>변경할 시간을 선택(클릭)해주세요.</Content>
        <ItemInfo>
          {item?.driverName} - {item?.busRound} 회차 / {item?.startTime}
          <CloseButton onClick={close}>X</CloseButton>
        </ItemInfo>
      </Section>
      <Section>
        <Subtitle>B. 수정 시간 입력</Subtitle>
        <Content>수정할 시간을 입력해주세요.</Content>
        <InputWrapper>
          <Input
            type="number"
            value={hour}
            onChange={handleHourChange}
            min={0}
            max={24}
          />
          <Colon>:</Colon>
          <Input
            type="number"
            value={minute}
            onChange={handleMinuteChange}
            min={0}
            max={59}
          />
        </InputWrapper>
      </Section>
      <ButtonGroup>
        <StyledButton className="cancel" onClick={close}>취소</StyledButton>
        <StyledButton className="confirm" onClick={handleUpdateButton}>변경</StyledButton>
      </ButtonGroup>
    </StyledDispatchModificationView>
  );
};

export default DispatchModificationView;
