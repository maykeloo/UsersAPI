import styled from "styled-components";
import { ReactComponent as Load } from "../../assets/svg/loader.svg";

const LoadWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  position: fixed;
  left: 2rem;
  bottom: 2rem;
`;

export default function Loader() {
  return (
    <LoadWrapper>
      <Load />
    </LoadWrapper>
  );
}
