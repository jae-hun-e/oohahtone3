import React from "react";
import styled from "styled-components";
import img from "../asset/mainpage.png";
import { Link } from "react-router-dom";

function Main() {
    return (
        <Box>
            <ImgTeg to="/Mypage">
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

const ImgTeg = styled(Link)`
    width: 100%;
    height: 100%;
    min-height: 800px;
    padding: 20px 5px;
`;

const Img = styled.img`
    width: 100%;
    object-fit: cover;
`;
