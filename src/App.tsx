import { Fragment } from "react";
import "./App.css";
import { UsersList } from "./components/User/UserList/UsersList";
import GlobalStyle, { ContentWrapper } from "./Global.styles";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <ContentWrapper>
        <UsersList />
      </ContentWrapper>
    </Fragment>
  );
}

export default App;
