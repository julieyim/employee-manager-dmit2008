import React from 'react';
import styled from 'styled-components';

import Logo from './../components/icons/Logo';

const HomPageStyles = styled.header`
    text-align: center;
    margin: 6rem auto 0;
    svg{
        width: 80px;
    }
    h1{
        font-size: 2.25rem;
    }
    p{
        color: #767484;
    }
`

const HomePage = (props) => {
    return (  
        <HomPageStyles>
            <Logo/>
            <h1>Employee Manager</h1>
            <p>Focus on people and we'll focus on the paperwork</p>
        </HomPageStyles>
    );
}
 
export default HomePage;