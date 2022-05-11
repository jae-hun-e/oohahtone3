import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import img1 from "../asset/img1.png";
import img2 from "../asset/img2.png";
import img3 from "../asset/img3.png";

function Main() {
    return (
        <Box>
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
const Third = styled(Second)``;
