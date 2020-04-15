import React, { useState } from 'react';
import styled from 'styled-components';
import {Loading_logo} from "../images/Icon";
import Loader from './Loader';
const Wrapper = styled.div`
    margin-top:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    max-width:100%;
    height:300px;
`;
const Welcome_msg = styled.span`
    font-weight:600;
    font-size:50px;
`;
function MainContent(props) {
    const [Loading,setLoading]= useState(false);
    setTimeout(()=>{setLoading(true)},3000);
    return (
        <>
            <Wrapper>
                {props.Auth&&Loading ? <Welcome_msg>WELCOME Auth</Welcome_msg> : (Loading? <Welcome_msg>
                    WELCOME MY PAGE<br />
                    WELCOME MY PAGE<br />
                    WELCOME MY PAGE<br />
             </Welcome_msg> :<Loader/>)}
             {}
            </Wrapper>
        </>
    );
}
export default MainContent;