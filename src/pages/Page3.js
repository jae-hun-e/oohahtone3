import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img1 from "../asset/page3/img1.jpg";
function Page3() {
    return (
        <Component>
            <ContentBox>
                <Clothes src= {img1} />
                <InfoComponent>
                    <Info>
                        <Title>CLOTH : 휘뚜루 마뚜루 반팔</Title>
                        <Line/>
                        <InfoBox>
                            <Brand>BRAND : ABCD </Brand>
                            <Price>PRICE : 5,000</Price>
                            <Size><Black>SIZE :</Black> XL &nbsp;L &nbsp;<Black>M</Black> &nbsp;S &nbsp;XS</Size>
                            <Like><span role="img" aria-label="heart2">❤️</span> : 18</Like>
                        </InfoBox>
                        <Line/>
                    </Info>
                    <Pay>
                        <Period>대여 기간 <span role="img" aria-label="calendar">📅</span></Period>
                        <Slink to="/page4">결제 하기</Slink>
                        <Basket>장바구니</Basket>
                    </Pay>
                </InfoComponent>
            </ContentBox>
        </Component>
    );
}

export default Page3;

//화면 전체 박스
const Component = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8F71EA;
`;

//내용 감싸는 박스
const ContentBox = styled.div`
    display: flex;
    background-color: white;
    width: 50%;
    min-width: 800px;
    border-radius: 10px;
    box-shadow: 10px 5px 15px 3px rgba(0,0,0,.3);

`;
//ContentBox 는 Clothes 와 InfoComponent 로 구성
const Clothes = styled.img`
    display: block;
    width:50%;
    height: 100%
    ::after{
        display: block;
        content: "";
        padding-bottom: 50%;
    }
    border-radius: 10px 0px 0px 10px;
`;

const InfoComponent = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;
//InfoComponent는 Info 와 Pay 로 구성
const Info = styled.div`
    width: 100%;
    flex-basis: none;
    flex-grow: 2;

    display: flex;
    flex-direction: column;
`;



const Title = styled.div`
    font-size: 1.5vw;
    font-weight: bold;
    text-align: center;
    margin: 15px;
`;

const Line = styled.div`
    border : 0.5px solid lightgray;
    margin-bottom: 20px;
`;

const InfoBox = styled.div`
    position: relative;
    padding: 10px;
    padding-bottom: 20px;
`;

const Like = styled.div`
    font-size:1.4vw;
    margin: 15px;
    position: absolute;
    top: 0;
    right: 0;
`;

const Price = styled.div`
    font-size: 1.4vw;
    margin: 5px;
    margin-bottom: 1vw;
`;


const Brand = styled(Price)`
`;

const Size = styled(Price)`
    color: lightgray;
`;

const Black = styled.span`
    color: black;
`;

const Pay = styled(Info)`
    flex-grow: 1;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
`;

const Slink = styled(Link)`
    display: block;
    font-size: max(1.2vw,20px);
    padding: 1.2vw;
    border-radius: 50px;
    box-shadow: 1px 1px 5px 2px rgba(0,0,0,.2);
    :active{
        box-shadow: inset 1px 1px 5px 2px rgba(0,0,0,.2);
    }
`;

const Period = styled.div`
    font-size: max(1.2vw,20px);
    padding: 1.2vw;
    border-radius: 50px;
    box-shadow: 1px 1px 5px 2px rgba(0,0,0,.2);
    margin: 25px;
    :active{
        box-shadow: inset 1px 1px 5px 2px rgba(0,0,0,.2);
    }
`;

const Basket = styled(Period)`
`;
// 가격, 사이즈, 브랜드
