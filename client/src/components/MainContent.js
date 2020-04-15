import React, { useState } from 'react';
import styled from 'styled-components';
import {Right_button,Left_button} from "../images/Icon";
import Loader from './Loader';
const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    max-width:70%;
    max-height:600px;
    margin: 50px 15% 5% 15%;
    flex: 1;
    box-shadow:0 1px 3px 1px rgba(0,0,0,.3);
    position:relative;
    user-select:none;
`;
const Year = styled.span`
    position:absolute;
    font-wieght:600;
    font-size:25px;
    top:-40px;
`;
const Welcome_msg = styled.span`
    font-weight:600;
    font-size:50px;
`;
const Calander=styled.div`

`;
const NewWrapper=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    max-width:100%;
    margin-top:15%;
`;
const Lbutton=styled.div`
    position:absolute;
    left:-50px;
    cursor:pointer;
`;
const Rbutton=styled.div`
    position:absolute;
    right:-50px;
    cursor:pointer;
`;
// const Button=styled.div`
//     position:absolute;
//     curosr:pointer;
//     &:not(last-child){left:-50px};
// `;
function MainContent(props) {
    const [Loading,setLoading]= useState(false);
    const year_data="{year_data}";
    const calander_data={1:["hello"],2:["hello"]};
    const about_data="{about_data}";
    setTimeout(()=>{setLoading(true)},3000);
    return (
        <>
        {props.Auth&&Loading ? 
        <Wrapper>
            <Year>{year_data}</Year>
            <Lbutton><Left_button size="30"/></Lbutton>
            <Calander>{calander_data[2]}</Calander>
            <Rbutton><Right_button size="30"/></Rbutton>
            {/* <Button><Left_button size="30"/><Right_button size="30"/></Button> */}
        </Wrapper>: 
        (Loading ? 
        <NewWrapper>
            <Welcome_msg>
                {about_data}
            </Welcome_msg>
        </NewWrapper>:
        <NewWrapper>
            <Loader/>
        </NewWrapper>
        )
        }
        </>
    );
}
export default MainContent;