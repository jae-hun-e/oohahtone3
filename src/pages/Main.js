<<<<<<< HEAD
//import React, { Component } from "react";
import React from 'react';

=======
import React from "react";
>>>>>>> upstream/main
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import img1 from "../asset/img1.png";
import img2 from "../asset/img2.png";
import img3 from "../asset/img3.png";

function Main() {
    return (
        <Box>
<<<<<<< HEAD
            <First>
                <Fade left>
                    <Image src={img1} />
                </Fade>
            </First>
            <Second>
                <Fade right>
                    <Image src={img2} />
                </Fade>
            </Second>
            <Third>
                <Fade left>
                    <Image src={img3} />
                </Fade>
            </Third>
=======
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
>>>>>>> upstream/main
        </Box>
    );
}

export default Main;

const Image = styled.img`
    margin: auto;
    width: 100%;
    height: match-content;
`;

const Box = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    background-color: black;
    justify-content: center;
    align-items: center;
`;

<<<<<<< HEAD
const First = styled.div`
    display: flex;
    flex-direction: column;
    
    color: white;
    width: 80%;
    height: match-content;
`;
const Second = styled(First)`
    width: 80%;
    height: match-content;
`;
const Third = styled(Second)`
=======
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
>>>>>>> upstream/main
`;
