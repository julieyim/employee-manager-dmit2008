import React, {useContext} from 'react';
import {Redirect, Link, useRouteMatch, Switch, Route} from 'react-router-dom';
import styled from 'styled-components';

import AuthContext from './../../auth/AuthContext'

import ViewAllPanel from './panels/ViewAllPanel'
import EditPanel from './panels/EditPanel'
import DeletePanel from './panels/DeletePanel'
import AddPanel from './panels/AddPanel'

const DashBoardStyles = styled.section `
    display: flex;
`

const SideBar = styled.aside `
    width: 256px;
    box-shadow: 0 0 5px 1px #ccc;
    height: calc(100vh - 64px);
    position: relative;
    z-index: 1;
    padding: 1rem;
    h1{
        font-size: 2rem;
    }
    p{
        margin-bottom: 1rem;
        color: #999;
    }
    a{
        text-decoration: none;
        font-size: 14px;
    }
`

const Panels = styled.section `
    width: calc(100% - 256px);
    height: ;
`

const DashBoard = (props) => {
    // access the authContext
    const auth = useContext(AuthContext)
    // console.log("Dashboard Render")
    // console.log(auth)
    const {path, url} = useRouteMatch()
    // const temp = {jim:null, jill:null}
    // const {jim, jill} = temp

    if(auth.isUser){
        return ( 
            <DashBoardStyles>
                <SideBar>
                    <header>
                        <h1>Firebase Whats App</h1>
                        <p>firebase who's new</p>
                    </header>
                    <ul>
                        <li><Link to={`${url}`}>view all</Link></li>
                        <li><Link to={`${url}/add`}>add content</Link></li>
                        <li><Link to={`${url}/edit`}>edit content</Link></li>
                        <li><Link to={`${url}/delete`}>remove content</Link></li>
                    </ul>
                </SideBar>
                <Panels>
                    <Switch>
                        <Route exact path={path}><ViewAllPanel/></Route>
                        <Route path={`${path}/add`}><AddPanel/></Route>
                        <Route path={`${path}/edit`}><EditPanel/></Route>
                        <Route path={`${path}/delete`}><DeletePanel/></Route>
                    </Switch>
                </Panels>
            </DashBoardStyles>
         );
    }else{
        return <Redirect to="/login"/>
    }
}
 
export default DashBoard;