import React from "react";
import styled from "styled-components";
import img from "../asset/mainpage.png";

function Main() {
    return (
        <Box>
            <ImgTeg>
                <Img src={img} />
            </ImgTeg>
        </Box>
    );
}

export default Main;
const Box = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
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
