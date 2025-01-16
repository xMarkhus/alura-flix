import styled from "styled-components"

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 42px;
    padding-bottom: 42px;
    border-top: 4px solid #2271D1;
    box-shadow: 0px 5px 29px 0px #2271D1B2;

    img {
        max-width: 168px;
    }
`

const Footer = () => {
    return (
        <StyledFooter>
                <img src="/images/logo.png " alt="Logo da Aluraflix" />
        </StyledFooter>
    )
}

export default Footer