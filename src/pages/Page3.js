import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Page3() {
    return (
        <Component>
            <Clothes />
            <InfoComponent>
                <Info>
                    <InfoData>
                        <Title>옷 이름 : 삐뚜루 마뚜루</Title>
                        <Brand>브랜드 : 어쩌구 저쩌구 </Brand>
                        <Like>❤️ : 18</Like>
                        <Like>가격 : 5000원</Like>
                    </InfoData>
                </Info>
                <Pay>
                    <PayComponent>
                        <Slink to="/page4">결제</Slink>
                        <Period>대여 기간 📅</Period>
                    </PayComponent>
                </Pay>
            </InfoComponent>
        </Component>
    );
}

export default Page3;

const Component = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Clothes = styled.div`
    border: 1px solid red;
    position: relative;
    width: 40%;
    height: 0;
    padding-bottom: 40%;
`;

const InfoComponent = styled(Clothes)`
    display: flex;
    flex-direction: column;
`;

const Info = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 70%;
`;

const InfoData = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    font-size: 25px;
`;

const Like = styled.h3`
    font-size: 20px;
`;

const Brand = styled(Like)``;

const Pay = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 30%;
`;

const PayComponent = styled.div``;

const Slink = styled(Link)`
    width: 30%;
    height: 200px;
    border: 1px solid red;
`;

const Period = styled.div``;
// 가격, 사이즈, 브랜드
