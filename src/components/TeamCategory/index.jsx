import styled from "styled-components";
import Card from "../Card";
import CategoryButton from "../CategoryButton";

const StyledCategorySection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 93px;
`;

const StyledCardSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const TeamCategory = ({ categories }) => {
  return (
    <StyledCategorySection>
      {categories.map((category) => (
        <div key={category.id}>
          <CategoryButton $variant={category.name.replace(" ", "").toLowerCase()}>
            {category.name.toUpperCase()}
          </CategoryButton>
          <StyledCardSection>
            {[...Array(3)].map((_, index) => (
              <Card key={index} $variant={category.name.replace(" ", "").toLowerCase()} />
            ))}
          </StyledCardSection>
        </div>
      ))}
    </StyledCategorySection>
  );
};

export default TeamCategory;
