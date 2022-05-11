import React from "react";
import styled from "styled-components";
import img from "../asset/shipping.png";

function Shipping() {
    return (
        <Box>
            <ImgTeg>
                <Img src={img} />
            </ImgTeg>
        </Box>
    );
}

export default Shipping;

const Box = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
`;

const ImgTeg = styled.div`
    width: 100%;
    height: 100%;
    min-height: 800px;
    padding: 20px 5px;
`;

const Img = styled.img`
    width: 100%;
    object-fit: cover;
`;
