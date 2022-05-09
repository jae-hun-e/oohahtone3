import React, { Component } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import img1 from "../asset/img1.png";

function Main() {
    return (
        <Box>
            <Fade left>{/* <image src={img1} /> */}</Fade>
            <Fade right>
                <Second>
                    <div>second guide content</div>
                </Second>
            </Fade>
            <Fade bottom>
                <Third>
                    <div>third guide content</div>
                </Third>
            </Fade>
            <Fade left>
                <First>
                    <div>first guide content</div>
                </First>
            </Fade>
            <Fade right>
                <Second>
                    <div>second guide content</div>
                </Second>
            </Fade>
            <Fade bottom>
                <Third>
                    <div>third guide content</div>
                </Third>
            </Fade>
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
