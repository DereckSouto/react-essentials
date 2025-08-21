export default function Tabs({ children, buttons, buttonsContainer = 'menu' }) {

  const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer className="flex mt-4">
        {buttons}
      </ButtonsContainer>
      {children}
    </>
  );
}
