import styled from "styled-components";
import CardButton from "./CardButton";

import trashIcon from "../../assets/icons/delete-icon.png";
import editIcon from "../../assets/icons/edit-icon.png";
import cardImage from "../Card/image-card.png";

const cardVariants = {
  frontend: {
    color: "#6BD1FF",
  },
  backend: {
    color: "#00C86F",
  },
  mobile: {
    color: "#FFBA05",
  },
};

const StyledCardContainer = styled.div`
  width: 100%;
  max-width: 432px;
`;

const StyledCardImage = styled.img`
  width: 100%;
  border: 4px solid ${({ $variant }) => cardVariants[$variant]?.color || "#6BD1FF"};
  border-radius: 4px 4px 0px 0px;
  display: block;
  box-shadow: 0px 0px 17px 8px ${({ $variant }) => cardVariants[$variant]?.color || "#6BD1FF"} inset;
  width: 432px;
  padding: 2.79px 0.24px;
`;

const StyledCardFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 59px;
  gap: 70px;
  border: 4px solid ${({ $variant }) => cardVariants[$variant]?.color || "#6BD1FF"};
  border-top: none;
  border-radius: 0px 0px 15px 15px;
`;

const Card = ({ $variant }) => {
  return (
    <StyledCardContainer>
      <StyledCardImage src={cardImage} $variant={$variant} />
      <StyledCardFooter $variant={$variant}>
        <CardButton img={trashIcon} text="DELETAR" />
        <CardButton img={editIcon} text="EDITAR" />
      </StyledCardFooter>
    </StyledCardContainer>
  );
};

export default Card;
