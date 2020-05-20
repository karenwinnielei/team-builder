import React from 'react'
import styled from 'styled-components'


export const Styled = styled.div`
    text-align: center;
    h1{
        font-size: 5rem;
        color: navy;
    }

    p{
        font-size: 1.4rem;
    }

    h2{
        font-size: 2.4rem;
        color: gray;
    }

    h3{
        font-size: 2.4rem;
    }

    h4{
        font-size: 2.4rem;
    }

    border: 1px solid gray;
    border-radius: 5px;
    width: 80%;
    margin: 4% auto;
`

export const StyledButton = styled.button`
    width: 20%;
    height: 30px;
    background: red;
    color: white;
    border-radius: 5px;
    border: 1px solid black;
    box-shadow: 0px 1px 6px -2px black;
    font-size: 1.2rem;
`

export const StyledForm = styled.form`
    border: 1px solid navy;
    padding: 4%;
    width: 80%;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    font-size: 1.4rem;
    line-height: 2;
`

export const StyledTeam = styled.div`
    border: 1px solid gray;
    padding: 2% 4%;
    margin: 4% auto;
    width: 80%;
    border-radius: 5px;
`