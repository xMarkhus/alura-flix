import styled from "styled-components"
import Button from "../Button"

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 35px 51px;
    align-items: center;
    border-bottom: 4px solid #2271D1;
    box-shadow: 0px 5px 29px 0px #2271D1B2;

    img {
        max-width: 168px;
    }
`

const StyledListButtons = styled.ul`
    display: flex;
    list-style: none;
    gap: 25px;
`
const Header = () => {
    return (
        <StyledHeader>
            <img src="/images/logo.png "alt="Logo da Aluraflix" />
            <nav>
                <StyledListButtons>
                    <li><Button $variant="blueshadow">HOME</Button></li>
                    <li><Button $variant="transparent">NOVO VÍDEO</Button></li>
                </StyledListButtons>
            </nav>
        </StyledHeader>

    )
}

export default Header
