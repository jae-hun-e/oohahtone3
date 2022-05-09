import React from "react";
import styled from "styled-components";

function Page1() {
    const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <Container>
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
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const ItemBox = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-color: gray;
    height: 200px;
`;
