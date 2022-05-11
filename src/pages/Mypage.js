import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import img0 from "../asset/page1/img0.jpg";
import img1 from "../asset/page1/img1.jpg";
import img2 from "../asset/page1/img2.jpg";
import img3 from "../asset/page1/img3.jpg";
import img4 from "../asset/page1/img4.jpg";
import img5 from "../asset/page1/img5.jpg";
import img6 from "../asset/page1/img6.jpg";

import { modeChange } from "../atom/Atom";
import Modal from "react-modal";

const ThemeDiv = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
`;
const ChangeTheme = styled.div`
    position: absolute;
    top: 10px;
    right: -150px;
    background-color: wheat;
    width: 70px;
    height: 20px;
    text-align: center;
    border-radius: 20px;
`;

const ColorList = styled.div`
    display: flex;
    gap: 10px;
`;
const Color = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: ${(props) => props.color};
`;

function Mypage() {
    const [theme, setTheme] = useRecoilState(modeChange);
    const color = 0;
    const colorList = ["whitesmoke", "#212121", "#e4f211", "#4691f8", "#8f71ea"];

    const [modelOpen, setModel] = useState(false);
    const onClicklModel = () => {
        setModel(!modelOpen);
    };

    const changeColor = (idx) => {
        setTheme(idx);
    };

    // const onClickModal =
    return (
        <Container>
            <UserBox>
                <UserImage>
                    <Profile src={img0}></Profile>
                </UserImage>
                <UserInfo>
                    <ThemeDiv>
                        <UserName>김옷장 님의 옷장</UserName>
                        <ChangeTheme onClick={onClicklModel}>
                            테마변경
                            <Modal
                                isOpen={modelOpen}
                                style={{
                                    overlay: {
                                        position: "fixed",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        padding: "20% 0 0 65%",
                                    },
                                    content: {
                                        position: "relative",
                                        width: "20vw",
                                        height: "20vw",
                                        right: "200px",
                                        border: "1px solid #ccc",
                                        background: "rgba(255, 255, 255, 0.8)",
                                        borderRadius: "20px",
                                        padding: "20px",
                                    },
                                }}
                            >
                                <ColorList>
                                    {colorList.map((color, idx) => (
                                        <Color
                                            color={color}
                                            num={idx}
                                            onClick={() => changeColor(idx)}
                                        />
                                    ))}
                                </ColorList>
                            </Modal>
                        </ChangeTheme>
                    </ThemeDiv>
                    <Info>
                        <Content>
                            <span role="img" aria-label="cloth">
                                👚
                            </span>
                            12
                        </Content>
                        <Content>
                            <span role="img" aria-label="heart">
                                🖤
                            </span>
                            54
                        </Content>
                    </Info>
                </UserInfo>
            </UserBox>
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
                    <Image src={img4}></Image>
                </Item>
                <Item>
                    <Image src={img5}></Image>
                </Item>
                <Item>
                    <Image src={img6}></Image>
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
                <Item>
                    <Image src={img4}></Image>
                </Item>
                <Item>
                    <Image src={img5}></Image>
                </Item>
                <Item>
                    <Image src={img6}></Image>
                </Item>
            </ItemBox>
        </Container>
    );
}

export default Mypage;

const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    padding-top: 50px;
    background-color: ${(props) => props.theme.bgColor};
    padding-bottom: 50px;
`;

const UserBox = styled.div`
    background-color: ${(props) => props.theme.bgColor};
    height: match-content;
    width: 70%;
    max-width: 800px;
    margin-bottom: 2vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UserImage = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 100px;
    background-color: lightgray;
    margin: 20px;
    box-shadow: 10px 5px 5px 1px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
`;

const Profile = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100px;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.bgColor};
`;

const UserName = styled.div`
    font-weight: bold;
    font-size: 45pt;
    color: ${(props) => props.theme.textColor};
`;

const Info = styled.div`
    display: flex;
    justify-content: center;
`;

const Content = styled.div`
    font-size: 30pt;
    margin-right: 50px;
    padding: 10px;
`;

const ItemBox = styled.div`
    display: grid;
    width: 70%;
    max-width: 1080px;
    grid-template-columns: repeat(3, 1fr);
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
