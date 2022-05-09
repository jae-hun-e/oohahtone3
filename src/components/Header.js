import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
    return (
        <>
            <Container>
                <Hello>안녕하세요</Hello>
                <Btn>
                    <Link to="/">Home</Link>
                </Btn>
                <Btn>
                    <Link to="/page1">page1</Link>
                </Btn>
                <Btn>
                    <Link to="/page2">page2</Link>
                </Btn>
                <Btn>
                    <Link to="/page3">page3</Link>
                </Btn>
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
`;

const Btn = styled.button`
    border-radius: 10px;
    margin: 10px;
    background-color: white;
`;

const Hello = styled.h3`
    color: blue;
`;
