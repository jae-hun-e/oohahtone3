import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

import img1 from "../asset/page2/img1.png";
import img2 from "../asset/page2/img2.png";
import img3 from "../asset/page2/img3.jpg";
import img4 from "../asset/page2/img1.jpg"
import img5 from "../asset/page2/img5.jpeg"
import img6 from "../asset/page2/img6.png"
import iimg1 from "../asset/page2/iimg1.jpg"
import iimg2 from "../asset/page2/iimg2.jpg"
import iimg3 from "../asset/page2/iimg3.jpg"

function Other() {
    const images1 = [img1, img2, img3];
    // const images2 = [img4, img5, img6];
    const images3 = [iimg1, iimg2, iimg3];
    return (
        <Container>
            <Box>
                <MainTitle>마음에 드는 옷을 <Purple>Click!</Purple></MainTitle>
                <Title>
                    <Purple>#</Purple>코스튬
                </Title>
                <ItemBox>
                    {[0, 1].map(() => images1.map((img) => <Image src={img} />))}
                </ItemBox>
            </Box>
            <Line></Line>
            <Box>
                <Title>
                    <Purple>#</Purple>편한옷
                </Title>
                <ItemBox>
                    <ItemLink to="/Buy"><Image src={img4}></Image></ItemLink>
                    <Item><Image src={img5}></Image></Item>
                    <Item><Image src={img6}></Image></Item>
                    <Item><Image src={img4}></Image></Item>
                    <Item><Image src={img5}></Image></Item>
                    <Item><Image src={img6}></Image></Item>
                </ItemBox>
            </Box>
            <Line></Line>
            <Box>
                <Title>
                    <Purple>#</Purple>정장
                </Title>
                <ItemBox>
                    {[0, 1].map(() => images3.map((img) => <Image src={img} />))}
                </ItemBox>
            </Box>
        </Container>
    );
}

export default Other;

const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    padding-top: 50px;
    background-color: #efddff;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`;

const Purple = styled.span`
    font-weight: bold;
    margin-right: 5px;
    color: #8F71EA;
`;
const Title = styled.div`
    font-weight: bold;
    background-color:white;
    font-size: max(1.2vw,20px);
    padding: 0.5vw 1.2vw;
    border-radius: 50px;
    box-shadow: 1px 1px 5px 2px rgba(0,0,0,.2);
    margin: 20px;
`;

const MainTitle = styled.div`
    font-size: max(1.5vw,30px);
    padding: 1.2vw;
    margin: 20px;
`;

const ItemBox = styled.div`
    display: grid;
    width: 70%;
    max-width: 1080px;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(2,1fr);
    gap: 2vw;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const ItemLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`;

const Line = styled.div`
    background-color: #8F71EA;
    height: 1px;
    width: 80%;
    margin-bottom: 4vw;
`;