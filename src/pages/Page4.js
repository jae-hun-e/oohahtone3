import React from "react";
import styled from "styled-components";

function Page4() {
    return (
        <Component>
            <Clothes />
            <InfoComponent>
                <Info />
                <Pay />
            </InfoComponent>
        </Component>
    );
}

export default Page4;

const Component = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Clothes = styled.div`
    background-color: red;
    position: relative;
    width: 40%;
    height: 0;
    padding-bottom: 40%;
`;

const InfoComponent = styled(Clothes)`
    background-color: blue;
`;
const Info = styled.div`
    background-color: yellow;
    width: 100%;
    height: 0;
    padding-bottom: 70%;
`;

const Pay = styled.div`
    background-color: blue;
    width: 100%;
    height: 0;
    padding-bottom: 30%;
`;
