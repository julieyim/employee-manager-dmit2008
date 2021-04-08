import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';

import AuthContext from './../../auth/AuthContext'
const DashBoardStyles = styled.section `
    display: flex;
`

const SideBar = styled.aside `
    width: 256px;
    box-shadow: 0 0 5px 1px #ccc;
    height: calc(100vh - 64px);
    position: relative;
    z-index: 1;
`

const Panels = styled.section `
    width: calc(100% - 256px);
    height: ;
`

const DashBoard = (props) => {
    // access the authContext
    const auth = useContext(AuthContext)
    console.log("Dashboard Render")
    console.log(auth)

    if(auth.isUser){
        return ( 
            <DashBoardStyles>
                <SideBar>
                    <header>
                        <h1>Firebase Whats App</h1>
                        <p>firebase who's new</p>
                    </header>
                    <ul>
                        <li>view all</li>
                        <li>add</li>
                        <li>remove</li>
                        <li>edit</li>
                    </ul>
                </SideBar>
                <Panels></Panels>
            </DashBoardStyles>
         );
    }else{
        return <Redirect to="/login"/>
    }
}
 
export default DashBoard;