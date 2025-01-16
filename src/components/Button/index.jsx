import styled, { css } from "styled-components"

const Button = styled.button`
    font-family: "SourceSans3", sans-serif;
    font-size: 20px;
    font-weight: 900;
    text-align: center;
    width: 180.13px;
    height: 54px;
    gap: 0px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.9);
    opacity: 0px;

    ${({ $variant }) =>
        $variant === "blueshadow" && css`
            color: #2271D1;
            border: 2px solid var(--Blue, rgba(34, 113, 209, 1));
            box-shadow: 0px 0px 12px 4px rgba(34, 113, 209, 1) inset;
        `
    }

    ${({ $variant }) => 
        $variant === "transparent" && css`
            color: #FFFFFF;
            border: 2px solid rgba(245, 245, 245, 1);
        `
    }
    
    ${({ $variant }) =>
        $variant === "blue" && css`
            color: #2271D1;
            border: 2px solid var(--Blue, rgba(34, 113, 209, 1));
        `
    }
`

export default Button