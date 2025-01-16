import styled from "styled-components"

const StyledCardButton = styled.button`
    color: #F5F5F5;
    display: flex;
    width: 68px;
    height: 19px;
    font-size: 16px;
    font-weight: 800;
    align-items: center;
    border: none;
    background-color: #262626;
    gap: 6px;
`

const CardButton = ({ text, img }) => {
    return (
       <StyledCardButton>
            <img src={img}  alt={text}/>
            {text}
       </StyledCardButton>
    )
}

export default CardButton
