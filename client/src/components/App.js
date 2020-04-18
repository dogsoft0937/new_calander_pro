import React,{useState} from "react";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/Theme";
import Header from './Header';
import Footer from "./Footer";
import MainContent from './MainContent';
import Calendar from './Calendar';

const Container=styled.div`
  display:flex;
  min-height:100vh;
  flex-direction:column;
`;
export default () => {
  const [Auth,setAuth]=useState(false);
  const successAuth=()=>{
    setAuth(!Auth);
  }
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
          <Container>
            <Header Auth={Auth} successAuth={successAuth} />
            <MainContent Auth={Auth}/>
            <Footer/>
          </Container>
      </>
    </ThemeProvider>
  );
};