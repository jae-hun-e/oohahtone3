import React, { Component } from "react";
import styled from "styled-components";

function Main() {
    return (
        <Box>
            <First>
                <div>first guide content</div>
            </First>
            <Second>
                <div>second guide content</div>
            </Second>
            <Third>
                <div>third guide content</div>
            </Third>
        </Box>
    );
}

export default Main;

const Box = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
`;

const First = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100%;
    height: 300px;
    background-color: black;
`;
const Second = styled(First)`
    width: 100%;
    height: 300px;
    background-color: blueviolet;
    color: black;
`;
const Third = styled(Second)`
    background-color: yellow;
`;
