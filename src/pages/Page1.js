import React from "react";
import styled from "styled-components";
import {link} from 'react-router-dom';

function Page1() {
    const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <Container>

            <UserBox>
                <UserImage>
                    {/* 이미지 */}
                </UserImage>
                <UserInfo>
                    <UserName>
                        김옷장 님의 옷장
                    </UserName>
                    <Info>
                        <Content>
                            👚 12
                        </Content>
                        <Content>
                            🖤 54
                        </Content>
                    </Info>
                </UserInfo>
            </UserBox>
            <ItemBox>
                {test.map((num, idx) => (
                    <Item>{`item${idx + 1}`}</Item>
                ))}
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
    grid-template-columns: repeat(3,1fr);
    gap: 2vw;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    ::after{
        display: flex;
        content: "";
        padding-bottom: 100%;
    }
`;

