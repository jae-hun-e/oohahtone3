import React from "react";
import styled from "styled-components";
import img1 from "../asset/page2/img1.png";
import img2 from "../asset/page2/img2.png";
import img3 from "../asset/page2/img3.jpg";
import img4 from "../asset/page2/img1.jpg";

function Other() {
    const images = [img1, img2, img3];
    return (
        <Container>
            <Box>
                <Title>
                    <Purple>#</Purple>코스튬
                </Title>
                <ItemBox>
                    {[0, 1].map(() => images.map((img) => <Image src={img} />))}

                    {/* <Item>
                        <Image src={img1}></Image>
                    </Item>
                    <Item>
                        <Image src={img2}></Image>
                    </Item>
                    <Item>
                        <Image src={img3}></Image>
                    </Item> */}
                    {/* <Item>
                        <Image src={img1}></Image>
                    </Item>
                    <Item>
                        <Image src={img2}></Image>
                    </Item>
                    <Item>
                        <Image src={img3}></Image>
                    </Item> */}
                </ItemBox>
            </Box>
            <Line></Line>
            <Box>
                <Title>
                    <Purple>#</Purple>편한옷
                </Title>
                <ItemBox>
                    <Item>
                        <Image src={img4}></Image>
                    </Item>
                    <Item>
                        <Image src={img2}></Image>
                    </Item>
                    <Item>
                        <Image src={img3}></Image>
                    </Item>
                    <Item>
                        <Image src={img4}></Image>
                    </Item>
                    <Item>
                        <Image src={img2}></Image>
                    </Item>
                    <Item>
                        <Image src={img3}></Image>
                    </Item>
                </ItemBox>
            </Box>
            <Line></Line>
            <Box>
                <Title>
                    <Purple>#</Purple>정장
                </Title>
                <ItemBox>
                    <Item>
                        <Image src={img1}></Image>
                    </Item>
                    <Item>
                        <Image src={img2}></Image>
                    </Item>
                    <Item>
                        <Image src={img3}></Image>
                    </Item>
                    <Item>
                        <Image src={img1}></Image>
                    </Item>
                    <Item>
                        <Image src={img2}></Image>
                    </Item>
                    <Item>
                        <Image src={img3}></Image>
                    </Item>
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
    background-color: lightgray;
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
    color: #8f71ea;
`;
const Title = styled.div`
    background-color: white;
    font-size: max(1.2vw, 20px);
    padding: 1.2vw;
    border-radius: 50px;
    box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.2);
    margin: 20px;
`;

const ItemBox = styled.div`
    display: grid;
    width: 70%;
    max-width: 1080px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2vw;
`;

const Item = styled.div`
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
    background-color: #8f71ea;
    height: 1px;
    width: 80%;
    margin-bottom: 4vw;
`;
