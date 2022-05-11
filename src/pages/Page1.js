import React from "react";
import styled from "styled-components";
//import {link} from 'react-router-dom';
import img0 from "../asset/page1/img0.jpg";
import img1 from "../asset/page1/img1.jpg";
import img2 from "../asset/page1/img2.jpg";
import img3 from "../asset/page1/img3.jpg";
import img4 from "../asset/page1/img4.jpg";
import img5 from "../asset/page1/img5.jpg";
import img6 from "../asset/page1/img6.jpg";

function Page1() {
    return (
        <Container>

            <UserBox>
                <UserImage>
                    <Profile src={img0}></Profile>
                </UserImage>
                <UserInfo>
                    <UserName>
                        김옷장 님의 옷장
                    </UserName>
                    <Info>
                        <Content>
                            <span role="img" aria-label="cloth">👚</span> 12
                        </Content>
                        <Content>
                            <span role="img" aria-label="heart">🖤</span> 54
                        </Content>
                    </Info>
                </UserInfo>
            </UserBox>
            <ItemBox>
                <Item><Image src={img1}></Image></Item>
                <Item><Image src={img2}></Image></Item>
                <Item><Image src={img3}></Image></Item>
                <Item><Image src={img4}></Image></Item>
                <Item><Image src={img5}></Image></Item>
                <Item><Image src={img6}></Image></Item>
                <Item><Image src={img1}></Image></Item>
                <Item><Image src={img2}></Image></Item>
                <Item><Image src={img3}></Image></Item>
                <Item><Image src={img4}></Image></Item>
                <Item><Image src={img5}></Image></Item>
                <Item><Image src={img6}></Image></Item>
            </ItemBox>
        </Container>
    );
}

export default Page1;

const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    padding-top: 50px;
    background-color: #8F71EA;
    padding-bottom: 50px;
`;

const UserBox = styled.div`
    background-color: #8F71EA;
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
    box-shadow: 10px 5px 5px 1px rgba(0,0,0,.2);
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
    background-color: #8F71EA;
`;

const UserName = styled.div`
    font-weight: bold;
    font-size: 45pt;
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
    grid-template-columns: repeat(3,1fr);
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
