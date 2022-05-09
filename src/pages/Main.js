import React, { Component } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import img1 from "../asset/img1.png";
import img2 from "../asset/img2.png";
import img3 from "../asset/img3.png";

function Main() {
    return (
        <Box>
            <Fade left>
                {/* <BackgroundImg url={img1}></BackgroundImg> */}
                <ImgTeg>
                    <Img src={img1} />
                </ImgTeg>
            </Fade>
            <Fade right>
                <ImgTeg>
                    <Img src={img2} />
                </ImgTeg>
            </Fade>
            <Fade top>
                <ImgTeg>
                    <Img src={img3} />
                </ImgTeg>
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

const BackgroundImg = styled.div`
    background-image: url(${(props) => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 500px;
    background-color: black;
`;

const ImgTeg = styled.div`
    width: 100%;
    height: 800px;
    color: black;
`;

const Img = styled.img`
    width: 100%;
    height: 800px;
`;
