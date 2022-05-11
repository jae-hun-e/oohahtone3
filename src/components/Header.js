import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../asset/logo.png";
import React from "react";

function Header() {
    return (
        <>
            <Container>
                <Title>
                    <Image src={logo} />
                    <SLink to="/main" />
                </Title>
                <Nav>
                    <Btn>
                        <Link to="/">GUIDE</Link>
                    </Btn>
                    <Btn>
                        <Link to="/mypage">MY</Link>
                    </Btn>
                    <Btn>
                        <Link to="/other">OTHER</Link>
                    </Btn>
                    {/* <Btn>
                        <Link to="/page3">BUY</Link>
                    </Btn> */}
                </Nav>
            </Container>
        </>
    );
}
export default Header;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    box-shadow: 10px 5px 5px 1px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h3`
    /* font-family: Arial, Helvetica, sans-serif; */
`;

const Image = styled.img`
    width: 100px;
    height: 30px;
    margin-left: 40px;
`;

const SLink = styled(Link)`
    position: absolute;
    left: 40px;
    width: 100px;
    height: 30px;
    /* border: 1px solid blue; */
`;

const Nav = styled.div`
    margin-right: 40px;
`;

const Btn = styled.button`
    border-radius: 10px;
    margin: 10px;
    background-color: white;
    border: none;
    :hover {
        font-weight: bold;
        text-decoration: underline;
    }
`;
