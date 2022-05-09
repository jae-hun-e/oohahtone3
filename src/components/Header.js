import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
    return (
        <>
            <Container>
                <Title>
                    <img src="../logo.png"></img>
                </Title>
                <Nav>
                    <Btn>
                        <Link to="/">GUIDE</Link>
                    </Btn>
                    <Btn>
                        <Link to="/page1">MY</Link>
                    </Btn>
                    <Btn>
                        <Link to="/page2">OTHER</Link>
                    </Btn>
                    <Btn>
                        <Link to="/page3">BUY</Link>
                    </Btn>
                </Nav>
            </Container>
        </>
    );
}
export default Header;

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    box-shadow: 10px 5px 5px 1px rgba(0,0,0,.2);
`;

const Nav = styled.div`
`

const Btn = styled.button`
    border-radius: 10px;
    margin: 10px;
    background-color: white;
    border: none;
    :hover{
        font-weight: bold;
        text-decoration: underline;
    }
`;

const Title = styled.h3`
    font-family: Arial, Helvetica, sans-serif;
`;
