import { Fragment, useEffect } from "react";
import { UsersList } from "./components/User/UserList/UsersList";
import GlobalStyle, { ContentWrapper } from "./Global.styles";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { SignUp } from "./components/SignInUp/SignUp";
import { SignIn } from "./components/SignInUp/SignIn";
import { useSelector } from "react-redux";
import { ReduxState } from "./types/redux";
import { useRefreshToken } from "./hooks/useRefreshToken";

function App() {
  const isLogged = useSelector((state: ReduxState) => state.loggedReducer)

  const { refetch } = useRefreshToken();
 
  useEffect(() => {
    refetch();
  }, [])

  return (
    <Fragment>
      <GlobalStyle />
      <ContentWrapper>
        <Router>
          <Routes>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/" element={isLogged ? <UsersList /> : <Navigate replace to="/signup"/>}/>
          </Routes>
        </Router>
      </ContentWrapper>
    </Fragment>
  );
}

export default App;
