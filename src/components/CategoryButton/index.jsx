import styled, { css } from "styled-components";

const buttonVariants = {
  frontend: {
    background: "#6BD1FF",
    border: "2px solid #6BD1FF",
  },
  frontendG: {
    background: "#6BD1FF",
    fontSize: "48px",
    width: "297px",
    height: "92px",
    border: "2px solid #6BD1FF"
  },
  backend: {
    background: "#00C86F",
    border: "2px solid #00C86F",
  },
  mobile: {
    background: "#FFBA05",
    border: "2px solid #FFBA05",
  },
};

const CategoryButton = styled.button`
  font-family: "Roboto", sans-serif;
  color: #f5f5f5;
  font-size: 32px;
  font-weight: 800;
  text-align: center;
  width: 432px;
  height: 70px;
  border-radius: 15px;
  border: none;
  
  ${({ $variant }) =>
    buttonVariants[$variant] &&
    css`
      background: ${buttonVariants[$variant].background};
      font-size: ${buttonVariants[$variant].fontSize || "32px"};
      width: ${buttonVariants[$variant].width || "432px"};
      height: ${buttonVariants[$variant].height || "70px"};
      border: ${buttonVariants[$variant].border || "none"};
    `}
`;

export default CategoryButton;
