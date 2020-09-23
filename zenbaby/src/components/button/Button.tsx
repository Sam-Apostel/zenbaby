import React from 'react';
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
	background-image: linear-gradient(to right,#E0E4E5 0%,#346EA3 51%,#E0E4E5 100%);
	background-size: 200% auto;
    border-radius: 30px;
    border: none;
    color: white;
    margin: 0;
    padding: .5rem 2em;
    transition: .4s;
    cursor: pointer;
    font-family: 'Work Sans';
    font-weight: 500;
    &:hover {
    	background-position: right center;	
    }
`;

export interface ButtonProps {
	children: string | HTMLElement |[string|HTMLElement],
	primary: boolean,
	size: number,
	label: string
}

export const Button = (props: ButtonProps) => {
	return (
		<StyledButton>
			{props.label}
		</StyledButton>
	);
};

export default Button;
