import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';
import Loader from './Loader';

const Welcome_msg = styled.span`
    font-weight:600;
    font-size:50px;
`;
const NewWrapper=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    max-width:100%;
    margin-top:15%;
`;

function MainContent(props) {
    const [Loading,setLoading]= useState(true);
    const about_data="{about_data}";
    setTimeout(()=>{setLoading(true)},3000);
    return (
        <>
        {/* {Loading ? */}
        {props.Auth&&Loading ? 
        // <Wrapper>
        //     <Year>{year_data}</Year>
        //     <Lbutton><Left_button size="30"/></Lbutton>
        //     <Calander>{calander_data[2]}</Calander>
        //     <Rbutton><Right_button size="30"/></Rbutton>
        //     <Button><Left_button size="30"/><Right_button size="30"/></Button>
        // </Wrapper>
        // <Wrapper><Calendar/></Wrapper>
        <Calendar/>
        : 
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