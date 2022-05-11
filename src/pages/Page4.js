import React from "react";
import styled from "styled-components";
import img1 from "../asset/img1.png";
import img2 from "../asset/img2.png";
import img3 from "../asset/img3.png";
function Page4() {
    return (
        <Component>
            <ImgTeg>
                <Img src={img1} />
            </ImgTeg>
            <ImgTeg>
                <Img src={img2} />
            </ImgTeg>
            <ImgTeg>
                <Img src={img3} />
            </ImgTeg>
        </Component>
    );
}

export default Page4;

const Component = styled.div`
    width: 80%;
    height: 100vh;
    margin: auto;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
`;

const ImgTeg = styled.div`
    width: 100%;
    color: black;
`;

const Img = styled.img`
    width: 100%;
    height: 400px;
`;
