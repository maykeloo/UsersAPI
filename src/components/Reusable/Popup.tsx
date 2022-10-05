import styled from "styled-components";

const PopupWrapper = styled.div<{ color: string }>`
  position: fixed;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  background: ${(props) => props.color};
  padding: 2rem;
  color: white;
  width: 50vw;
  text-align: center;
  border-radius: 10px;
  font-weight: 500;

  @media screen and (max-width: 786px) {
    top: 1rem;
    z-index: 1;
    height: fit-content;
    width: 95vw;
    padding: 0.5rem;
  }
`;

export default function Popup({
  children,
  color,
}: {
  children: string;
  color: string;
}) {
  return (
    <PopupWrapper color={color}>
      <div>{children}</div>
    </PopupWrapper>
  );
}
