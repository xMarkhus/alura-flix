import styled from "styled-components"
import BannerBackground from "./banner.png"
import CategoryButton from "../CategoryButton"

const StyledSectionBanner = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    height: 744px;
    padding: 343px 41px 120px 41px;
    overflow: hidden;
    box-sizing: border-box;
    border-bottom: 4px solid #6BD1FF;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${BannerBackground});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        opacity: 0.8;
        z-index: 1;
    }

    > * {
        position: relative;
        z-index: 2;
    }
`


const StyledFigure = styled.figure`
    width: 646px;
    height: 333.58px;
    border-radius: 4px;
    border: 4px solid #6BD1FF;
    box-shadow: 0px 0px 17px 8px #6BD1FF inset;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
`

const StyledTitleBanner = styled.h1`
    color: #f5f5f5;
    font-size: 46px;
    font-weight: 400;
`

const StyledParagraphBanner = styled.p`
    color: #f5f5f5;
    font-size: 20px;
    line-height: 21px;
`

const StyledContainerInfo = styled.div`
    max-width: 800px;
`

const Banner = () => {
    return (
        <StyledSectionBanner>
            <StyledContainerInfo>
                <CategoryButton $variant="frontendG">FRONT END</CategoryButton>
                <StyledTitleBanner>SEO com React</StyledTitleBanner>
                <StyledParagraphBanner>
                    Eu to aqui pra nesse vídeo dizer que a gente vai aprender a
                    começar uma app inspirada no desenho Pokémon com Nextjs e
                    React, ver algumas dicas sobre performance e de quebra
                    conhecer uma plataforma sensacional pra fazer deploy que é a
                    Vercel. Tudo em 22 minutos nesse vídeo feito com todo o
                    carinho do mundo construindo uma "Pokedex"!
                </StyledParagraphBanner>
            </StyledContainerInfo>
            <StyledFigure>
                <img src={BannerBackground} alt="Banner de SEO com React" />
            </StyledFigure>
        </StyledSectionBanner>
    )
}

export default Banner
